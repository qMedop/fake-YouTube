if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  document.querySelector('.mainVideo .video-overlay .video-overlay-pc').remove()
} else {
  document.querySelector('.mainVideo .video-overlay .video-overlay-mobile').remove()
}

let video = document.querySelector('#mainVideo')
let previewVideo = document.querySelector('.mainVideo #previewVideo')
let landing = document.querySelector('body .landing')
let videoCont = document.querySelector('.videoCont')
let playPauseBtn = document.querySelector('.mainVideo .video-overlay .controlls .playPause')
let fullScereneBtn = document.querySelector('.mainVideo .video-overlay .controlls .fullScreen')
let autoPlayBtn = document.querySelector('.mainVideo .video-overlay .controlls .autoPlay')
let theaterBtn = document.querySelector('.mainVideo .video-overlay .controlls .theaterMode')
let miniPlayerrBtn = document.querySelector('.mainVideo .video-overlay .controlls .miniPlayer')
let volumeBtn = document.querySelector('.mainVideo .video-overlay .controlls .volume')
let currentTime = document.querySelector('.mainVideo .video-overlay .controlls .currentTime')
let allTime = document.querySelector('.mainVideo .video-overlay .controlls .allTime')
let timeLineContaienr = document.querySelector('.mainVideo .timeline-container .timeline-holder')
let going = document.querySelector('.mainVideo .timeline-container #going')
let previewimgContainer = document.querySelector('.mainVideo .timeline-container .timeline-holder .preview-img-container')
let timelineCurrent = document.querySelector('.mainVideo .timeline-container .timeline-holder .timelineCurrent')
let mainVideoContainer = document.querySelector('.mainVideo')
let volumeContainer = document.querySelector('.mainVideo .video-overlay .controlls .volume-container')
let videoControlls = document.querySelector('.mainVideo .video-overlay')
let volumeChanger = document.querySelector('.mainVideo .video-overlay .controlls .volume-container .volume-changer .line')
let volumeDiv = document.querySelector('.mainVideo .video-overlay .controlls .volume-container .volume-changer')
let settingBtn = document.querySelector('.mainVideo .videoControlls .controlls .settings')
let settingCont = document.querySelector('.mainVideo .videoControlls .settings-overlay')
let annotationsBtn = document.querySelector('.mainVideo .videoControlls .settings-overlay .annotations')
let annotationsSlider = document.querySelector('.mainVideo .videoControlls .settings-overlay .annotations .slider')
let playbackBtn = document.querySelector('.mainVideo .videoControlls .settings-overlay .playback-speed')
let playbackPanel = document.querySelector('.mainVideo .videoControlls .settings-overlay .playback-panel')
let settingsMain = document.querySelector('.mainVideo .videoControlls .settings-overlay .main')
let playbackPanelContent = document.querySelector('.mainVideo .videoControlls .settings-overlay .playback-panel-content')
let settingsMainContent = document.querySelector('.mainVideo .videoControlls .settings-overlay .main-content')
const thumbIndicaro = document.querySelector('.mainVideo .timeline .thumb-indicaror')
let progressInterval
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
    switch (e.keyCode) {
      case 32:
      case 75:
        e.preventDefault();
        playPause();
        break;
      case 70:
        e.preventDefault();
        fullScreen();
        break;
      case 84:
        e.preventDefault();
        theaterMode();
        break;
      case 77:
        e.preventDefault();
        toggleMute();
        break;
      case 37:
        if(volumeFocus) {
          e.preventDefault();
          decreaceVolume()
          break;
        } else {
          e.preventDefault();
          skipBackward()
          break;
        }
      case 39:
        if(volumeFocus) {
          e.preventDefault();
          increaseVolume()
          break;
        } else {
          e.preventDefault();
          skipForward()
          break;
        }
      case 38:
        e.preventDefault();
        increaseVolume(e)
        break;
      case 40:
        e.preventDefault();
        decreaceVolume(e)
      break;
    }
  }
});

