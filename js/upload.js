let channelImg = "imgs/user.jpg";
let channelName = "qMedop";
//upload
let watchVid







titleI.addEventListener('paste',(e) => {
  e.preventDefault();
  let text = (e.originalEvent || e).clipboardData.getData('text/plain');
  document.execCommand('insertText', false, text.replace(/(\r\n|\n|\r)/gm, ''));
})







let videos = document.querySelectorAll(".landing .videosCont .video");
let muteAll = document.querySelectorAll(".video .thumbnail .mute .unmute");



function uploadShort() {
  let id  = Date.now()
  const short = {
    name: titleI.value,
    src: vidoSRC,
    duration: previewduration,
    date: id,
    views: 0,
    likes: 0,
    dislike: false,
    Watched: false,
    comments: [],
    channel: user.user,
    id: id,
  };
  shortsArray.push(short);
  channelsArray[userI].shorts.push(video)
  uploadToLocalStorage('shorts',shortsArray);
  uploadToLocalStorage('channels',channelsArray);
}


if (window.location.href.includes("watch")) {
  let url = new URL(window.location.href);
  let v = url.searchParams.get("video");
  let w
  for(let i = 0; i < videosArray.length; i++) {
    if(videosArray[i].date === +v) {
      w = i
    }
  }

  watchVid = w
  appendComments(videosArray[watchVid].comments)
}
function searchinCommentArray(arr,value) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].commentDate === value) {
      return i
      break;
    }
  }
}

handleAllPaste()