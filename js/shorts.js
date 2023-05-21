let first = document.querySelector('.firstbut')
let second = document.querySelector('.secondbut')
let videos = document.querySelectorAll('video')
let vids = document.querySelectorAll('.vids')
let test = 0
let span = document.querySelectorAll('.landing-shorts-page span')
let playPause = document.querySelector('.Play-Pause')
let svgPlay = document.querySelector('.Play-Pause .play')
let svgPause = document.querySelector('.Play-Pause .pause')
let spanValue = 0
first.addEventListener('click',() => {
  if(test == 0) {
    first.style.display = 'none'
  } else {
  if(document.documentElement.scrollHeight - document.documentElement.scrollTop == 552) {
    second.style.display = 'flex'
  }
  if(document.documentElement.scrollHeight - document.documentElement.scrollTop == 1460) {
    first.style.display = 'none'
  }
  videos[test].pause()
  videos[test].currentTime = 0
  test = test - 1
  videos[test].play()
  vids  [test].scrollIntoView({behavior: 'smooth' })
  if(test + 1 !== videos.length) {
    second.style.display = 'flex'
  }
  if(test == 0) {
    first.style.display = 'none'
  }
}

})
second.addEventListener('click',() => {
  if(test + 1 == videos.length) {
  } else {
    first.style.display = 'flex'
    videos[test].pause()
    videos[test].currentTime = 0
    test = test + 1
    videos[test].play()
    vids[test].scrollIntoView({behavior: 'smooth' })
  } 
  if(test + 1 == videos.length) {
    second.style.display = 'none'
  }
})

window.onload = button()

function button() {
  setTimeout(() => {
    window.scrollTo(0,0)
  }, 100);
}

for(i = 0; i <= videos.length - 1; i++) {
  span[i].onclick = function() {
    if (spanValue == 0) {
      videos[test].pause()
      spanValue = 1
      playPause.style.display = 'flex'
      svgPause.style.display = 'flex'
      playPause.style.opacity = '1'
      setTimeout(() => {
        playPause.style.height = '60px'
        playPause.style.width = '60px'
      }, 10);
      setTimeout(() => {
        playPause.style.opacity = '0'
      }, 300);
      setTimeout(() => {
        playPause.style.height = '0px'
        playPause.style.width = '0px'
        playPause.style.display = 'none'
        svgPause.style.display = 'none'
      }, 310);
    } else {
      videos[test].play()
      spanValue = 0
      playPause.style.display = 'flex'
      svgPlay.style.display = 'flex'
      playPause.style.opacity = '1'
      setTimeout(() => {
        playPause.style.height = '60px'
        playPause.style.width = '60px'
      }, 10);
      setTimeout(() => {
        playPause.style.opacity = '0'
      }, 300);
      setTimeout(() => {
        playPause.style.height = '0px'
        playPause.style.width = '0px'
        playPause.style.display = 'none'
        svgPlay.style.display = 'none'
      }, 310);
    }
  }}