//PlayPause
let playPauseTimeOut
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
  if(!loadingStatue) {
    if (video.paused == true) {
      video.play();
      clearTimeout(playPauseTimeOut)
      mainVideoContainer.classList.remove('pause')
      mainVideoContainer.classList.add('play')
      playPauseTimeOut = setTimeout(() => {
        mainVideoContainer.classList.remove('play')
      }, 1200);
  } else {
      clearTimeout(playPauseTimeOut)
      mainVideoContainer.classList.remove('play')
      mainVideoContainer.classList.add('pause')
      playPauseTimeOut = setTimeout(() => {
        mainVideoContainer.classList.remove('pause')
      }, 1200);
      video.pause();
  }
  hideViewUI()
    
  }
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
  if(window.location.href.toLowerCase().includes('watch')) {
  } else {
    if (document.fullscreenElement == null) {
        mainVideoHolder.requestFullscreen();
        document.body.classList.add('fullScreen')
        setTimeout(() => {
          nav.classList.add('hide-nav')
        }, 50);
        window.scrollTo(0,0)
        previewimgSize()
      } else {
        document.exitFullscreen();
        document.body.classList.remove('fullScreen')
        nav.classList.remove('hide-nav')
        previewimgSize()
      }
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
miniPlayerrBtn.addEventListener('click' , toggleMiniPlayerMode)
function toggleMiniPlayerMode() {
  if (mainVideoContainer.classList.contains("mini-player")) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture();
  }
}
video.addEventListener("enterpictureinpicture", () => {
  mainVideoContainer.classList.add("mini-player");
});
video.addEventListener("leavepictureinpicture", () => {
  mainVideoContainer.classList.remove("mini-player");
});

//Time
video.addEventListener('loadeddata', time)

function time(e) {
  allTime.textContent = FormatTime(video.duration)
  timeLineContaienr.style.setProperty("--progress-position", 0);
}
video.addEventListener('timeupdate', () => {
  timeupdate() 
})

function timeupdate() {
  currentTime.textContent = FormatTime(video.currentTime)
}

//proggersBar
let wasPaused
let scrrubing = false
timeLineContaienr.addEventListener('mouseenter' , previewimgSize)
timeLineContaienr.addEventListener('pointerdown' , progress)
timeLineContaienr.addEventListener('pointermove', previewTimeLine)
timeLineContaienr.addEventListener('touchmove', previewTimeLineM)
timeLineContaienr.addEventListener('pointerdown' , () => {
  scrrubing = true
  wasPaused = video.paused
  video.pause()
})
document.addEventListener('pointerup' , (e) => {
  if(scrrubing) {
    e.preventDefault();
    scrrubing = false
    mainVideoContainer.classList.remove('scrubbing')
    if(!wasPaused) video.play()
  }
})
timeLineContaienr.addEventListener('pointermove' , (e) => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {

  } else {
    if(scrrubing) {
      mainVideoContainer.classList.add('scrubbing')
      e.preventDefault();
      progress(e)
      previewTimeLine(e)
    }
  }
})
timeLineContaienr.addEventListener('touchmove' , (e) => {
  if(scrrubing) {
    mainVideoContainer.classList.add('scrubbing')
    // e.preventDefault();
    progressM(e)
    previewTimeLineM(e)
  }
})
document.addEventListener('pointermove' , (e) => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {

  } else {
    if(scrrubing) {
      e.preventDefault();
      progress(e)
      previewTimeLine(e)
    }
  }
})
document.addEventListener('touchmove' , (e) => {
  if(scrrubing) {
    // e.preventDefault();
    progressM(e)
    previewTimeLineM(e)
  }
})


function progress(e) {
  const rect = timeLineContaienr.getBoundingClientRect();
  const percent =
    Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
  video.currentTime = percent * video.duration;
  timeLineContaienr.style.setProperty("--progress-position", percent);
  currentTime.textContent = FormatTime(video.currentTime)
}
function progressM(e) {
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
  const rect = timeLineContaienr.getBoundingClientRect();
  const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
  const cuurenttime = percent * video.duration;
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
function previewTimeLineM(e) { 
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
  previewimgContainer.style.aspectRatio =  video.videoWidth / video.videoHeight
  previewimgContainer.style.height =  
  mainVideoContainer.clientHeight / 4.5 + "px";
}
setTimeout(() => {
  previewimgContainer.style.aspectRatio =  video.videoWidth / video.videoHeight
}, 500);
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
  videoQuality.textContent = video.videoHeight + 'p'
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
    increaseVolume(e)
  }
  if (Math.sign(e.deltaY) === 1)  {
    decreaceVolume(e)
  }
})
}
//increase / Decrease Volume
let volumeAnima
let volumeValueTimeOut

function increaseVolume(e) {
if (video.volume < 1) {
  if (video.volume >= 0.9) {
    video.volume = 1;
  } else {
    video.volume = video.volume + 0.05;
  }
}
  checkVolume()
  if(e.type === 'keydown') {
    volumeAnimation()
    volumeValue()
  }
}
function decreaceVolume(e) {
  if (video.volume >= 0) {
    if (video.volume <= 0.10) {
      video.volume = 0;
    } else {
    video.volume = video.volume - 0.05;
    }
  }
  checkVolume()
  if(e.type === 'keydown') {
    volumeAnimation()
    volumeValue()
  }
}
function changeVolume(e) {
  const rect = volumeChanger.getBoundingClientRect();
  const volumepercent = Math.min(Math.max(0, (e.x - 6) - rect.x), rect.width) / rect.width;
  mainVideoContainer.dataset.volumepercent = video.volume
  volumeChanger.style.setProperty("--volume-position", volumeContainer.dataset.volumepercent);
  video.volume = volumepercent
  checkVolume()
}

