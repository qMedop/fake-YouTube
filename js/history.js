let historyContent = document.getElementById('content')
document.addEventListener('dataFetched', function(event) {
  appendHistoryVideos(groupVideosByDay(sortArray(searchInArrayValue(user.playlist,'id','H').videos,'addedDate')))
});
function appendHistoryVideos(videos) {
  videos.forEach((video, i) => {
    console.log(video);
    const heading = function(day) {
      return `
      <div class="date-value">
        <h1>${day}</h1>
      </div>
      `
    }
    let container = function(i) {
      return `<div id="subVideosContainer${i}" class="videos-container vertical list-big"></div>`
    }
    let div = document.createElement('div')
    div.classList.add('day-section')
    console.log(video.day);
    // div.classList.add(`${video.day}`)
    div.insertAdjacentHTML('beforeend',heading(video.day))
    div.insertAdjacentHTML('beforeend',container(i))
    historyContent.appendChild(div)
    appendVideos(video.videos,historyContent.querySelector(`#subVideosContainer${i}`))
  })
}

function groupVideosByDay(videos) {
  const groupedVideos = [];

  videos.forEach(video => {
    const dayName = getDayNameFromTimestamp(video.addedDate);

    let found = false;
    for (let i = 0; i < groupedVideos.length; i++) {
      if (groupedVideos[i].day === dayName) {
        groupedVideos[i].videos.push(video);
        found = true;
        break;
      }
    }
    if (!found) {
      groupedVideos.push({ day: dayName, videos: [video] });
    }
  });

  return groupedVideos;
}

function getDayNameFromTimestamp(timestamp) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(timestamp);
  const currentDate = new Date(); // Current date
  const yesterdayDate = new Date(currentDate);
  yesterdayDate.setDate(currentDate.getDate() - 1); // Set yesterday's date
  
  // Check if it's today
  if (date.toDateString() === currentDate.toDateString()) {
    return 'Today';
  } 
  // Check if it's yesterday
  else if (date.toDateString() === yesterdayDate.toDateString()) {
    return 'Yesterday';
  } 
  // Check if it's within a week
  else if (currentDate.getTime() - date.getTime() <= 7 * 24 * 60 * 60 * 1000) {
    const dayIndex = date.getDay();
    return days[dayIndex];
  } 
  // Otherwise, return the day and month
  else {
    const month = date.toLocaleString('default', { month: 'short' }); // Short month name
    const day = date.getDate();
    return `${month} ${day}`;
  }
}
