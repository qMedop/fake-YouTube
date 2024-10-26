let videosCont
document.addEventListener('dataFetched', function(event) {
  videosCont = landing.querySelector(".landing .videos-container");
  appendVideos(videosCont).then(()=> {
    videoHover(videosCont)
    
  }).catch(error => {
    console.log(error);
  })
  suggustedConttent()
});
//apennding suggested contnet
//check if the video load succssefully
//activating the necessary function for the project 

function assignEdit() {
  let videos =  videosCont.querySelectorAll('.video')
}
function videoHover(videosContainer) {
  let volume = true
  let activeVideo
  let updateTime
  let scrubbing = false
  let videoTimeOut;
  let videoTimeOut2;
  let movingEvents = (e) => {
    tmcHover(e)
    seeking(e)
  }
  let videos = videosContainer.querySelectorAll('#video')
    videos.forEach(video => {
        let time = video.querySelector(`.time .allTime`);
        let timelineCont = video.querySelector(`.timeline-container .timeline-holder`);
        let mainVideo = video.querySelector(`#mainVideo`);
        let previewVideo = video.querySelector(`#previewVideo`);
        video.dataset.hover = true
        video.addEventListener('pointerenter',(e) => {
          activeVideo = video
          video.muted = volume
          if(volume) {
            video.classList.add('muted')
          } else {
            video.classList.remove('muted')
          }
          videoTimeOut = setTimeout(() => {
            if(!mainVideo.src) {
              activeVideo.classList.add("prepare");
              mainVideo.src = mainVideo.dataset.videosrc
              if(!previewVideo.src) {
                previewVideo.src = mainVideo.dataset.videosrc
              }
              mainVideo.addEventListener('loadeddata', function() {
              console.log('object');
              activeVideo.classList.add("active");
              videoPlay()
            })
            } else {
              activeVideo.classList.add("active");
              videoPlay()
            }
          }, 400);
          let updateTime = () => {
            timeUpdate(mainVideo)
          }
          mainVideo.addEventListener('timeupdate',updateTime)
          video.addEventListener('pointermove', movingEvents)
          timelineCont.addEventListener('pointerdown', pointerDown)
        })
        video.addEventListener('pointerleave',(e) => {
          mainVideo.removeEventListener('timeupdate',updateTime)
          time.textContent = time.dataset.timevalue
          video.classList.remove('scrubbing')
          time.classList.remove('scrubbing')
          document.body.style.userSelect = 'auto'
          videoPause(video,mainVideo)
          activeVideo = null
          video.removeEventListener('pointermove', movingEvents)
          timelineCont.removeEventListener('pointerdown', pointerDown)
          clearTimeout(videoTimeOut);
          clearTimeout(videoTimeOut2);
        })
    });
  videosContainer.addEventListener('click', (e) => {
    if(activeVideo) {
      let video = activeVideo.querySelector(`#mainVideo`);
      if(e.target.closest('button') === activeVideo.querySelector('#volume')) {
        volume = !volume
        video.muted = volume
        if(volume) {
          activeVideo.classList.add('muted')
        } else {
          activeVideo.classList.remove('muted')
        }
      }
    }
  })

  function tmcHover(e) {
    if(activeVideo) {
      let video = activeVideo.querySelector(`#mainVideo`);
      let timelineCont = activeVideo.querySelector(`.timeline-container .timeline-holder`);
      if(e.target.closest('.timeline-holder') === timelineCont) {
        activeVideo.classList.add("tmcHover");
        let going = activeVideo.querySelector(`.timeline-container .timeline #going`);
        const rect = timelineCont.getBoundingClientRect();
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
        timelineCont.style.setProperty("--preview-position", percent);
        timelineCont.style.setProperty("--preview-position-time", percentTwo);
        going.textContent = FormatTime(cuurenttime)
      } else {
        activeVideo.classList.remove("tmcHover");
      }
    }
  }
  function seeking(e) {
    if(scrubbing && activeVideo) {
      let video = activeVideo.querySelector(`#mainVideo`);
      let timelineCont = activeVideo.querySelector(`.timeline-container .timeline-holder`);
      let thumb = activeVideo.querySelector(`.timeline-container .timeline .thumb-indicaror`);
      let previewVideo = activeVideo.querySelector(`#previewVideo`);
      const rect = timelineCont.getBoundingClientRect();
      const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
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
      const cuurenttime = percent * video.duration;
      previewVideo.currentTime = percent * previewVideo.duration;
      going.textContent = FormatTime(cuurenttime)
      timelineCont.style.setProperty("--thumb-position", percentTwo);
      }
  }
  function pointerDown(e) {
    if(activeVideo) {
      let video = activeVideo.querySelector(`#mainVideo`);
      let timelineCont = activeVideo.querySelector(`.timeline-container .timeline-holder`);
      let previewVideo = activeVideo.querySelector(`#previewVideo`);
      if(e.target.closest('.timeline-holder') === timelineCont) {
        e.preventDefault()
        e.stopPropagation()
        const rect = timelineCont.getBoundingClientRect();
        const percent =
        Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
        previewVideo.currentTime = percent * previewVideo.duration;
        timelineCont.style.setProperty("--thumb-position", percent);
        scrubbing = true
        // time.classList.add('scrubbing')
        document.body.style.userSelect = 'none'
        console.log('s');
        preventA = true
        activeVideo.classList.add('scrubbing')
        document.addEventListener('pointerup',documentUp)
      }
    }
  }
  function documentUp(e) {
    if(scrubbing && activeVideo) {
      let video = activeVideo.querySelector(`#mainVideo`);
      let timelineCont = activeVideo.querySelector(`.timeline-container .timeline-holder`);
      const rect = timelineCont.getBoundingClientRect();
      const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width;
      timelineCont.style.setProperty("--progress-position", percent);
      let thumb = activeVideo.querySelector(`.timeline-container .timeline .thumb-indicaror`);
      activeVideo.classList.remove('scrubbing')
      // time.classList.remove('scrubbing')
      document.body.style.userSelect = 'auto'
      scrubbing = false
      video.currentTime = percent * video.duration;
      document.removeEventListener('pointerup',documentUp)
    }
  }
  function videoPlay() {
    if(activeVideo) {
      let video = activeVideo.querySelector(`#mainVideo`);
      video.play()
    }
  }
  function videoPause() {
    if(activeVideo) {
      let video = activeVideo.querySelector(`#mainVideo`);
      clearTimeout(videoTimeOut);
      clearTimeout(videoTimeOut2);
      activeVideo.classList.remove("active");
      activeVideo.classList.remove("prepare");
      video.pause();
      scrubbing = false
      document.body.style.userSelect = 'auto'
    }
  }
  function timeUpdate(video) {
    if(activeVideo) {
      let time = activeVideo.querySelector(`.time .allTime`);
      let timelineCont = activeVideo.querySelector(`.timeline-container .timeline-holder`);
      const percent = video.currentTime / video.duration;
      time.textContent = FormatTime(video.duration - video.currentTime );
      timelineCont.style.setProperty("--progress-position", percent);
      let bufferdPercent = ((video.buffered.end(video.buffered.length - 1) / video.duration )* 100)
      timelineCont.style.setProperty("--buffered-position", bufferdPercent);
    }
  }
}
function suggustedConttent() {
  let sugg = landing.querySelector(".sugg");
  let suggCont = landing.querySelector(".sugg-container");
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
    "The Best",
    "ME",
    "Who?!",
    "Player",
    "Xd",
    "You",
    "What?!",
  ];

  suggButtons.forEach(el => {
    sugg.querySelector('.items').insertAdjacentHTML('beforeend', `<div><button class='cb'>${el}</button></div>`)
  });
applyHScroll(suggCont)
}