function checkVolume() {
  mainVideoContainer.dataset.volumepercent = video.volume
  volumeChanger.style.setProperty("--volume-position", mainVideoContainer.dataset.volumepercent);
  if(video.volume > .5) {
    mainVideoContainer.dataset.volumelevel = 'high'
  }else if(video.volume < .5 && video.volume > 0) {
    mainVideoContainer.dataset.volumelevel = 'mid'
  }else if(video.volume === 0) {
    mainVideoContainer.dataset.volumelevel = 'muted'
  }
}
let y
let el = document.querySelector('.mainVideo .video-overlay .video-overlay-pc .video-anim .volume')
function volumeAnimation() {
    if(mainVideoContainer.classList.contains('volume') === false) {
      clearTimeout(volumeAnima)
      clearTimeout(y)
      el.style.animation = 'scaleAnimation 1s 1 forwards';
      mainVideoContainer.classList.add('volume')
      volumeAnima = setTimeout(() => {
      mainVideoContainer.classList.remove('volume')
      }, 1000);
  } else if (mainVideoContainer.classList.contains('volume')) {
    clearTimeout(volumeAnima)
    y = el.style.animation = 'none';
    setTimeout(() => {
          el.style.animation = 'scaleAnimation 1s 1 forwards';
    }, 50);
    volumeAnima = setTimeout(() => {
      mainVideoContainer.classList.remove('volume')
      }, 1000);
  }
}
function volumeValue() {
  document.querySelector('.mainVideo .video-overlay .video-overlay-pc .video-anim .volumePercentage').textContent = `${Math.floor(video.volume * 100)}%`
  clearTimeout(volumeValueTimeOut)
  mainVideoContainer.classList.add('volumeValue')
  volumeValueTimeOut = setTimeout(() => {
  mainVideoContainer.classList.remove('volumeValue')
  }, 600);
}
//Hide View ui
let viewUI
let viewUICheck = false
let viewUICheckVolume = false

if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
  ) {
  } else {
  mainVideoContainer.addEventListener('mouseenter',hideViewUI)
  mainVideoContainer.addEventListener('mouseleave', () => {
    if(!video.paused && viewUICheckVolume === false) {
      mainVideoContainer.classList.remove('view-UI')
    }
  })
  mainVideoContainer.addEventListener('mousemove', hideViewUI)
  mainVideoContainer.addEventListener('click', hideViewUI)
  
  videoControlls.addEventListener('mouseenter',() => {
    viewUICheck = true
  })
  videoControlls.addEventListener('mouseleave', () => {
    viewUICheck = false
  })
  volumeChanger.addEventListener('mousedown' , () => {
    viewUICheckVolume = true
  })
  document.addEventListener('mouseup' , () => {
    if(viewUICheckVolume) {
      viewUICheckVolume = false
      hideViewUI()
    }
  })
}
function hideViewUI() {
  clearTimeout(viewUI)
  mainVideoContainer.classList.add('view-UI')
  if(!video.paused && viewUICheck === false) {
    viewUI = setTimeout(() => {
      mainVideoContainer.classList.remove('view-UI')
    }, 3000);
  }
}
mainVideoContainer.addEventListener('mouseenter', manageProgressBarActive)
mainVideoContainer.addEventListener('mouseleave', manageProgressBarIdle)
video.addEventListener('play', manageProgressBarActive)
video.addEventListener('pause', manageProgressBarIdle)


