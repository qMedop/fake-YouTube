if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  document.querySelector('.mainVideo .video-overlay .video-overlay-pc').remove()
} else {
  document.querySelector('.mainVideo .video-overlay .video-overlay-mobile').remove()
}

const video = document.querySelector('#mainVideo')
const previewVideo = document.querySelector('#previewVideo')
const landing = document.querySelector('body .landing')
const videoCont = document.querySelector('.videoCont')
const playPauseBtn = document.querySelector('.mainVideo .video-overlay .controlls #playPause')
const fullScereneBtn = document.querySelector('.mainVideo .video-overlay  #fullScreen')
const autoPlayBtn = document.querySelector('.mainVideo .video-overlay .controlls .autoPlay')
const theaterBtn = document.querySelector('.mainVideo .video-overlay .controlls .theaterMode')
const miniPlayerrBtn = document.querySelector('.mainVideo .video-overlay .controlls .miniPlayer')
const volumeBtn = document.querySelector('.mainVideo .video-overlay .controlls .volume')
const currentTime = document.querySelector('.mainVideo .video-overlay  .currentTime')
const allTime = document.querySelector('.mainVideo .video-overlay  .allTime')
const timeLineContaienr = document.querySelector('.mainVideo .timeline-container .timeline-holder')
const going = document.querySelector('.mainVideo .timeline-container #going')
const previewimgContainer = document.querySelector('.mainVideo .timeline-container .timeline-holder .preview-img-container')
const mainVideoContainer = document.querySelector('.mainVideo')
const volumeContainer = document.querySelector('.mainVideo .video-overlay .controlls .volume-container')
const videoControlls = document.querySelector('.mainVideo .video-overlay')
const volumeChanger = document.querySelector('.mainVideo .video-overlay .controlls .volume-container .volume-changer .line')
const volumeDiv = document.querySelector('.mainVideo .video-overlay .controlls .volume-container .volume-changer')
const thumbIndicaro = document.querySelector('.mainVideo .timeline .thumb-indicaror')


let UIValue = true

let volumeFocus = false
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
} else {
  volumeDiv.addEventListener('focusin' , () => {
    volumeFocus = true
  })
  volumeDiv.addEventListener('focusout' , () => {
    volumeFocus = false
  })
  
}
document.addEventListener("keydown", (e) => {
  if(inputFocus === false) {
    switch (e.key.toLowerCase()) {
      case " ":
      case "k":
        e.preventDefault();
        playPause();
        break;
      case "f":
        e.preventDefault();
        fullScreen();
        break;
      case "t":
        e.preventDefault();
        theaterMode();
        break;
      case "m":
        e.preventDefault();
        toggleMute();
        break;
      case "arrowleft":
        if(volumeFocus) {
          e.preventDefault();
          decreaceVolume()
          break;
        } else {
          e.preventDefault();
          skipBackward()
          break;
        }
      case "arrowright":
        if(volumeFocus) {
          e.preventDefault();
          increaseVolume()
          break;
        } else {
          e.preventDefault();
          skipForward()
          break;
        }
      case "arrowup":
        e.preventDefault();
        increaseVolume()
        break;
      case "arrowdown":
        e.preventDefault();
        decreaceVolume()
      break;
    }
  }
});

//PlayPause
playPauseBtn.addEventListener('click' , playPause)
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  
} else {
  mainVideoContainer.addEventListener('click' , (e) => {
    if (e.target.toString() === '[object HTMLVideoElement]') {
      playPause()
    }
  })

}
function playPause() {
  if (video.paused == true) {
    video.play();
  } else {
    video.pause();
  }
  hideViewUi()
}

video.addEventListener("pause", () => {
  mainVideoContainer.classList.add('paused')
});
video.addEventListener("play", () => {
  mainVideoContainer.classList.remove('paused')
});

//FullScreen
fullScereneBtn.addEventListener('click' , fullScreen)
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
} else {
  mainVideoContainer.addEventListener('dblclick' , (e) => {
    if (e.target.toString() === '[object HTMLVideoElement]') {
      fullScreen()
    }
  })
  
}
function fullScreen() {
if (document.fullscreenElement == null) {
    mainVideoContainer.requestFullscreen();
    if (
      video.videoWidth / video.videoHeight >= 0.4 &&
      video.videoWidth / video.videoHeight <= 1
    ) {
    } else {
      screen.orientation.lock("landscape");
    }
    document.body.classList.add('fullScreen')
    setTimeout(() => {
      nav.classList.add('hide-nav')
    }, 50);
    window.scrollTo(0,0)
    previewimgSize()
  } else {
    document.exitFullscreen();
    screen.orientation.unlock("landscape");
    document.body.classList.remove('fullScreen')
    nav.classList.remove('hide-nav')
    previewimgSize()
  }
}
document.addEventListener("fullscreenchange", () => {
  document.body.classList.toggle("fullScreen", document.fullscreenElement);
  nav.classList.remove('hide-nav')
});

