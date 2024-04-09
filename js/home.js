
let sugg = document.querySelector(".sugg");
let previous = document.querySelector(".back");
let next = document.querySelector(".next");
const floatingWindow = document.querySelector('.floating-video')
const mainVideoHolder= document.querySelector('.mainVideo')
const miniPlayerControlls= document.querySelector('.floating-conrolls')
const mobileBottomBar = document.querySelector('.mobile-bottom-bar')
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
        e.preventDefault()
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
    e.preventDefault()
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
    e.preventDefault()

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
      window.location.href = 'watch.html'
      }
    })
  })
}

function openFloaringWatching() {
  floatingWindow.style.height = window.innerHeight + 'px'
  floatingWindow.style.display = 'block'
  let watchVid = localStorage.getItem('videowatch').slice(5)

  let videoW = JSON.parse(window.localStorage.getItem("videoA"));
  let thumbnailW = JSON.parse(window.localStorage.getItem("thumbnailA"));
  let headderW = JSON.parse(window.localStorage.getItem("headderA"));
  let duartionW = JSON.parse(window.localStorage.getItem("duartionA"));
  let descripionW = JSON.parse(window.localStorage.getItem("descripionA"));
  let timeUploadedW = JSON.parse(window.localStorage.getItem("timeUploadedA"));
  mainVideo.src = videoW[watchVid]
  previewVideo.src = videoW[watchVid]
  mainImg.src = thumbnailW[watchVid]
  videoTittle.textContent = headderW[watchVid]
  document.body.classList.add('floating')
  lockBody()
  previewimgSize()
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
  })
}
for(let i = 0; i < menuDelete.length; i++) {
  menuDelete[i].setAttribute('video', i)
  menuDelete[i].addEventListener('click', (e) => {
  })
}





// if (
//   navigator.userAgent.match(/Android/i) ||
//   navigator.userAgent.match(/iPhone/i)
// ) {

//   floatingWindow.style.height = window.innerHeight + 'px'
//   let initialY = null;
//   let isSwiping = false;
//   let miniPlayerStatue = false
//   let changer
//   let flotaingIH = floatingWindow.clientHeight;
//   let mainVideoIH = mainVideoHolder.clientHeight
//   let mainVideoIW = mainVideoHolder.clientWidth
//   let windowHeight = (window.innerHeight - (58 + 46))
//   window.addEventListener('resize', miniPlayerResizer)
//   mainVideoHolder.addEventListener('touchstart', touchStartFloating);
//   mainVideoHolder.addEventListener('touchmove', touchMoveFloating);
//   mainVideoHolder.addEventListener('touchend', touchEndFlotaing);
  
//   mainVideoHolder.addEventListener('touchstart', (e) => {
//     if(!miniPlayerStatue) touchStartFloating(e)
//   });
//   mainVideoHolder.addEventListener('touchmove', (e) => {
//     if(!miniPlayerStatue) touchMoveFloating(e)
//   });
//   mainVideoHolder.addEventListener('touchend', (e) => {
//     if(!miniPlayerStatue) touchEndFlotaing(e)
//   });
  
  
  
  
//   floatingWindow.addEventListener('touchstart', (e) => {
//     if(miniPlayerStatue) touchStartFloating(e)
//   });
//   floatingWindow.addEventListener('touchmove', (e) => {
//     if(miniPlayerStatue) touchMoveFloating(e)
//   });
//   floatingWindow.addEventListener('touchend', (e) => {
//     if(miniPlayerStatue) touchEndFlotaing(e)
//   });
  
//   floatingWindow.addEventListener('click', (e) => {
//     console.log('object');  
//   });
//   function miniPlayerResizer(e) {
//     if(!miniPlayerStatue) {
//       flotaingIH = window.innerHeight;
//       mainVideoIH = mainVideoHolder.clientHeight
//       mainVideoIW = mainVideoHolder.clientWidth
//       mainVideoHolder.style.height = null
//       mainVideoIH = mainVideoHolder.clientHeight
//       mainVideoHolder.style.height = mainVideoIH + 'px'
//       floatingWindow.style.height = window.innerHeight + 'px'
//     }
//   }
  
//   function touchStartFloating(e) {
//     initialY = e.touches[0].clientY;
//     flotaingH = floatingWindow.clientHeight;
//     mainVideoH = mainVideoHolder.clientHeight
//     mainVideoW = mainVideoHolder.clientWidth
//     flotaingIH = window.innerHeight;
//     e.preventDefault()
  
//   }
  
//   function touchMoveFloating(e) {
//     if (initialY === null) {
//       return;
//     }
//     const currentY = e.touches[0].clientY;
//     if (!miniPlayerStatue) {
//       const deltaY = currentY - initialY;
//       let value = Math.min(Math.max(deltaY,0),window.innerHeight / 2)
//       changer = value / (window.innerHeight / 2)
//       if (deltaY > 5) {
//     document.body.classList.add('swiping')
//         isSwiping = true;
//         floatingWindow.style.height = `${Math.min(Math.max(flotaingH - changer * flotaingH,58),flotaingH)}px`;
//         mainVideoHolder.style.height = `${Math.min(Math.max(100 - ( changer) * 100,0),100)}%`
        // miniPlayerControlls.style.width = `${Math.max(Math.min((changer - .75)  * 1100 ,200),0)}%`