function manageProgressBarActive() {
  if(!video.paused) {
    progressInterval = setInterval(() => {
      percent = video.currentTime / video.duration;
      timeLineContaienr.style.setProperty("--progress-position", percent);
      console.log('object');
    }, 10);
  }
}
function manageProgressBarIdle() {
  let s
  clearTimeout(s)
  s = setTimeout(() => {
    clearInterval(progressInterval)
  }, 100);
}
function hideViewUIM() {
  clearTimeout(viewUI)
  mainVideoContainer.classList.add('view-UI')
  if(viewUICheck === false) {
    viewUI = setTimeout(() => {
      mainVideoContainer.classList.remove('view-UI')
    }, 3000);
  }
}
//Skip
let skipValue = 5
let skipForwardTimeOut
let skipBackwardTimeOut
let svgForward = document.querySelector('.mainVideo .video-overlay .video-overlay-pc .video-anim .skip-forward .svg')
let svgBackward = document.querySelector('.mainVideo .video-overlay .video-overlay-pc .video-anim .skip-backward .svg')
function skipForward() {
  video.currentTime += skipValue
  percent = video.currentTime / video.duration;
  timeLineContaienr.style.setProperty("--progress-position", percent);
  hideViewUI()
  if(  mainVideoContainer.classList.contains('skip-forward') === false) {
    clearTimeout(skipForwardTimeOut)
    mainVideoContainer.classList.add('skip-forward')
    skipForwardTimeOut = setTimeout(() => {
    mainVideoContainer.classList.remove('skip-forward')
    }, 500);
  } else if (  mainVideoContainer.classList.contains('skip-forward')) {
    clearTimeout(skipForwardTimeOut)
    svgBackward.style.setProperty("--fade", 'fade');
    svgForward.style.setProperty("--fade", 'none');
    setTimeout(() => {
      svgForward.style.setProperty("--fade", 'fade');
    }, 50);
    skipForwardTimeOut = setTimeout(() => {
      mainVideoContainer.classList.remove('skip-forward')
      }, 500);
  }
  timeupdate() 
}
function skipBackward() {
  video.currentTime -= skipValue
  percent = video.currentTime / video.duration;
  timeLineContaienr.style.setProperty("--progress-position", percent);
  hideViewUI()
  if(  mainVideoContainer.classList.contains('skip-backward') === false) {
    clearTimeout(skipBackwardTimeOut)
    svgBackward.style.setProperty("--fade", 'fade');
    mainVideoContainer.classList.add('skip-backward')
    skipBackwardTimeOut = setTimeout(() => {
    mainVideoContainer.classList.remove('skip-backward')
    }, 1100);
  } else if (  mainVideoContainer.classList.contains('skip-backward')) {
    clearTimeout(skipBackwardTimeOut)
    svgBackward.style.setProperty("--fade", 'none');
    setTimeout(() => {
      svgBackward.style.setProperty("--fade", 'fade');
    }, 50);
    skipBackwardTimeOut = setTimeout(() => {
      mainVideoContainer.classList.remove('skip-backward')
      }, 1100);
  }
  timeupdate() 
}


// Settings
let settingsOverlay = document.querySelector('.mainVideo .settings-overlay')
let settingsInsider = document.querySelectorAll('.mainVideo .settings-overlay .settings-insider')
let settingsInsiderContent = document.querySelectorAll('.mainVideo .settings-overlay .settings-insider-content')
let playbackPanelBackBtn = document.querySelector('.mainVideo .settings-overlay .settings-insider .header button .left')
let SlowestBtn = document.querySelector('.mainVideo .settings-overlay .settings-insider .slowest button')
let VerySlowBtn = document.querySelector('.mainVideo .settings-overlay .settings-insider .very-slow button')
let SlowBtn = document.querySelector('.mainVideo .settings-overlay .settings-insider .slow button')
let NormalBtn = document.querySelector('.mainVideo .settings-overlay .settings-insider .normal button')
let FastBtn = document.querySelector('.mainVideo .settings-overlay .settings-insider .fast button')
let VeryFastBtn = document.querySelector('.mainVideo .settings-overlay .settings-insider .very-fast button')
let FastestBtn = document.querySelector('.mainVideo .settings-overlay .settings-insider .fastest button')
let InsaneBtn = document.querySelector('.mainVideo .settings-overlay .settings-insider .insane button')
let playbackBtns = document.querySelectorAll('.mainVideo .settings-overlay .settings-insider .playback-panel-content > div')
let settingsStatue = false
let settingsCursorStatue= false
settingsOverlay.addEventListener('mouseenter' , () =>  {
  settingsCursorStatue = true
  }
)
settingsOverlay.addEventListener('mouseleave' ,() => {
  settingsCursorStatue = false
  }
)
settingBtn.addEventListener('mouseenter' , () =>  {
  settingsCursorStatue = true
  }
)
settingBtn.addEventListener('mouseleave' ,() => {
  settingsCursorStatue = false
  }
)
window.addEventListener('mousedown' , () =>{
  if (settingsCursorStatue === false && settingsStatue === true) {
    OpenCloseSettings()
  }
}) 
function SettingsHeightHandler(e) {
  for (let i = 0; i < settingsInsider.length; i++) {
    if (settingsInsider[i].classList.contains('active')) {
      settingCont.style.height = `${settingsInsiderContent[i].clientHeight}px`
    }
}
}
window.onresize = SettingsMaxHeightHandler
function SettingsMaxHeightHandler(e) {
  settingCont.style.maxHeight = `${video.clientHeight - 100}px`
  playbackPanel.style.maxHeight = `${video.clientHeight - 100}px`
  settingsInsider[0].style.maxHeight = `${video.clientHeight - 100}px`
  // playbackPanel.style.height = `${settingsInsiderContent[1].clientHeight}px`
}
SettingsHeightHandler()
SettingsMaxHeightHandler()