if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
} else {
  
  //theater mode
  theaterBtn.addEventListener('click' , theaterMode)
  function theaterMode() {
    landing.classList.toggle('theater')
    previewimgSize()
  }
  
  //mute
  volumeBtn.addEventListener('click' , toggleMute)
  let curentVolume = 1
  function toggleMute() {
    if(video.volume !== 0) {
      curentVolume = video.volume
      video.volume = 0
      checkVolume()
    } else {
      video.volume = curentVolume
      checkVolume()
    }
  }
}

//miniPlayer 
// miniPlayerrBtn.addEventListener('click' , toggleMiniPlayerMode)
// function toggleMiniPlayerMode() {
//   if (mainVideoContainer.classList.contains("mini-player")) {
//     document.exitPictureInPicture();
//   } else {
//     video.requestPictureInPicture();
//   }
// }
// video.addEventListener("enterpictureinpicture", () => {
//   mainVideoContainer.classList.add("mini-player");
// });
// video.addEventListener("leavepictureinpicture", () => {
//   mainVideoContainer.classList.remove("mini-player");
// });

//Time
video.addEventListener('loadeddata', time)

function time(e) {
  allTime.textContent = FormatTime(video.duration)
  timeLineContaienr.style.setProperty("--progress-position", 0);
}
video.addEventListener('timeupdate', () => {
  currentTime.textContent = FormatTime(video.currentTime)
  const percent = video.currentTime / video.duration;
  timeLineContaienr.style.setProperty("--progress-position", percent);
})


//proggersBar
let wasPaused
let scrrubing = false
let videoCurrent = 0
timeLineContaienr.addEventListener('touchstart' , (e) => { 
  e.preventDefault()
  document.body.style.overflow = 'none'
  e.preventDefault()
})
timeLineContaienr.addEventListener('mousemove', previewTimeLine)
timeLineContaienr.addEventListener('touchmove' , () => {
  scrrubing = true
  wasPaused = video.paused
})
document.addEventListener('touchend' , (e) => {
  document.body.style.overflow = 'intial'
  if(scrrubing) {
    e.preventDefault();
    scrrubing = false
    mainVideoContainer.classList.remove('scrubbing')
    video.currentTime = videoCurrent
    if(!wasPaused) video.play()
    const percent = video.currentTime / video.duration;
    timeLineContaienr.style.setProperty("--progress-position", percent);
    hideViewUi()
  }
})
timeLineContaienr.addEventListener('touchmove' , (e) => {
  if(scrrubing) {
    mainVideoContainer.classList.add('scrubbing')
    progress(e)
    previewTimeLine(e)
  }
})
document.addEventListener('touchmove' , (e) => {
  if(scrrubing) {
    progress(e)
    previewTimeLine(e)
  }
})

function progress(e) {
  var evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
  var touch = evt.touches[0] || evt.changedTouches[0];
  x = touch.pageX;
  y = touch.pageY;
  const rect = timeLineContaienr.getBoundingClientRect();
  const percent =
    Math.min(Math.max(0, x - rect.x), rect.width) / rect.width;
    videoCurrent = percent * video.duration
  let percentMax =
    (rect.width - thumbIndicaro.clientWidth / 2) / rect.width;
  let percentLow =
    1 - (rect.width - thumbIndicaro.clientWidth / 2) / rect.width;
  let percentTwo = percent;
  if (percent > percentMax ) {
    percentTwo = percentMax ;
  } else if (percent < percentLow) {
    percentTwo = percentLow;
  }
    timeLineContaienr.style.setProperty("--thumb-position", percentTwo);
  currentTime.textContent = FormatTime(video.currentTime)
}
function previewTimeLine(e) { 
  var evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
  var touch = evt.touches[0] || evt.changedTouches[0];
  x = touch.pageX;
  y = touch.pageY;
  const rect = timeLineContaienr.getBoundingClientRect();
  const percent = Math.min(Math.max(0, x - rect.x), rect.width) / rect.width;
  let lastValue = 0
  const cuurenttime = Math.floor(percent * video.duration);
  let percentMax =
  (rect.width - previewimgContainer.clientWidth / 2) / rect.width;
  let percentLow =
  1 - (rect.width - previewimgContainer.clientWidth / 2) / rect.width;
  let percentTwo = percent;
  if (percent > percentMax ) {
    percentTwo = percentMax ;
  } else if (percent < percentLow) {
    percentTwo = percentLow;
  }
  timeLineContaienr.style.setProperty("--preview-position-img", percentTwo);
  timeLineContaienr.style.setProperty("--preview-position", percent);

  going.textContent = FormatTime(cuurenttime)
  previewVideo.currentTime = cuurenttime
}

