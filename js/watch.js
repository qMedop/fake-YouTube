const scrollBtn = document.querySelector('.mainVideo .videoControlls .controlls .scroll')

let watchVid = localStorage.getItem('videowatch').slice(5)

let videoInteraction = document.querySelector('.Wleft .video-interact .video-info .right')
let videoInteractionDownload = document.querySelector('.Wleft .video-interact .video-info .right .download')
let videoInteractionThanks = document.querySelector('.Wleft .video-interact .video-info .right .thanks')
let videoInteractionClip = document.querySelector('.Wleft .video-interact .video-info .right .clip')
let videoInteractionLike = document.querySelector('.Wleft .video-interact .video-info .right .like')
let videoInteractionDisLike = document.querySelector('.Wleft .video-interact .video-info .right .dislike')
let vdieoLikeNumbers = document.querySelector('.Wleft .video-interact .video-info .right .like .text')
let videoAbout = document.querySelector('.Wleft .about-video')
let fullscreenHolder = document.querySelector('.full-screen-holder')
let buttonsHandler = document.querySelector('.Wleft .video-interact .video-info .right .buttons-handler')
let watchingVideo = document.querySelector('#mainVideo')
let ambientBtn = document.querySelector('.mainVideo .videoControlls .settings-overlay .ambient-mode')
let ambientSlider = document.querySelector('.mainVideo .videoControlls .settings-overlay .ambient-mode .slider')
let videoLike = false
let videoDisLike = false

window.onload = () => {
  mainVideo.src = videosArray[watchVid].src
  console.log(previewVideo);
  previewVideo.src = videosArray[watchVid].src
  mainImg.src = videosArray[watchVid].thumbnail
  videoTittle.textContent = videosArray[watchVid].name
  VideoName.textContent = videosArray[watchVid].name
  VideoName.textContent = videosArray[watchVid].name
  videoUploadDate.textContent = timeSince(videosArray[watchVid].date)
  vdieoAbout.textContent = videosArray[watchVid].descripion
  if (videosArray[watchVid].descripion === '') {
    showMore.textContent = '...About'
  }
  if(videosArray[watchVid].likes === 1) {
    like()
    videoLike = true
  } else {
    videoLike = false
  }
  if(videosArray[watchVid].dislike) {
    dislike()
    videoDisLike = true
  }
  else {
    videoDisLike = false
  }
  if(window.localStorage.getItem('ambientMode')  == 'true') {
    ambientSlider.classList.add('active')
  } else {
    ambientSlider.classList.remove('active')
  }
}
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
} else {
  window.addEventListener('scroll' , hideViewNav)
  scrollBtn.addEventListener('click' , () => {
    if(window.scrollY <= 200) {
      window.scrollTo({
        top: 200,
        behavior:"smooth"
      })
    }
  })
  
}

function hideViewNav() {
  if (document.fullscreenElement !== null) {
    if(window.scrollY === 0) {
      nav.classList.add('hide-nav')
    } else {
      nav.classList.remove('hide-nav')
    }
  } else {
    nav.classList.remove('hide-nav')
  }
  if(window.scrollY === 0) {
    nav.classList.remove('not-top')
  } else {
    nav.classList.add('not-top')
  }
}


window.addEventListener('resize', interactionHandler)

function interactionHandler(e) {
  if(window.window.innerWidth >= 600) {
    if (videoInteraction.clientWidth < 900) {
      videoInteractionClip.style.display = 'none'
    } else {
      videoInteractionClip.style.display = 'block'
    }
    if (videoInteraction.clientWidth < 650) {
      videoInteractionThanks.style.display = 'none'
    } else {
      videoInteractionThanks.style.display = 'block'
    }
    if (videoInteraction.clientWidth < 430 ) {
      videoInteractionDownload.style.display = 'none'
    } else {
      videoInteractionDownload.style.display = 'block'
    }
  } else {
    if (videoInteraction.clientWidth > 520) {
      videoInteractionThanks.style.display = 'block'
    } else {
      videoInteractionThanks.style.display = 'none'
    }
    videoInteractionClip.style.display = 'none'
    videoInteractionDownload.style.display = 'block'
  }
  console.log(videoInteraction.clientWidth, 'c');
  console.log(buttonsHandler.clientWidth , 'b');
}
interactionHandler()

let abotStatue = false

videoAbout.addEventListener('click', openAbout)
closeAboutBtn.addEventListener('click', closeAbout)
function openAbout(e) {
  if (!abotStatue) {
    abotStatue = true
    videoAbout.classList.add('opened')
    console.log('object');
  }
}
function closeAbout(e) {
  if (abotStatue) {
    videoAbout.classList.remove('opened')
    setTimeout(() => {
      abotStatue = false
    }, 300);
  }
}
videoInteractionLike.addEventListener('click', like)
videoInteractionDisLike.addEventListener('click', dislike)

