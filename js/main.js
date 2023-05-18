let searchInput = document.getElementById("input-search")
let searchdiv = document.querySelector(".search")

searchInput.onfocus = function() {
  searchdiv.style.border = "1px solid #1c62b9"
  console.log("g");
}
searchInput.addEventListener ('focusout', () => {
  searchdiv.style.border = "1px solid #272727"
  console.log('s');
})

let sugg = document.querySelector(".sugg")
let previous = document.querySelector(".back")
let next = document.querySelector(".next")
let test = 0

setInterval(() => {
  if(window.innerWidth <= 520) {
    previous.style.display = 'none'
    next.style.display = 'none'
  }

}, 1000);

next.addEventListener('click' , () => {
  sugg.scrollBy(
    {
      left: 2000,
      behavior: "smooth"
    }
  )
  previous.style.display = 'flex'
  next.style.display = 'none'
  if(window.innerWidth <= 520) {
    previous.style.display = 'none'
    next.style.display = 'none'
  }
})
previous.addEventListener('click' , () => {
  sugg.scrollBy(
    {
      left: -2000,
      behavior: "smooth"
    }
  )
  previous.style.display = 'none'
  next.style.display = 'flex'
  if(window.innerWidth <= 520) {
    previous.style.display = 'none'
    next.style.display = 'none'
  }
})

let accPiccontainer = document.querySelector("nav .account")
let accPic = document.querySelector("nav .login img")
let accContainer = document.querySelector("nav .account ")
let accSettings = document.querySelector("nav .account .account-setting")
let closeSettings = document.querySelector(".account .account-setting .account-s .close")
let accContainerValue = 0

accPic.addEventListener('mouseenter', () => {
  if(window.innerWidth > 520) {
      accPic.style.border = '1px solid #3ea6ff'
  }
})
accPic.addEventListener('mouseleave', () => {
  if(window.innerWidth > 520) {
    accPic.style.border = '0px solid #3ea6ff'
}})

  accPic.addEventListener('click', () => {
    if(window.innerWidth > 520) {
    accContainer.style.display = 'block'
    accPic.style.border = '1px solid #3ea6ff'
    accSettings.style.top = '10px'
    setTimeout(() => {
      accContainer.style.opacity = '1'
      accSettings.style.right = '80px'
    }, 100);
  }
  })
  accContainer.addEventListener('click', () => {
    if(window.innerWidth > 520) {
    accContainer.style.opacity = '0'
    accPic.style.border = '0px solid #3ea6ff'
    accSettings.style.right = '0px'
    setTimeout(() => {
      accContainer.style.display = 'none'
    }, 300);
  }
  })

  accPic.addEventListener('click', () => {
    if(window.innerWidth <= 520) {
      accSettings.style.top = '100%'
    accContainer.style.display = 'block'
    accPic.style.border = '1px solid #3ea6ff'
    setTimeout(() => {
      accContainer.style.opacity = '1'
      accSettings.style.top = '0'
    }, 100);
  }
  })
  closeSettings.addEventListener('click', () => {
    if(window.innerWidth <= 520) {
    accContainer.style.opacity = '0'
    accPic.style.border = '0px solid #3ea6ff'
    accSettings.style.top = '100%'
    setTimeout(() => {
      accContainer.style.display = 'none'
    }, 300);
  }
  })
