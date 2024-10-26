let shorts
let shortsSpaceAll 
let videos 
let vids 
let span 
let playPauseAnim
let svgPlay 
let svgPause 
let vidsContainer
let shortsContainer 
let progressBar
let seek 
let timeLineContainerAll
let going
let previewimgContainer
let timelineCurrent
let thumbIndicatorAll 
let goingAll 
let test = 0
let spanValue = 0
let yy = 0
let timeout;
let muteStatue = true
let shortCount
let videoStatue = 0

document.addEventListener("keydown", (e) => {
  if(inputFocus === false) {
    switch (e.keyCode) {
      case 32:
      case 75:
        e.preventDefault();
        break;
    }
  }
});
function varDefine() {
  shorts = document.querySelectorAll('.shorts-container .short')
  shortsSpaceAll = document.querySelectorAll('.shorts-container .short .short-space')
  videos = document.querySelectorAll('.shorts-container .short video')
  vids = document.querySelectorAll('.vids')
  span = document.querySelectorAll('.vids span')
  playPauseAnim = document.querySelector('.Play-Pause')
  svgPlay = document.querySelector('.Play-Pause .play')
  svgPause = document.querySelector('.Play-Pause .pause')
  vidsContainer = document.querySelector('.vids-container')
  shortsContainer = document.querySelector('.shorts-container')
  progressBar = document.querySelectorAll('#progress-bar');
  seek = document.querySelectorAll('#seek');
  timeLineContainerAll = document.querySelectorAll('.shorts-container .short .timeline-container')
  going = document.querySelectorAll('.shorts-container .short .timeline-container #going')
  previewimgContainer = document.querySelectorAll('.shorts-container .short .timeline-container .timeline-holder .preview-img-container')
  timelineCurrent = document.querySelectorAll('.shorts-container .short .timeline-container .timeline-holder .timelineCurrent')
  thumbIndicatorAll = document.querySelectorAll('.shorts-container .short .timeline .thumb-indicaror')
  goingAll = document.querySelectorAll('.shorts-container .short .timeline .going')
  for(i=0;i <= videos.length - 1;i++){
    shorts[i].setAttribute('data-count',`${i}`)
  }
}
const Option = {
  root: shortsContainer,
  threshold: 0.5,
}
const observer = new IntersectionObserver(observerCallBack,Option)

document.addEventListener('DOMContentLoaded', (e) => {
  if(dataFetched) {
    appendShortsF()
    varDefine()
    assignTimeLineToVideo()
    videosPlayPause()
    videosloading()
    videosError()
    videosHover()
    videosComments()
    videosMunteUnmute()
    assignKeyboardButtons()
    shorts.forEach(short => {
      observer.observe(short)
    })
  }
});

