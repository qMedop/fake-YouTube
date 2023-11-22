
let sugg = document.querySelector(".sugg");
let previous = document.querySelector(".back");
let next = document.querySelector(".next");
let test = 0;

next.addEventListener("click", () => {
  sugg.scrollBy({
    left: 100,
    behavior: "smooth",
  });
  suggCheck()
});
previous.addEventListener("click", () => {
  sugg.scrollBy({
    left: -100,
    behavior: "smooth",
  });
  suggCheck()
});

function suggCheck() {
  let width = sugg.scrollWidth
  let scrollLeft = sugg.scrollLeft
  if(scrollLeft === 0) {
    previous.style.display = "none";
  } else if(scrollLeft === width) {
    next.style.display = "none";
  } else {
    next.style.display = "flex";
    previous.style.display = "flex";
  }
}

let suggButtons = [
  "All",
  "GTA V",
  "Valorant",
  "Roblox",
  "Medo",
  "Fortnite",
  "Blox Fruits",
  "Friends",
  "Got",
  "Messi",
  "You",
  "people",
  "USA",
  "Lol",
  "One Piece",
  "Ronaldo",
  "The Best",
  "ME",
  "Who?!",
  "Player",
  "Xd",
  "You",
  "What?!",
];

for (let i = 0; i < suggButtons.length; i++) {
  let button = document.createElement("button");
  let buttonContent = document.createTextNode(`${suggButtons[i]}`);
  button.appendChild(buttonContent);
  sugg.appendChild(button);
}

const suggButton = document.querySelectorAll(".landing .one .sugg button");

suggButton[0].classList.add("active");
for (let i = 0; i < suggButton.length; i++) {
  suggButton[i].addEventListener("click", (e) => {
    for (let i = 0; i < suggButton.length; i++) {
      suggButton[i].classList.remove("active");
    }
    e.target.classList.add("active");
  });
}

const videoOptions = document.querySelectorAll('.videosCont .video .info .options-container')
let optionsStatue = false
for (let i = 0; i < videoOptions.length; i++) {
  videoOptions[i].addEventListener('click', () => {
    if(videoOptions[i].className.search('active') === -1) {
      videoOptions[i].classList.add('active')
      optionsStatue = true
    } else {
      videoOptions[i].classList.remove('active')
    }
  })
  document.addEventListener('click', (e) => {
    if(optionsStatue) {
      if(e.target.className.search('noclick') === -1) {
        videoOptions[i].classList.remove('active')
        optionsStatue = false
      } 
    }
  })
}


