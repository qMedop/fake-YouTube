let first = document.querySelector('.firstbut')
let second = document.querySelector('.secondbut')
let videos = document.querySelectorAll('video')
let vids = document.querySelectorAll('.vids')
let test = 0
let span = document.querySelectorAll('.vids span')
let playPauseAnim = document.querySelector('.Play-Pause')
let svgPlay = document.querySelector('.Play-Pause .play')
let svgPause = document.querySelector('.Play-Pause .pause')
let spanValue = 0
let vidsContainer = document.querySelector('.vids-container')
const progressBar = document.querySelectorAll('#progress-bar');
const seek = document.querySelectorAll('#seek');
let yy = 0

window.onload = document.body.classList.add('shorts')

let videoStatue = 0
// for(i=0;i <= span.length - 1;i++){
//   span[i].setAttribute('id',`${i}`)
//   span[i].addEventListener('click', (e) => {
//     if(videoStatue == 0) {
//       videos[e.target.getAttribute('id')].pause()
//       videoStatue = 1
//       pausereveal()
//     } else {
//       videos[e.target.getAttribute('id')].play()
//       videoStatue = 0
//       playreveal()
//     }
//     })
// }

for(i=0;i <= videos.length - 1;i++){
  videos[i].setAttribute('id',`${i}`)
}

const Option = {
  root: null,
  threshold: 0.8,
  rootmargin: '100px'
  
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting == true) {
        el.target.play()
        videoStatue = 0
        autoPlay()
    } else {
      el.target.pause()
      el.target.currentTime = 0
    }
    function autoPlay() {
      setInterval(() => {
        if(el.target.currentTime >= el.target.duration) {
          el.target.currentTime = 0
          setTimeout(() => {
            el.target.play()
          }, 100);
        }
      }, 1000);
    }
    yy = el.target.getAttribute('id')
  })
},Option)

vidsContainer.addEventListener('click', (e) => {
  let clicked = e.target
  if(e.target.toString() == "[object HTMLVideoElement]") {
      if(videoStatue == 0) {
    e.target.pause()
    videoStatue = 1
    pausereveal()
  } else if(videoStatue == 1) {
    e.target.play()
    videoStatue = 0
    playreveal()
  }
  }
})



videos.forEach(video => {
  observer.observe(video)
})

// function updateTime() {
//   for(i=0;i <= videos.length - 1;i++){
//   seek[i].setAttribute('class',i)
//   let videoDuration = videos[i].duration
//   let currentTime = videos[i].currentTime
//   seek[i].setAttribute('max' , videoDuration)
//   seek[i].setAttribute('value', currentTime)
//   progressBar[i].setAttribute('max', videoDuration)
//   progressBar[i].setAttribute('value', currentTime)
//   videos[i].addEventListener('timeupdate', updateTime);
//   function skipToTime(event) {
//   let seekIndex = event.target.getAttribute('class')
//   yy = seekIndex
//   const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
//   videos[yy].currentTime = skipTo
//   progressBar[yy].value = skipTo
//   seek[yy].value = skipTo
//   }
//   seek[yy].addEventListener('input', skipToTime);
// }
// }


function pausereveal() {
  playPauseAnim.style.display = 'flex'
  svgPause.style.display = 'flex'
  playPauseAnim.style.opacity = '1'
  setTimeout(() => {
    playPauseAnim.style.height = '60px'
    playPauseAnim.style.width = '60px'
  }, 10);
  setTimeout(() => {
    playPauseAnim.style.opacity = '0'
  }, 300);
  setTimeout(() => {
    playPauseAnim.style.height = '0px'
    playPauseAnim.style.width = '0px'
    playPauseAnim.style.display = 'none'
    svgPause.style.display = 'none'
  }, 310);
}
function playreveal() {
  playPauseAnim.style.display = 'flex'
  svgPlay.style.display = 'flex'
  playPauseAnim.style.opacity = '1'
  setTimeout(() => {
    playPauseAnim.style.height = '60px'
    playPauseAnim.style.width = '60px'
  }, 10);
  setTimeout(() => {
    playPauseAnim.style.opacity = '0'
  }, 300);
  setTimeout(() => {
    playPauseAnim.style.height = '0px'
    playPauseAnim.style.width = '0px'
    playPauseAnim.style.display = 'none'
    svgPlay.style.display = 'none'
  }, 310);
}
document.body.onscroll = () => {
  document.body.scrollBy(0,643)
  console.log(1);
}
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
