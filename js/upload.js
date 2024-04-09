let channelImg = "imgs/kaska.jpg";
let channelName = "qMedop";
//upload
let watchVid
let videoOptions = document.querySelectorAll(
  ".videosCont .video .info .options-container"
);

let uploadBtn = document.querySelector("nav .third #addBtn");
let videoUploadLInk = document.querySelector(
  ".UploadCont .createVideo #videoUploadLink"
);
let videoUploadNext = document.querySelector(
  ".UploadCont .createVideo .mid button"
);
let UploadPreviewVid = document.querySelector(
  ".UploadCont .createVideo .center video"
);
let UploadPreviewLink = document.querySelector(
  ".UploadCont .createVideo .center .left a"
);
let pushBtn = document.querySelector(".UploadCont .createVideo .footer button");
let titleI = document.querySelector(
  ".UploadCont .createVideo .center .right .input #titleI"
);
let descripionI = document.querySelector(
  ".UploadCont .createVideo .center .right .input #DecriptionI"
);
let thumbnailI = document.querySelector(
  ".UploadCont .createVideo .center .right .input #thumbnailI"
);
let UploadBtnMobile = document.querySelector(".upload-btn-mobile");
let createVideo = document.querySelector(".UploadCont .createVideo");
let vidoSRC;
let previewduration;
let close = document.querySelector(".UploadCont .createVideo .closeUpload");
let videosContt = document.querySelector(".floating-video .videosCont");
let uploadCont = document.querySelector(".UploadCont");
const videosCont = document.querySelector(".landing .videosCont");
let commentsSection = document.querySelector(".comments .comments-section");
let replysSection = document.querySelectorAll('.comments .replys-comments-section')

let videoA = [];
let thumbnailA = [];
let headderA = [];
let duartionA = [];
let descripionA = [];
let timeUploadedA = [];

function getFromLocalStorage() {
  if (localStorage.getItem("videoA")) {
    videoA = JSON.parse(window.localStorage.getItem("videoA"));
    thumbnailA = JSON.parse(window.localStorage.getItem("thumbnailA"));
    headderA = JSON.parse(window.localStorage.getItem("headderA"));
    duartionA = JSON.parse(window.localStorage.getItem("duartionA"));
    descripionA = JSON.parse(window.localStorage.getItem("descripionA"));
    timeUploadedA = JSON.parse(window.localStorage.getItem("timeUploadedA"));
    appendVideos(videosArray,videosCont);
  }
}
getFromLocalStorage();
uploadBtn.addEventListener("click", openCloseUpload);
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  UploadBtnMobile.addEventListener("click", openCloseUpload);
}

function openCloseUpload(e) {
  if (
    document.fullscreenElement == null &&
    document.body.offsetHeight > window.innerHeight
  ) {
    document.body.style.top = `-${bodyPosition}px`;
    document.body.classList.add("lock-scrollbar");
  }
  uploadCont.classList.add("active");
  videoUploadLInk.value = "User/Videos/Wide Nanami Walking.mp4";
  uploadCont.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") === "UploadContClose") {
      uploadCont.classList.remove("active");
      document.body.classList.remove("lock-scrollbar");
      createVideo.classList.remove("active");
    }
  });
  close.addEventListener("click", () => {
    uploadCont.classList.remove("active");
    document.body.classList.remove("lock-scrollbar");
    createVideo.classList.remove("active");
    uploadPreviewVid.pause();
  });
  set()
}
let uploadIframe = document.querySelector("#UploadContClose > div > div.upCont > div > div.left > div > div > iframe")
videoUploadNext.addEventListener("click", (e) => {
  if (videoUploadLInk.value.length === 0) {
    videoUploadLInk.focus();
  } else {
    createVideo.classList.add("loadingStart");
    vidoSRC = videoUploadLInk.value;
    let video = document.createElement("video");
    video.setAttribute("src", vidoSRC);
    video.addEventListener("canplay", function () {
      previewduration = video.duration
      console.log("The video link is valid.");
      uploadIframe.src = `videoplayer.html?video=${vidoSRC}&value=previewUpload`;
      UploadPreviewLink.textContent = vidoSRC;
      createVideo.classList.remove("loadingStart");
      createVideo.classList.add("active");
      UploadPreviewLink.href = vidoSRC;
      videoUploadLInk.value = "";
    });
    video.addEventListener("error", function () {
      alert("The Video Link or Path is Invaild");
      createVideo.classList.remove("loadingStart");
    });
  }
});


window.onresize = set
function set() {
  window.addEventListener("message", function(event) {
    uploadIframe.style.height = event.data + 'px'
  });
}

let videos = document.querySelectorAll(".landing .videosCont .video");
let muteAll = document.querySelectorAll(".video .thumbnail .mute .unmute");
pushBtn.addEventListener("click", (e) => {
  if (titleI.value.length === 0) {
  } else {
    uploadCont.classList.remove("active");
    document.body.classList.remove("lock-scrollbar");
    createVideo.classList.remove("active");
    uploadVideo();
    videosCont.innerHTML = "";
    appendVideos(videosArray,videosCont);
  }
});

function uploadVideo() {
  let id  = Date.now()
  const video = {
    name: titleI.value,
    src: vidoSRC,
    descripion: descripionI.value,
    duration: previewduration,
    date: id,
    thumbnail: thumbnailI.value,
    views: 0,
    likes: 0,
    dislike: false,
    timeWatched: 0,
    Watched: false,
    comments: [],
    channel: user,
    id: id,
  };
  videosArray.push(video);
  channelsArray[userI].videos.push(id)
  uploadToLocalStorage('videos',videosArray);
  uploadToLocalStorage('channels',channelsArray);
}
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
    channel: user,
    id: id,
  };
  shortsArray.push(short);
  channelsArray[userI].shorts.push(id)
  uploadToLocalStorage('shorts',shortsArray);
  uploadToLocalStorage('channels',channelsArray);
}

appendVideos(videosArray,videosCont);
function appendComments(array) {
  for (let i = 0; i < array.length; i++) {
    let comment = document.createElement("div");
    let display
    comment.classList.add(`comment`);
    comment.setAttribute("id", `comment${i}`);
    if(array[i].commentreplys.length > 0) {
      display = 'block'
    } else {
      display = 'none'
    }
    comment.innerHTML = commentHtml(
      array[i].commenterImgae,
      `@${array[i].commenterUser}`,
      array[i].commentDate,
      array[i].commentValue,
      array[i].commentLikes,
      array[i].commentreplys.length,
      display
    );
    commentsSection.appendChild(comment);
    for (let j = 0; j < videosArray[watchVid].comments[i].commentreplys.length; j++) {
      let reply = document.createElement("div");
      reply.classList.add(`reply`);
      reply.setAttribute("id", `reply${j}`);
      reply.innerHTML = replyCommentHtml(
        videosArray[watchVid].comments[i].commentreplys[j].replyerImgae,
        `@${videosArray[watchVid].comments[i].commentreplys[j].replyerUser}`,
        videosArray[watchVid].comments[i].commentreplys[j].replyDate,
        videosArray[watchVid].comments[i].commentreplys[j].replyValue,
        videosArray[watchVid].comments[i].commentreplys[j].replyLikes
        );
        replysSection = document.querySelectorAll('.comments .replys-comments-section')
      replysSection[i].appendChild(reply);
    }
  }
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