//         mobileBottomBar.style.bottom = `${Math.max(Math.min( -46 +  changer * 46,0),-46)}px`
//         floatingWindow.style.top = `${Math.max(Math.min( changer * (window.innerHeight - (58 + 46)) ,(window.innerHeight - (58 + 46))),0)}px`
//         document.querySelector('.Wright').style.opacity = `${Math.min(Math.max(1 - changer - 0.3, 0),1)}`;
//         e.preventDefault()
//       }
//     } else  if (miniPlayerStatue) {
//         const deltaY = initialY - currentY;
//         let value = Math.min(Math.max(deltaY,0),window.innerHeight)
//         changer = value / window.innerHeight
//         if (deltaY > -5) {
//           document.body.classList.add('swiping')
//           isSwiping = true;
//           floatingWindow.style.height = `${Math.min(Math.max(changer * flotaingIH,flotaingH),flotaingIH)}px`;
//           mainVideoHolder.style.height = `${Math.min(Math.max(changer * 100,0),100)}%`
//           miniPlayerControlls.style.width = `${Math.max(Math.min(200 - (changer) * 2000,200),0)}%`
//           mobileBottomBar.style.bottom = `${Math.max(Math.min( changer * -46 ,0),-46)}px `
//           floatingWindow.style.top = `${Math.max(Math.min( (window.innerHeight - (58 + 46)) - changer * (window.innerHeight - (58 + 46)) ,(window.innerHeight - (58 + 46))),0)}px `
//           document.querySelector('.Wright').style.opacity = `${Math.min(Math.max(changer - 0.3, 0),1)}`;
//         e.preventDefault()
//       } 
//     }
//   }
  
//   function touchEndFlotaing() {
//       document.body.classList.remove('swiping')
//       // floatingWindow.style.bottom = `46px`
//       // floatingWindow.style.top = 'auto'
//       if (isSwiping) {
//       isSwiping = false;
//       initialY = null;
//       document.querySelector('.Wright').style.opacity = null;
//       floatingWindow.style.height = null
//       miniPlayerControlls.style.width = null
//       mobileBottomBar.style.bottom = null
//       // floatingWindow.style.bottom = null
//       if (!miniPlayerStatue) {
//         if(changer >= 0.5) {
//           openMiniPlayer()
//         } else if (changer < 0.5) {
//           closeMiniPlayer()
//         }
//       } else if(miniPlayerStatue) {
//         if(changer >= 0.5) {
//           closeMiniPlayer()
//         } else if (changer < 0.5) {
//           openMiniPlayer()
//           }
//       }
//     }
//   }
  
  
//   function openMiniPlayer() {
//     document.body.classList.add('mini-palyer')
//     mainVideoHolder.style.height =`0%`
//     miniPlayerStatue = true
//     document.querySelector('.Wright').style.opacity = null;
//     floatingWindow.style.height = null
//     miniPlayerControlls.style.width = null
//     mobileBottomBar.style.bottom = null
//     // floatingWindow.style.bottom = null
//     floatingWindow.style.top = `${(window.innerHeight - (58 + 46))}px`
//     unLockBody()
  
//   }
//   function closeMiniPlayer() {
//     document.body.classList.remove('mini-palyer')
//     mainVideoHolder.style.height =`100%`
//     floatingWindow.style.height = window.innerHeight + 'px'
//     miniPlayerStatue = false
//     document.querySelector('.Wright').style.opacity = null;
//     floatingWindow.style.height = null
//     miniPlayerControlls.style.width = null
//     mobileBottomBar.style.bottom = null
//     floatingWindow.style.top = '0px'
//     lockBody()
//   }
  
//   let startPoint
//   let movingPoint
//   let swipeResult
//   let swipingStatue = false
//   function swipeStart(e) {
//     startPoint = e.touches[0].clientY;
//     swipingStatue = true
//     setTimeout(() => {
//       swipingStatue = false
//     }, 200);
//   }
//   function swipeUp(e) {
//   }
//   function swipeDown(e) {
//     movingPoint = e.touches[0].clientY
//     swipeResult = movingPoint - startPoint;
//   }
//   function swipeEnd(e) {
//     if(swipeResult > 100 && !miniPlayerStatue && swipingStatue) {
//       openMiniPlayer()
//       console.log('right');
//     } else if(swipeResult < -100 && miniPlayerStatue && swipingStatue) {
//       closeMiniPlayer()
//       console.log('left');
//     }
//   }
  
//   floatingWindow.addEventListener('touchstart', swipeStart)
//   floatingWindow.addEventListener('touchmove', swipeDown)
//   floatingWindow.addEventListener('touchend', swipeEnd)
  
  
  
  
//   let previousHeight = window.innerHeight;
  
//   function handleResize() {
//     windowHeight = (window.innerHeight - (58 + 46))
//     floatingWindow.style.top = `${windowHeight}px`
//   }
  
//   function handleScroll() {
//     if (window.innerHeight !== previousHeight) {
//       handleResize();
//       previousHeight = window.innerHeight;
//     }
//   }
  
//   function handleTransitionEnd() {
//       console.log('Transition ended!');
//       if(miniPlayerStatue) {
//         floatingWindow.style.bottom = '46px'
//         floatingWindow.style.top = 'auto'
//     }
//   }
  
//   // Adding the event listener to the element
//   floatingWindow.addEventListener('transitionend', handleTransitionEnd);
  
  
//   // Listen for scroll and resize events
//   // window.addEventListener('scroll', handleScroll);
//   // window.addEventListener('resize', handleResize);
  
  
// }