function like(e) {
  if(!videoLike) {
    videoInteractionLike.classList.add('active')
    videoInteractionDisLike.classList.remove('active')
    videosArray[watchVid].dislike = false
    videosArray[watchVid].likes = 1
    uploadToLocalStorage(videosArray)
    videoDisLike = false
    if (videosArray[watchVid].likes === 0) {
      vdieoLikeNumbers.textContent = ''
    } else {
      vdieoLikeNumbers.textContent = videosArray[watchVid].likes
    }
    setTimeout(() => {
      videoLike = true
    }, 100);
  }
  if(videoLike) {
    videoInteractionLike.classList.remove('active')
    videoInteractionDisLike.classList.remove('active')
    videosArray[watchVid].dislike = false
    videosArray[watchVid].likes = 0
    uploadToLocalStorage(videosArray)
    videoDisLike = false
    if (videosArray[watchVid].likes === 0) {
      vdieoLikeNumbers.textContent = ''
    } else {
      vdieoLikeNumbers.textContent = videosArray[watchVid].likes
    }
    // vdieoLikeNumbers.textContent = ''
    setTimeout(() => {
      videoLike = false
    }, 100);
  }
}
function dislike(e) {
  if(!videoDisLike) {
    videoInteractionDisLike.classList.add('active')
    videoInteractionLike.classList.remove('active')
    videosArray[watchVid].likes = 0
    videosArray[watchVid].dislike = true
    uploadToLocalStorage(videosArray)
    videoLike = false
    if (videosArray[watchVid].likes === 0) {
      vdieoLikeNumbers.textContent = ''
    } else {
      vdieoLikeNumbers.textContent = videosArray[watchVid].likes
    }
    setTimeout(() => {
      videoDisLike = true
    }, 100);
  }
  if(videoDisLike) {
    videoInteractionDisLike.classList.remove('active')
    videoInteractionLike.classList.remove('active')
    videosArray[watchVid].likes = 0
    videosArray[watchVid].dislike = false
    uploadToLocalStorage(videosArray)
    videoLike = false
    if (videosArray[watchVid].likes === 0) {
      vdieoLikeNumbers.textContent = ''
    } else {
      vdieoLikeNumbers.textContent = videosArray[watchVid].likes
    }
    setTimeout(() => {
      videoDisLike = false
    }, 100);
  }
}

function updatePlayer(e) {
  fullscreenHolder.innerHTML = videoCont.innerHTML
  videoCont.innerHTML = ''
  script.remove()
    if (
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/iPhone/i)
    ) {
      let script = document.createElement("script");
      script.setAttribute("src", "js/playerM.js");
      document.body.appendChild(script);
      console.log(script);
    } else {
      let script = document.createElement("script");
      script.setAttribute("src", "js/player.js");
      document.body.appendChild(script);
    }
    
  }
  
  
  let canvas = document.querySelector('canvas')
  let ctx = canvas.getContext('2d')


// ctx.filter = 'blur(1px)'

let step


let draw = () => {
  ctx.drawImage(video, 0, 0 , canvas.width, canvas.height)
}

const drawloop = () => {
  draw()
  window.requestAnimationFrame(drawloop)
}

  watchingVideo.addEventListener('loadeddata' , draw)
  watchingVideo.addEventListener('seeked' , draw,false)
  watchingVideo.addEventListener('play' , drawloop)
  console.log('object');


watchingVideo.addEventListener('loadeddata', () => {
  watchingVideo.addEventListener('play', () => {
    draw()
    ambientModeCheck()
  })
})
ambientBtn.addEventListener('click', () => {
  if(window.localStorage.getItem('ambientMode')  == 'false') {
    window.localStorage.setItem('ambientMode', 'true')
  } else {
    window.localStorage.setItem('ambientMode', 'false')
  }
  ambientModeCheck()
})

function ambientModeCheck(e) {
  if(window.localStorage.getItem('ambientMode')  == 'true') {
    document.body.classList.add('ambient-mode')
    ambientSlider.classList.add('active')
  } else {
    document.body.classList.remove('ambient-mode')
    ambientSlider.classList.remove('active')
  }
}
commentInput.addEventListener('paste', handlePaste)
function handlePaste(event) {
  event.preventDefault();

  // Get pasted text
  const pastedText = (event.clipboardData || window.clipboardData).getData('text/plain');

  // Remove unwanted styles or formatting here if needed
  // For simplicity, this example removes any HTML tags
  const sanitizedText = pastedText.replace(/<[^>]+>/g, '');

  // Insert sanitized text into the editable div
  document.execCommand('insertText', false, sanitizedText);
}

buttonsBlur()
