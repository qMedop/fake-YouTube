let allDataArray = []
let searchContent = document.getElementById('searchContent')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const qSearch = urlParams.get("q");
document.addEventListener('dataFetched', function(event) {
  document.getElementById('inputSearch').value = qSearch
  videosArray.forEach(video => {
    allDataArray.push(video)
  });
  channelsArray.forEach(channel => {
    if(channel.user !== 'guest') {
      allDataArray.push(channel)
    }
  });
  playListsArray.forEach(playlist => {
    allDataArray.push(playlist)
  });
  shortsArray.forEach(short => {
    allDataArray.push(short)
  });
  const preprocessedData = searchData(allDataArray, qSearch)
  preprocessedData.forEach(element => {
      appendResult(element)
  });
  removeWaitingLoad()

});
function appendResult(element) {
  if(element.dataType == 'video') {
    let videoContainer = document.createElement('div')
    let inner = document.createElement('div')
    videoContainer.classList.add('videos-container-style')
    videoContainer.classList.add('only-view')
    inner.classList.add('videos-container')
    videoContainer.append(inner)
    searchContent.append(videoContainer)
    appendVideos([element],inner)
  }
  if(element.dataType == 'short') {
    let container = document.createElement('div')
    // container.classList.add('')
  }
  if(element.dataType == 'playlist') {
    let listContainer = document.createElement('div')
    let inner = document.createElement('div')
    listContainer.classList.add('playlist-container-style')
    listContainer.classList.add('only-view')
    inner.classList.add('list-container')
    listContainer.append(inner)
    searchContent.append(listContainer)
    appendPlayList([element],inner)
  }
  if(element.dataType == 'channel') {
    let channelContainer = document.createElement('div')
    channelContainer.classList.add('channel-container')
    channelContainer.classList.add('only-view')
    searchContent.append(channelContainer)
    appendChannelView([element],channelContainer)
  }
}
function searchData(allData, searchQuery) {
  // Lowercase the search query for case-insensitive search
  const query = searchQuery.toLowerCase();

  // Function to calculate score and prioritize data types
  const calculateScore = (dataItem) => {
    let score = 0;

    // Check for exact match in name, description, or user name for direct channel user search
    if (dataItem.dataType === "channel" && (dataItem.user.toLowerCase() === query)) { // Added null check for channel
      score = 15; // Highest score for exact channel user match
    } else {
      // Check for other matches (adjusted logic)
      if (query.includes(dataItem.name.toLowerCase())) { 
        score = 10;
      } else {
        // Check for partial match at the beginning (more relevant)
        if (dataItem.name.toLowerCase().startsWith(query) ||
            (dataItem.dataType === "channel" && (dataItem.user.toLowerCase().startsWith(query)))) { // Added null check for channel
          score = 5;
        } else {
          // Check for partial match anywhere (less relevant)
          if (dataItem.name.toLowerCase().includes(query) ||
              // dataItem.description.toLowerCase().includes(query) ||
              (dataItem.dataType === "channel" && (dataItem.user.toLowerCase().includes(query)))) { // Added null check for channel
            score = 1;
          }
        }
      }
    }

    // Increase score for channels (priority)
    if (dataItem.dataType === "channel") {
      score += 5;
    }
    if (dataItem.dataType === "playlist") {
      score += 1;
    }

    // Check for user association and add score for related videos/playlists
    if ((dataItem.dataType === "video" || dataItem.dataType === "playlist") &&
        (dataItem.channel && dataItem.channel.user.toLowerCase().includes(query))) { // Added null check for channel
      score += 3;
    }

    // Priority score based on data type and search query
    if (query.includes("playlist") && dataItem.dataType === "playlist") {
      score += 10; // Playlists at the top if "playlist" is in the query
    } else if (query.includes("video") && (dataItem.dataType === "video")) {
      score += 5; // Videos at the top if "video" is in the query
    } else if (query.includes("channel") && dataItem.dataType === "channel") {
      score += 3; // Channels at the top if "channel" is in the query
    }

    return score;
  };

  // Function to check if data item contains the query
  const containsQuery = (dataItem) => {
    return (query.includes(dataItem.name.toLowerCase())) ||
          (dataItem.name.toLowerCase().includes(query)) || 
            (dataItem.dataType === "channel" && (query.includes(dataItem.user.toLowerCase()))) ||
            (dataItem.dataType === "channel" && (dataItem.user.toLowerCase().includes(query))) ||
            ((dataItem.dataType === "video" || dataItem.dataType === "playlist") && 
            (dataItem.channel && query.includes(dataItem.channel.user.toLowerCase()))) ||
            ((dataItem.dataType === "video" || dataItem.dataType === "playlist") && 
            (dataItem.channel && dataItem.channel.user.toLowerCase().includes(query))) ||
            (query.includes(dataItem.dataType)) ||
            (dataItem.dataType.includes(query)) 
  };

  // Filter data items that contain the query
  const filteredData = allData.filter(containsQuery);
  // If no data matches the query, return an empty array
  if (filteredData.length === 0) {
    return [];
  }

  // Sort filtered data based on score (descending) and then name (ascending)
  return filteredData.sort((a, b) => {
    const scoreDiff = calculateScore(b) - calculateScore(a);
    if (scoreDiff !== 0) return scoreDiff;
    return a.name.localeCompare(b.name);
  });
}
/////////////////