function OpenCloseSettings(e) {
  settingsMain.style.display = 'block'
  if (settingsStatue === false) {
    settingsStatue = true
    settingsCursorStatue = true
    mainVideoContainer.classList.add('settings')
  } else if (settingsStatue) {
    mainVideoContainer.classList.remove('settings')
    settingsStatue = false
    settingsCursorStatue = false
  }
setTimeout(() => {
    for (let i = 0; i < settingsInsider.length; i++) {
      settingsInsider[i].classList.remove('active')
    }
    settingsMain.classList.add('active')
    SettingsHeightHandler()
    SettingsMaxHeightHandler()
}, 200);
}

settingBtn.addEventListener('click', OpenCloseSettings)

annotationsBtn.addEventListener('click', () => {
  annotationsSlider.classList.toggle('active')
})
playbackBtn.addEventListener('click', () => {
  for (let i = 0; i < settingsInsider.length; i++) {
    settingsInsider[i].classList.remove('active')
  }
  playbackPanel.style.maxHeight = `${video.clientHeight - 100}px`
  playbackPanel.style.display = 'block'
  playbackPanel.style.height = `${settingsInsiderContent[1].clientHeight}px`
  settingsMain.style.maxHeight = `${video.clientHeight - 100}px`
  settingsMain.style.height = `${settingsInsiderContent[0].clientHeight}px`
  setTimeout(() => {
    settingsMain.style.display = 'none'
  }, 200);
  setTimeout(() => {
    playbackPanel.classList.add('active')
    SettingsHeightHandler()
  }, 10);
})
playbackPanelBackBtn.addEventListener('click', () => {
  for (let i = 0; i < settingsInsider.length; i++) {
    settingsInsider[i].classList.remove('active')
  }
  settingsMain.style.display = 'block'
  setTimeout(() => {
    playbackPanel.style.display = 'none'
  }, 200);
  setTimeout(() => {
    settingsMain.classList.add('active')
    SettingsHeightHandler()
  }, 10);
})
function playbackRateCheck(active) {
  for (let i = 0 ;i < playbackBtns.length ; i++) {
    playbackBtns[i].classList.remove('active')
  }
  active.classList.add('active')
  if(video.playbackRate === 1) {
    playbackRateValue.innerText = 'Normal'
  } else {
    playbackRateValue.innerText = video.playbackRate
  }
  for (let i = 0; i < settingsInsider.length; i++) {
    settingsInsider[i].classList.remove('active')
  }
  settingsMain.style.display = 'block'
  setTimeout(() => {
    playbackPanel.style.display = 'none'
  }, 200);
  setTimeout(() => {
    settingsMain.classList.add('active')
    SettingsHeightHandler()
  }, 10);
}
SlowestBtn.addEventListener('click' , (e) => {
  video.playbackRate = 0.25
  playbackRateCheck(playbackBtns[1])
})
VerySlowBtn.addEventListener('click' , (e) => {
  video.playbackRate = 0.5
  playbackRateCheck(playbackBtns[2])
})
SlowBtn.addEventListener('click' , (e) => {
  video.playbackRate = 0.75
  playbackRateCheck(playbackBtns[3])
})
NormalBtn.addEventListener('click' , (e) => {
  video.playbackRate = 1
  playbackRateCheck(playbackBtns[4])
})
FastBtn.addEventListener('click' , (e) => {
  video.playbackRate = 1.25
  playbackRateCheck(playbackBtns[5])
})
VeryFastBtn.addEventListener('click' , (e) => {
  video.playbackRate = 1.5
  playbackRateCheck(playbackBtns[6])
})
FastestBtn.addEventListener('click' , (e) => {
  video.playbackRate = 1.75
  playbackRateCheck(playbackBtns[7])
})
InsaneBtn.addEventListener('click' , (e) => {
  video.playbackRate = 2
  playbackRateCheck(playbackBtns[8])
})

// buttonsBlur()

//loading 

video.onwaiting = (event) => {
  document.body.classList.add("loading");
  loadingStatue = true
};
video.onplaying = (event) => {
  document.body.classList.remove("loading");
  loadingStatue = false
};
buttonsBlur();