let videoTimeOut;
let scrubbing = false;
function videoHover() {
  for (let i = 0; i < videos.length; i++) {
    let cont
    let video;
    let time;
    let TimeLineContaienr;
    let going
    videos[i].addEventListener("mouseenter", (e) => {
      cont = e.target
      video = document.querySelector(`#${cont.getAttribute("id")} video`);
      mute = document.querySelector(`#${cont.getAttribute("id")} .mute`);
      time = document.querySelector(
        `#${cont.getAttribute("id")} .time .currentTime`
      );
      TimeLineContaienr = document.querySelector(
        `#${cont.getAttribute("id")} .timeline-container .timeline-holder`
      );
      going = document.querySelector(
        `#${cont.getAttribute("id")} .timeline-container .timeline #going`
      );
      videoTimeOut = setTimeout(() => {
        cont.classList.add("active");
        video.play();
      }, 300);
      TimeLineContaienr.addEventListener('mousedown', () => {
        scrubbing = true
        TimeLineContaienr.classList.add('scrubbing')
        document.body.style.userSelect = 'none'
      })
      document.addEventListener('mouseup', () => {
        scrubbing = false
        TimeLineContaienr.classList.remove('scrubbing')
        document.body.style.userSelect = 'auto'
      })
      timeUpdate(video,time,TimeLineContaienr,cont)
      tmcMoving(video,time,TimeLineContaienr,cont,going)
      tmcHover(video,time,TimeLineContaienr,cont)
      tmcClick(video,time,TimeLineContaienr,cont)
    });
    videos[i].addEventListener("mouseleave", (e) => {
      clearTimeout(videoTimeOut);
      time.textContent = "2";
      cont.classList.remove("active");
      video.pause();
      scrubbing = false
      TimeLineContaienr.classList.remove('scrubbing')
      document.body.style.userSelect = 'auto'
    });
  }
}
function timeUpdate(video,time,tmc,cont) {
  video.addEventListener('timeupdate', () => {
    const percent = video.currentTime / video.duration;
    time.textContent = FormatTime(video.currentTime);
    tmc.style.setProperty("--progress-position", percent);
    let bufferdPercent = ((video.buffered.end(video.buffered.length - 1) / video.duration )* 100)
    tmc.style.setProperty("--buffered-position", bufferdPercent);
  })
}
function tmcHover (video,time,tmc,cont) {
  tmc.addEventListener('mouseenter', () => {
    cont.classList.add("tmcHover");
  })
  tmc.addEventListener('mouseleave', () => {
    cont.classList.remove("tmcHover");
  })
}
function tmcMoving(video,time,tmc,cont,going) {
  tmc.addEventListener('mousemove', (e) => {
    const rect = tmc.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    const cuurenttime = percent * video.duration;
    let percentMax =
      (rect.width - going.clientWidth / 2) / rect.width;
    let percentLow =
      1 - (rect.width - going.clientWidth / 2) / rect.width;
    let percentTwo = percent;
    if (percent > percentMax ) {
      percentTwo = percentMax ;
    } else if (percent < percentLow) {
      percentTwo = percentLow;
    }
    tmc.style.setProperty("--preview-position", percent);
    tmc.style.setProperty("--preview-position-time", percentTwo);
    going.textContent = FormatTime(cuurenttime)
  })
  cont.addEventListener('mousemove' , (e) => {
    if(scrubbing) {
      const rect = tmc.getBoundingClientRect();
      const percent =
      Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
      video.currentTime = percent * video.duration;
      tmc.style.setProperty("--progress-position", percent);
    }
  })
}
function tmcClick (video,time,tmc,cont) {
  tmc.addEventListener('click', (e) => {
    const rect = tmc.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
    video.currentTime = percent * video.duration;
    tmc.style.setProperty("--progress-position", percent);
  })
}
function muteAllF() {
  let videoAll = document.querySelectorAll(".video .thumbnail video");
  for (let i = 0; i < muteAll.length; i++) {
    muteAll[i].addEventListener("click", function () {
      videoAll[i].muted = !videoAll[i].muted;
      mute.classList.toggle("active");
    });
  }
}

let TimeLineContaienr = document.querySelector(
  ".videosCont .video .thumbnail .timeline-container .timeline-holder"
);
function clcikk(e, i) {}
buttonsBlur();
videoHover();
muteAllF();
for (let i = 0; i < videos.length; i++) {
  videos[i].addEventListener("mouseenter", (e) => {
    let video = document.querySelector(`#${e.target.getAttribute("id")}`);
    let check = false
    videos[i].addEventListener('mousedown', (e) => {
      check = e.target.getAttribute('id') !== 'false'
    })
    videos[i].addEventListener('click', (e) => {
      if(check === true) {
      window.localStorage.setItem('videowatch' , video.getAttribute("id"))
      location.href = "watch.html";
      }
    })
  })
}

const videosAll = document.querySelectorAll('.landing .videosCont .video video')
for(let i = 0; i< videosAll.length; i++) {
  videosAll[i].addEventListener('canplay', () => {
    console.log(`video ${i + 1} success ${videosAll[i].src}`);
  })
  videosAll[i].addEventListener("error", function () {
    console.log(`video with tittle ''${headderA[i]}'' path or link was invaild`);
  });

}

const menu = document.querySelectorAll(".videosCont .video .info .options-container .options-menu")
const menuEdit = document.querySelectorAll(".videosCont .video .info .options-container .options-menu .editVideo")
const menuDelete = document.querySelectorAll(".videosCont .video .info .options-container .options-menu .deleteVideo")

for(let i = 0; i < menuEdit.length; i++) {
  menuEdit[i].setAttribute('video', i)
  menuEdit[i].addEventListener('click', (e) => {
    console.log('edit');
  })
}
for(let i = 0; i < menuDelete.length; i++) {
  menuDelete[i].setAttribute('video', i)
  menuDelete[i].addEventListener('click', (e) => {
    console.log(headderA[menuDelete[i].getAttribute('video')]);
  })
}