function api() {
  let t = [];
const apiKey = "AIzaSyATdLw2luo0qTdmOC_5CK2XoDvZVhojvHE";
const query = qSearch;

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${'query'}&maxResults=20&key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data); // This will contain a large object with all video details
  })
  .catch(error => console.error(error));
async function getVideos(url, apiKey) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const videos = [];
    for (const element of data.items) {
      if (element.id.videoId) {
        console.log(element);
        const videoId = element.id.videoId;
        const videoDetailsResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`
        );
        const videoDetailsData = await videoDetailsResponse.json();

        const channelResponse = await fetch(
          `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${videoDetailsData.items[0].snippet.channelId}&key=${apiKey}`
        );
        const channelData = await channelResponse.json();

        const video = {
          dataType: "video",
          userAccess: true,
          userEdit: true,
          id: videoDetailsData.items[0].id,
          date: getDateTimeInMilliseconds(element.snippet.publishTime), // Assuming a placeholder date
          src: "", // Placeholder for video source (not available through API)
          duration: getVideoDurationInSeconds(
            videoDetailsData.items[0].contentDetails.duration
          ),
          thumbnail: videoDetailsData.items[0].snippet.thumbnails.high.url,
          name: videoDetailsData.items[0].snippet.title,
          description: videoDetailsData.items[0].snippet.description,
          channel: {
            image: channelData.items[0].snippet.thumbnails.high.url,
            name: channelData.items[0].snippet.title,
            user: channelData.items[0].snippet.customUrl,
          },
          views: videoDetailsData.items[0].statistics.viewCount,
          likes: videoDetailsData.items[0].statistics.likeCount,
          dislike: [],
          Watched: [],
          comments: [],
          timeWatched: 0,
        };

        videos.push(video);
        console.log(video);
      appendResult(video)
      }
    }
  removeWaitingLoad()
    console.log(videos); // Array containing video information for each element
  } catch (error) {
    console.error(error);
  }
}

function getVideoDurationInSeconds(durationString) {
  // Check for YouTube PT notation (PT1H30M20S)
  const youtubeMatch = durationString.match(
    /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/
  );
  if (youtubeMatch) {
    const hours = parseInt(youtubeMatch[1] || 0, 10);
    const minutes = parseInt(youtubeMatch[2] || 0, 10);
    const seconds = parseInt(youtubeMatch[3] || 0, 10);
    return hours * 3600 + minutes * 60 + seconds;
  }

  // Check for XhXmYs format
  const customMatch = durationString.match(/(\d+)H?(\d+)M(\d+)S/);
  if (customMatch) {
    const hours = parseInt(customMatch[1] || 0, 10);
    const minutes = parseInt(customMatch[2], 10);
    const seconds = parseInt(customMatch[3], 10);
    return hours * 3600 + minutes * 60 + seconds;
  }

  // Handle invalid format
  return 0;
}
function getDateTimeInMilliseconds(dateTimeString) {
  try {
    // Create a Date object from the ISO 8601 string
    const dateObject = new Date(dateTimeString);

    // Ensure the date object is valid (not an invalid date)
    if (isNaN(dateObject.getTime())) {
      return null; // Handle invalid date format
    }

    // Return the timestamp in milliseconds since epoch
    return dateObject.getTime();
  } catch (error) {
    console.error(error);
    return null; // Handle errors during parsing
  }
}

}