//resize
window.onresize = previewimgSize;
previewimgSize();
function previewimgSize() {
  previewimgContainer.style.aspectRatio = video.videoWidth / video.videoHeight;
  previewimgContainer.style.height =
  (mainVideoContainer.clientHeight / 5) + 40 + "px";
}
setTimeout(() => {
  previewimgContainer.style.aspectRatio = video.videoWidth / video.videoHeight;
}, 500);
//auto Play
//auto Play 
autoPlayBtn.addEventListener('click' , autoPlay)
function autoPlay() {
  autoPlayBtn.classList.toggle('active')
}

//buffered
video.addEventListener('loadeddata', () => {
  video.addEventListener('timeupdate', () => {
    let percent = ((video.buffered.end(video.buffered.length - 1) / video.duration )* 100)
    timeLineContaienr.style.setProperty("--buffered-position", percent);
  })
})

if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
} else {
  //volume Change
  let voluemScrrubing = false
  volumeChanger.addEventListener('click' , changeVolume)
  volumeChanger.addEventListener('mousedown' , () => {
    voluemScrrubing = true
    volumeContainer.classList.add('active')
  })
  document.addEventListener('mouseup' , (e) => {
    if(voluemScrrubing) {
      voluemScrrubing = false
      volumeContainer.classList.remove('active')
    }
  })
  volumeChanger.addEventListener('mousemove' , (e) => {
    if(voluemScrrubing) {
      changeVolume(e)
    }
  })
  document.addEventListener('mousemove' , (e) => {
    if(voluemScrrubing) {
      e.preventDefault();
      changeVolume(e)
    }
  })
volumeChanger.addEventListener('wheel', (e) => {
  e.preventDefault()
  if (Math.sign(e.deltaY) === -1)  {
    increaseVolume()
  }
  if (Math.sign(e.deltaY) === 1)  {
    decreaceVolume()
  }
})
}
//increase / Decrease Volume
function increaseVolume() {
if (video.volume < 1) {
  if (video.volume >= 0.85) {
    video.volume = 1;
  } else {
    video.volume = video.volume + 0.1;
  }
}
checkVolume()
}
function decreaceVolume() {
  if (video.volume >= 0) {
    if (video.volume <= 0.15) {
      video.volume = 0;
    } else {
    video.volume = video.volume - 0.1;
    }
  }
  checkVolume()
}
function changeVolume(e) {
  const rect = volumeChanger.getBoundingClientRect();
  const volumepercent = Math.min(Math.max(0, (e.x - 6) - rect.x), rect.width) / rect.width;
  volumeContainer.dataset.volumepercent = video.volume
  volumeChanger.style.setProperty("--volume-position", volumeContainer.dataset.volumepercent);
  video.volume = volumepercent
  checkVolume()
}

function checkVolume() {
  volumeContainer.dataset.volumepercent = video.volume
  volumeChanger.style.setProperty("--volume-position", volumeContainer.dataset.volumepercent);
  if(video.volume > .5) {
    volumeContainer.dataset.volumelevel = 'high'
  }else if(video.volume < .5 && video.volume > 0) {
    volumeContainer.dataset.volumelevel = 'mid'
  }else if(video.volume === 0) {
    volumeContainer.dataset.volumelevel = 'muted'
  }
}

//Hide View ui
let viewUI

let viewUICheck = false
let viewUICheckVolume = false
let uiTimeOut

function viewUi() {
  mainVideoContainer.classList.add('view-UI')
}
function hideUi() {
  mainVideoContainer.classList.remove('view-UI')
}

function hideViewUi() {
  if(!video.paused) {
    clearTimeout(uiTimeOut)
    viewUi()
    uiTimeOut = setTimeout(() => {
      hideUi()
    }, 3000);
  }
}
for (let i = 0; i < document.querySelectorAll('body.mobile .mainVideo .video-overlay button').length; i++) {
  document.querySelectorAll('body.mobile .mainVideo .video-overlay button')[i].addEventListener('touchstart', (e) => {
    viewUICheck = true
  })
  document.querySelectorAll('body.mobile .mainVideo .video-overlay button')[i].addEventListener('touchend', (e) => {
    setTimeout(() => {
      viewUICheck = false
    }, 50);
  })
}

mainVideoContainer.addEventListener('pointerup', (e) => {
  if(e.target.toString() === '[object HTMLVideoElement]') {
    if(video.paused) {
      if(mainVideoContainer.classList.contains('view-UI')) {
        hideUi()
      } else {
        viewUi()
      }
    } else {
      if(mainVideoContainer.classList.contains('view-UI')) {
        clearTimeout(uiTimeOut)
        hideUi()
      } else {
        hideViewUi()
      }
    }
  }
})
mainVideoContainer.addEventListener('pointerup', (e) => {
  console.log(e.target);
})
//Skip
let skipValue = 5
function skipForward() {
  video.currentTime += skipValue
}
function skipBackward() {
  video.currentTime -= skipValue
}
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
let m = 0
mainVideoContainer.addEventListener('click', (e) => {
  m++
  if(m >= 2) {
    viewUICheck = true
  } 
  // setTimeout(() => {
  //   m = 0
  //   viewUICheck = false
  //   console.log(m);
  // }, 200);
})