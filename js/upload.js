let channelImg = "imgs/kaska.jpg";
let channelName = "qMedop";
//upload
let videoOptions = document.querySelectorAll('.videosCont .video .info .options-container')

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
let UploadBtnMobile = document.querySelector('.upload-btn-mobile')
let createVideo = document.querySelector(".UploadCont .createVideo");
let vidoSRC;
let previewduration;
let close = document.querySelector(".UploadCont .createVideo .closeUpload");
let videosContt = document.querySelector('.floating-video .videosCont')
let uploadCont = document.querySelector(".UploadCont");
const videosCont = document.querySelector(".landing .videosCont");
const videoHTML = function videof(
  thumbnail,
  video,
  videoTime,
  ChannelImg,
  headder,
  channelName,
  date
) {
  return `
  <div class="thumbnail">
    <div class="img">
      <img src="${thumbnail}" alt="" />
    </div>
    <div class="vid">
      <video muted src="${video}"></video>
    </div>
    <div class="time">
    <p class="currentTime">00:00</p>
    <p class="dash">/</p>
    <p class="allTime">${videoTime}</p>
  </div>
  <div id="false" class="timeline-container">
  <div id="false" class="timeline-holder">
    <div id="false" class="timeline">
      <div id="false" class="color-container">
        <div id="false" class="timelineCurrent"></div>
        <div id="false" class="timelineBufferd"></div>
        <div id="false" class="timelineGoing"></div>
      </div>
      <div id="false" class="thumb-indicaror"></div>
      <span id="going">00:00</span>
    </div>
  </div>
</div>
    <div id="false" class="mute">
    <button tabindex='-1' id="false" class="unmute">
      <svg id="false" viewBox="0 0 36 36">
        <path id="false"
          d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
          fill="#fff"
        ></path>
        <path id="false"
          d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"
          fill="#fff"
          class="pathMute"
        ></path>
      </svg>
      </button>
      <span id="false"></span>
      <button tabindex='-1' id="false">
      <svg id="false" class="ytp-subtitles-button-icon" viewBox="0 0 36 36">
      <path id="false"
        d="M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z"
        fill="#fff"
      ></path>
    </svg>
      </button>
  </div>
  </div>
  <div class="info">
    <div tabindex='0' class="channel-img"><img id="false" src="${ChannelImg}" alt="" /></div>
    <div class="content">
      <div class="headder"><p>${headder}</p></div>
      <div id="false" class="channelName">${channelName}</div>
      <div class="viewsDate">
        <div class="views">0 views</div>
        <div></div>
        <div class="date">${date}</div>
      </div>
    </div>
    <div class="options-container">
    <div class="noclick">
      <button id="false" class="options noclick">
        <div id="false" class="noclick">
          <svg
            id="false"
            class="noclick"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            style="pointer-events: none"
          >
            <path
              id="false"
              d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
    <div id="false" class="options-menu">
      <div id="false" class="editVideo">
        <button id="false">
          <div class="svg-cont" id="false">
            <svg
              id="false"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path
                id="false"
                d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
              ></path>
            </svg>
          </div>
          <div id="false">Edit</div>
        </button>
      </div>
      <div id="false" class="deleteVideo">
        <button id="false">
          <div class="svg-cont" id="false">
            <svg
              id="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              style="padding: 0 6px"
            >
              <path
                d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
              />
            </svg>
          </div>
          <div id="false">Delete</div>
        </button>
      </div>
    </div>
  </div>
  </div>
  `;
};

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
    appendVideos(videosArray);
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
  if (document.fullscreenElement == null && document.body.offsetHeight > window.innerHeight) {
    document.body.style.top = `-${bodyPosition}px`
    document.body.classList.add("lock-scrollbar");
  }
  uploadCont.classList.add("active");
  videoUploadLInk.value = "User/Videos/Wide Nanami Walking.mp4"
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
    uploadPreviewVid.pause()
  });
}

videoUploadNext.addEventListener("click", (e) => {
  if (videoUploadLInk.value.length === 0) {
    videoUploadLInk.focus();
  } else {
    createVideo.classList.add("loadingStart");
    vidoSRC = videoUploadLInk.value;
    let video = document.createElement("video");
    video.setAttribute("src", vidoSRC);
    video.addEventListener("canplay", function () {
      console.log("The video link is valid.");
      UploadPreviewVid.src = vidoSRC;
      UploadPreviewLink.textContent = vidoSRC;
      createVideo.classList.remove("loadingStart");
      createVideo.classList.add("active");
      UploadPreviewLink.href = vidoSRC;
      videoUploadLInk.value = "";
      UploadPreviewVid.addEventListener("loadedmetadata", function () {
        previewduration = UploadPreviewVid.duration;
      });
    });
    video.addEventListener("error", function () {
      alert("The Video Link or Path is Invaild");
      createVideo.classList.remove("loadingStart");
    });
  }
});
downloadFromLocalStorage()
appendVideoss(videosArray)
function appendVideoss(array) {
  for (let i = 0; i < videoA.length; i++) {
    let video = document.createElement("div");
    video.classList.add(`video`);
    video.setAttribute("id", `video${i}`);
    video.setAttribute("tabindex", `0`);
    video.innerHTML = videoHTML(
      array[i].thumbnail,
      array[i].src,
      array[i].duration,
      channelImg,
      array[i].name,
      channelName,
      timeSince(array[i].date)
    );
    videosContt.appendChild(video);
  }
}
function appendVideos(array) {
  for (let i = 0; i < array.length; i++) {
    // if(array[i].name.toLowerCase().includes('attack')) {
      let video = document.createElement("div");
      video.classList.add(`video`);
      video.setAttribute("id", `video${i}`);
      video.setAttribute("tabindex", `0`);
      video.innerHTML = videoHTML(
        array[i].thumbnail,
        array[i].src,
        array[i].duration,
        channelImg,
        array[i].name,
        channelName,
        timeSince(array[i].date)
      );
      videosCont.appendChild(video);
    }
  // }
}
let videos = document.querySelectorAll(".landing .videosCont .video");
let muteAll = document.querySelectorAll(".video .thumbnail .mute .unmute");
pushBtn.addEventListener("click", (e) => {
  if (titleI.value.length === 0) {
  } else {
    uploadCont.classList.remove("active");
    document.body.classList.remove("lock-scrollbar");
    createVideo.classList.remove("active");
    uploadVideo()
    videosCont.innerHTML = "";
    appendVideos(videosArray)
    location.reload()
  }
});

function uploadVideo() {
  const video = {
    name: titleI.value,
    src: vidoSRC,
    descripion: descripionI.value,
    duration: FormatTime(previewduration),
    date: Date.now(),
    thumbnail:thumbnailI.value,
    views: 0,
    likes: 0,
    dislike: false,
  }
  videosArray.push(video)
  uploadToLocalStorage(videosArray)
}

function uploadToLocalStorage(videosArray) {
  window.localStorage.setItem('videos', JSON.stringify(videosArray))
}

function downloadFromLocalStorage() {
  videosArray = JSON.parse(window.localStorage.getItem('videos'))
  appendVideos(videosArray)
}
