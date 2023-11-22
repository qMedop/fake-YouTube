const scrollBtn = document.querySelector('.mainVideo .videoControlls .controlls .scroll')

let watchVid = localStorage.getItem('videowatch').slice(5)

let videoW = JSON.parse(window.localStorage.getItem("videoA"));
let thumbnailW = JSON.parse(window.localStorage.getItem("thumbnailA"));
let headderW = JSON.parse(window.localStorage.getItem("headderA"));
let duartionW = JSON.parse(window.localStorage.getItem("duartionA"));
let descripionW = JSON.parse(window.localStorage.getItem("descripionA"));
let timeUploadedW = JSON.parse(window.localStorage.getItem("timeUploadedA"));

mainVideo.src = videoW[watchVid]
window.onload = () => {
  console.log(previewVideo);
  previewVideo.src = videoW[watchVid]
  mainImg.src = thumbnailW[watchVid]
  videoTittle.textContent = headderW[watchVid]
  buttonsBlur()
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
}