function observerCallBack(entries,observer) {
  entries.forEach(el => {
    let video = el.target.querySelector('video')
    if (el.isIntersecting == true) {
      if(el.target.dataset.viewed == 'false') {
        shortsArray[returnindex(shortsArray,'id',el.target.dataset.link)].views += 1
        el.target.dataset.viewed = true
      }
      let index = location.pathname.indexOf('/shorts.html')
      let url = location.pathname.slice(0,index)
      // Function to handle popstate event
      function handlePopState(event) {
        // Replace the URL with the new value again
        var newValue = el.target.dataset.link;
        var newQueryString = "short=" + newValue;
        var baseUrl = window.location.href.split("?")[0];
        history.replaceState(null, null, baseUrl + "?" + newQueryString);
      }

      // Add event listener for popstate
      window.onpopstate = handlePopState;

      // Create a new value for the 'thing' parameter
      var newValue =  el.target.dataset.link;

      // Construct the new query string
      var newQueryString = "short=" + newValue;

      // Update the URL without saving it in history
      var baseUrl = window.location.href.split("?")[0];
      history.replaceState(null, null, baseUrl + "?" + newQueryString);

      // window.history.replaceState({}, '', `${url}/shorts.html?short=${el.target.dataset.link}`);
        document.title = el.target.querySelector('.headder .text p').innerHTML
        el.target.classList.remove('hidden')
        video.play()
        videoStatue = 0
        shortCount = el.target.dataset.count;
        if(muteStatue) {
          el.target.classList.add('muted')
          video.muted  = true
        } else {
          el.target.classList.remove('muted')
          video.muted  = false
        }
      } else {
        el.target.classList.add('hidden')
      video.pause()
      video.currentTime = 0
    }
    yy = el.target.getAttribute('id')
  })
}
function assignTimeLineToVideo(e) {
  for (let i = 0; i < shorts.length; i++) {
    let short = shorts[i]
    let video =  short.querySelector('video')
    let timeLineContainer =  short.querySelector('.timeline-container')
    let thumb =  short.querySelector('.timeline .thumb-indicaror')
    let going =  short.querySelector('.timeline .going')
    let scrrubing = false
    let wasPaused
        video.addEventListener('timeupdate', () => {
          let percent = video.currentTime / video.duration;
          timeLineContainer.style.setProperty("--progress-position", percent);
        })
        if (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/iPhone/i)
          ) {
            timeLineContainer.addEventListener('touchstart' , (e) => {
              e.preventDefault();
              progress(e,timeLineContainer,video)
              scrrubing = true
              wasPaused = video.paused
              video.pause()
            })
            document.addEventListener('touchend' , (e) => {
              if(scrrubing) {
                e.preventDefault();
                scrrubing = false
                short.classList.remove('scrubbing')
                if(!wasPaused) video.play()
            }
            })
            document.addEventListener('touchmove' , (e) => {
              if (
                navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/iPhone/i)
                ) {
                if(scrrubing) {
                  short.classList.add('scrubbing')
                  progress(e,timeLineContainer,video)
                  previewTimeLine(e,timeLineContainer,video,thumb,going)
                }
              } else {
              }
            })
          } else {
            timeLineContainer.addEventListener('pointerdown' , (e) => {
              progress(e,timeLineContainer,video)
              scrrubing = true
              wasPaused = video.paused
              video.pause()
            })
            document.addEventListener('pointerup' , (e) => {
              if(scrrubing) {
                e.preventDefault();
                scrrubing = false
                short.classList.remove('scrubbing')
                if(!wasPaused) video.play()
            }
            })
          document.addEventListener('pointermove' , (e) => {
              if (
                navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/iPhone/i)
              ) {
              } else {
                if(scrrubing) {
                  short.classList.add('scrubbing')
                  e.preventDefault();
                  progress(e,timeLineContainer,video)
                  previewTimeLine(e,timeLineContainer,video,thumb,going)
                }
              }
            })
        }
      video.addEventListener('mouseenter', (e) => {
      })
      video.addEventListener('mouseleave', (e) => {
      })
  }
}
function videosPlayPause(e) {
  for (let i = 0; i < shorts.length; i++) {
    let short = shorts[i]
    let video = short.querySelector('video')
    let playPauseB = short.querySelector('#playPause')
    video.addEventListener('click', (e) => {
      if(!short.classList.contains('loading')) {
        if (video.paused == true) {
          video.play();
          scaleAnimtion(short,video.paused,'play','pause')
      } else {
        video.pause();
        scaleAnimtion(short,video.paused,'play','pause')
      }
      }
    })
    playPauseB.addEventListener('click', (e) => {
      if(!short.classList.contains('loading')) {
        if (video.paused == true) {
          video.play();
      } else {
        video.pause();
      }
      }
    })
    video.addEventListener("pause", () => {
      short.classList.add('paused')
    });
    video.addEventListener("play", () => {
      short.classList.remove('paused')
    });
  }
}
function videosMunteUnmute(e) {
  for (let i = 0; i < shorts.length; i++) {
    let short = shorts[i]
    let video = short.querySelector('video')
    let button = short.querySelector('#mute')
    button.addEventListener('click', (e) => {
      video.muted = !video.muted
      short.classList.toggle('muted')
      if(muteStatue) {
        muteStatue = false
      } else {
        muteStatue = true
      }
    })
  }
}
function videosloading(e) {
  for (let i = 0; i < shorts.length; i++) {
    let video = videos[i]
    let short = shorts[i]
    video.onwaiting = (e) => {
      short.classList.add("loading");
    };
    video.onplaying = (e) => {
      short.classList.remove("loading");
    };
  }
}
function videosError(e) {

}
function videosHover(e) {
  for (let i = 0; i < shorts.length; i++) {
    let short = shorts[i]
    let video =  short.querySelector('video')
    let videoCont = short.querySelector('.video')
    let timeLineContainer =  short.querySelector('.timeline-container')
    let hoverInteractBtns = short.querySelectorAll('.hover-interact button')
    videoCont.addEventListener('mouseenter', (e) => {
      short.classList.add('hover')
    })
    timeLineContainer.addEventListener('mouseenter', (e) => {
      short.classList.add('hover')
    })
    videoCont.addEventListener('mouseleave', (e) => {
      short.classList.remove('hover')
    })
    timeLineContainer.addEventListener('mouseleave', (e) => {
      short.classList.remove('hover')
    })
    for (let i = 0; i < hoverInteractBtns.length; i++) {
      hoverInteractBtns[i].addEventListener('mouseenter', (e) => {
        short.classList.add('hover')
      })
      hoverInteractBtns[i].addEventListener('mouseleave', (e) => {
        short.classList.add('hover')
      })
    }
  }
}
function videosComments(e) {
  for (let i = 0; i < shorts.length; i++) {
    let short = shorts[i]
    let video =  short.querySelector('video')
    let commentB = short.querySelector('#comment')
    let Closecomment = short.querySelector('#close')
    commentB.addEventListener('click', (e) => {
      short.classList.toggle('comments')
    })
    Closecomment.addEventListener('click', (e) => {
      short.classList.remove('comments')
    })
  }
}
function scaleAnimtion(div, statue, c1, c2) {
  if (statue) {
    clearTimeout(timeout);
    div.classList.remove(c1);
    div.classList.add(c2);
    timeout = setTimeout(() => {
      div.classList.remove(c2);
    }, 1200);
  } else {
    clearTimeout(timeout);
    div.classList.remove(c2);
    div.classList.add(c1);
    timeout = setTimeout(() => {
      div.classList.remove(c1);
    }, 1200);
  }
}
function progress(e,timeline,video) {
  let x
  let y
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
    ) {
      var evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
      var touch = evt.touches[0] || evt.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
    } else {
      x = e.x
      y = e.y
  }
  const rect = timeline.getBoundingClientRect();
  const percent =
    Math.min(Math.max(0, x - rect.x), rect.width) / rect.width;
    video.currentTime = percent * video.duration;
  timeline.style.setProperty("--progress-position", percent);
}
function previewTimeLine(e,timeline,video,thumb,going) {
  let x
  let y
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
    ) {
      var evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
      var touch = evt.touches[0] || evt.changedTouches[0];
      x = touch.pageX;
      y = touch.pageY;
    } else {
      x = e.x
      y = e.y
  }
  const rect = timeline.getBoundingClientRect();
  const percent = Math.min(Math.max(0, x - rect.x), rect.width) / rect.width;
  const cuurenttime = percent * video.duration;
  let percentMax =
    (rect.width - thumb.clientWidth / 2) / rect.width;
  let percentLow =
    1 - (rect.width - thumb.clientWidth / 2) / rect.width;
  let percentTwo = percent;
  if (percent > percentMax ) {
    percentTwo = percentMax ;
  } else if (percent < percentLow) {
    percentTwo = percentLow;
  }
  timeline.style.setProperty("--preview-position-img", percentTwo);
  timeline.style.setProperty("--preview-position", percent);
  going.textContent = FormatTime(cuurenttime)
}
function uploadVideo() {
  const video = {
    name: titleI.value,
    src: vidoSRC,
    descripion: descripionI.value,
    duration: previewduration,
    date: Date.now(),
    views: [],
    likes: [],
    dislike: [],
    Watched: [],
    comments: [],
  };
  shortsArray.push(video);
  uploadToLocalStorage(videosArray);
}
function assignKeyboardButtons() {
  document.addEventListener("keyup", (e) => {
    if(inputFocus === false) {
      switch (e.keyCode) {
        case 32:
        case 75:
          e.preventDefault();
          let short = shorts[shortCount]
          let video = short.querySelector('video')
          if(!short.classList.contains('loading')) {
            if (video.paused == true) {
              video.play();
              scaleAnimtion(short,video.paused,'play','pause')
          } else {
            video.pause();
            scaleAnimtion(short,video.paused,'play','pause')
          }
          }
          break;
      }
    }
  });
  
}
function appendShortsF(e) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const urlShort = urlParams.get('short');
  if(urlShort) {
    appendShorts(shortsArray,document.querySelector("body div.shorts-container .short-inner"),'id','==',urlShort)
    appendShorts(shortsArray,document.querySelector("body div.shorts-container .short-inner"),'id','!==',urlShort)
  } else {
    appendShorts(shortsArray,document.querySelector("body div.shorts-container .short-inner"))
  }
}