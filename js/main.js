let searchInput = document.getElementById("input-search")
let searchdiv = document.querySelector(".search")
let NotfiacationActive = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96	c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z" class="style-scope yt-icon"></path></g></svg>'
let Notfiacationidle = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></g></svg>'
let NotificationsValue = 0

function refresh() {
  if (window.innerWidth == 520 || window.innerWidth == 680) {
    location.reload();
  }
}

window.onresize = refresh

searchInput.onfocus = function () {
  searchdiv.style.border = "1px solid #1c62b9"
}
searchInput.addEventListener('focusout', () => {
  searchdiv.style.border = "1px solid #272727"
})

let sugg = document.querySelector(".sugg")
let previous = document.querySelector(".back")
let next = document.querySelector(".next")
let test = 0


next.addEventListener('click', () => {
  sugg.scrollBy(
    {
      left: 2000,
      behavior: "smooth"
    }
  )
  previous.style.display = 'flex'
  next.style.display = 'none'
  if (window.innerWidth <= 520) {
    previous.style.display = 'none'
    next.style.display = 'none'
  }
})
previous.addEventListener('click', () => {
  sugg.scrollBy(
    {
      left: -2000,
      behavior: "smooth"
    }
  )
  previous.style.display = 'none'
  next.style.display = 'flex'
  if (window.innerWidth <= 520) {
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
  if (window.innerWidth > 520) {
    accPic.style.border = '1px solid #3ea6ff'
  }
})
accPic.addEventListener('mouseleave', () => {
  if (window.innerWidth > 520) {
    accPic.style.border = '0px solid #3ea6ff'
  }
})

accPic.addEventListener('click', () => {
  if(NotificationsValue == 0) {
    SettingsPcOpen()
  } else if (NotificationsValue == 1) {
    NotficitionClose()
    SettingsPcOpen()
    NotificationsValue = 0
  }})
function SettingsPcOpen() {
  if (window.innerWidth > 520) {
    accContainer.style.display = 'block'
    accPic.style.border = '1px solid #3ea6ff'
    accSettings.style.top = '10px'
    setTimeout(() => {
      accContainer.style.opacity = '1'
      accSettings.style.right = '80px'
    }, 100);
    document.body.style.overflow = 'hidden'
  }
}
let SettingsPcValue = 0
accSettings.onclick = function () {
  SettingsPcValue = 1
}
accContainer.addEventListener('click', () => {
  SettingsPcClose()
})
function SettingsPcClose() {
  setTimeout(() => {
    if (window.innerWidth > 520 && SettingsPcValue == 0) {
      accContainer.style.opacity = '0'
      accPic.style.border = '0px solid #3ea6ff'
      accSettings.style.right = '0px'
      document.body.style.overflow = 'auto'
      setTimeout(() => {
        accContainer.style.display = 'none'
      }, 300);
    }
  }, 10);
  setTimeout(() => {
    SettingsPcValue = 0
  }, 20);
}
accPic.addEventListener('click', () => {
  SettingsOpen()
})
closeSettings.addEventListener('click', () => {
  SettingsClose()
})
function SettingsOpen() {
  if (window.innerWidth <= 520) {
    accSettings.style.top = '100%'
    accContainer.style.display = 'block'
    accPic.style.border = '1px solid #3ea6ff'
    setTimeout(() => {
      accContainer.style.opacity = '1'
      accSettings.style.top = '0'
    }, 10);
  }
  document.body.style.overflow = 'hidden'
}
function SettingsClose() {
  if (window.innerWidth <= 520) {
    accContainer.style.opacity = '0'
    accPic.style.border = '0px solid #3ea6ff'
    accSettings.style.top = '100%'
    setTimeout(() => {
      accContainer.style.display = 'none'
    }, 300);
    document.body.style.overflow = 'auto'
  }
}
let OpenNotifications = document.querySelector('nav .third .notifications')
let NotificationsSection = document.querySelector('.open-notifications ')

OpenNotifications.addEventListener('click', () => {
  if(NotificationsValue == 0) {
  NotficitionOpen()
  NotificationsValue = 1
  } else if(NotificationsValue == 1) {
  NotficitionClose() 
  NotificationsValue = 0
  }

})

function NotficitionOpen() {
  if (window.innerWidth > 680) {
    NotificationsSection.style.display = 'flex'
    setTimeout(() => {
    NotificationsSection.style.right = '125px'
    NotificationsSection.style.display = 'flex'
    NotificationsSection.style.opacity = '1'
    OpenNotifications.innerHTML = NotfiacationActive
    }, 10);
  }  else if (window.innerWidth < 680) {
    NotificationsSection.style.right = '0px'
    OpenNotifications.innerHTML = NotfiacationActive
    NotificationsSection.style.display = 'flex'
    setTimeout(() => {
      NotificationsSection.style.top = '54px'
      NotificationsSection.style.opacity = '1'
    }, 10);
    document.body.style.overflow = 'hidden'
  }

}

function NotficitionClose() {
  if (window.innerWidth < 680) {
    OpenNotifications.innerHTML = Notfiacationidle
    NotificationsSection.style.top = '1000px'
    NotificationsSection.style.right = '0'
    NotificationsSection.style.opacity = '0'
    NotificationsSection.style.right = '0'
    setTimeout(() => {
    NotificationsSection.style.display = 'none'
    }, 100);
    document.body.style.overflow = 'auto'
  }
  if (window.innerWidth > 680) {
    NotificationsSection.style.right = '-490px'
    NotificationsSection.style.opacity = '0'
    OpenNotifications.innerHTML = Notfiacationidle
    setTimeout(() => {
      NotificationsSection.style.display = 'none'
    }, 300);
  }
}

let MobileSearchContainer = document.querySelector('.m-search-container')
let MobileSearchIcon = document.getElementById('Search')
let MobileSearchBar = document.querySelector('.m-search')
let MobileSearchBack = document.querySelector('.m-search .m-back')
let MobileSearchInput = document.querySelector('.m-search .search-input input')

let MobileSearchContainerValue = 0

MobileSearchBar.addEventListener('click', () => {
  MobileSearchContainerValue = 1
})
MobileSearchIcon.addEventListener('click', () => {
  if (window.innerWidth <= 520) {
    if(NotificationsValue == 0) {
      MobileSearchContainer.style.display = 'flex'
      setTimeout(() => {
        MobileSearchBar.style.top = '0'
        MobileSearchInput.focus()
      }, 10);
    } else if (NotificationsValue = 1) {
    NotficitionClose()
    NotificationsValue = 0
    if (window.innerWidth <= 520) {
      MobileSearchContainer.style.display = 'flex'
      setTimeout(() => {
        MobileSearchBar.style.top = '0'
        MobileSearchInput.focus()
      }, 10);
    }
  }
  } 
})
MobileSearchBack.addEventListener('click', () => {
  MobileSearchBar.style.top = '-54px'
  setTimeout(() => {
    MobileSearchContainer.style.display = 'none'
  }, 100);
})
MobileSearchContainer.addEventListener('click', () => {
  if (MobileSearchContainerValue == 0) {
    MobileSearchBar.style.top = '-54px'
    setTimeout(() => {
      MobileSearchContainer.style.display = 'none'
    }, 100);
  }
  MobileSearchContainerValue = 0
})

let optionOpen = document.querySelector('.Options')
let RightNav = document.querySelector('.right-nav-open')
let landing = document.querySelector('.landing')
let optionClose = document.querySelector('.right-nav-open .Options')


optionOpen.addEventListener('click', () => {
  RightNav.style.left = '0px'
})
optionClose.addEventListener('click', () => {
  RightNav.style.left = '-240px'
})
