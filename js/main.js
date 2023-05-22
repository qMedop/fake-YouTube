let searchInput = document.getElementById("input-search")
let searchdiv = document.querySelector(".search")
let NotfiacationActive = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96	c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z" class="style-scope yt-icon"></path></g></svg>'
let Notfiacationidle = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></g></svg>'

let Home = document.querySelector('nav .first .logo')
let HomeBar = document.querySelector('.right-nav-mobile .left .home')
Home.addEventListener('click' , () => {
  location.replace('index.html')
})
HomeBar.addEventListener('click' , () => {
  location.replace('index.html')
})

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
    SettingsPcOpen()
})
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

accContainer.addEventListener('click', (e) => {
  if(e.target === accContainer) {
    SettingsPcClose()
    console.log('object');
  }
})
function SettingsPcClose(e) {
    if (window.innerWidth > 520 ) {
      accContainer.style.opacity = '0'
      accPic.style.border = '0px solid #3ea6ff'
      accSettings.style.right = '0px'
      document.body.style.overflow = 'auto'
      setTimeout(() => {
        accContainer.style.display = 'none'
      }, 300);
      SettingsPcValue == 0
    }
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
}
function SettingsClose() {
  if (window.innerWidth <= 520) {
    accContainer.style.opacity = '0'
    accPic.style.border = '0px solid #3ea6ff'
    accSettings.style.top = '100%'
    setTimeout(() => {
      accContainer.style.display = 'none'
    }, 300);
  }
}
let OpenNotifications = document.querySelector('nav .third .notifications')
let NotificationsSection = document.querySelector('.open-notifications ')
let notificationsContainer = document.querySelector('.notfications-container')
OpenNotifications.addEventListener('click', () => {
  NotficitionOpen()
})

function NotficitionOpen() {
  if (window.innerWidth > 680) {
    NotificationsSection.style.display = 'flex'
    notificationsContainer.style.display = 'flex'
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
    notificationsContainer.style.display = 'flex'
    setTimeout(() => {
      NotificationsSection.style.top = '54px'
      NotificationsSection.style.opacity = '1'
    }, 10);
    landing.style.overflow = 'hidden'
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
    notificationsContainer.style.display = 'none'
    }, 100);
    landing.style.overflow = 'auto'
  }
  if (window.innerWidth > 680) {
    NotificationsSection.style.right = '-490px'
    NotificationsSection.style.opacity = '0'
    OpenNotifications.innerHTML = Notfiacationidle
    setTimeout(() => {
      NotificationsSection.style.display = 'none'
      notificationsContainer.style.display = 'none'
    }, 300);
  }
}
notificationsContainer.addEventListener('click', (e) => {
  if(e.target === notificationsContainer) {
    NotficitionClose() 
  }
})
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
      MobileSearchContainer.style.display = 'flex'
      setTimeout(() => {
        MobileSearchBar.style.top = '0'
        MobileSearchInput.focus()
      }, 10);
    if (window.innerWidth <= 520) {
      MobileSearchContainer.style.display = 'flex'
      setTimeout(() => {
        MobileSearchBar.style.top = '0'
        MobileSearchInput.focus()
      }, 10);
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

let SearchIcon = document.querySelector('.m-search .search-input .search-icon')

SearchIcon.addEventListener('click' , () => {
    search()
})


function search() {
  if(MobileSearchInput.value.length == 0) {
    console.log('Noob');
  } else if (MobileSearchInput.value.length >= 1) {
    location.replace('search.html')
  }
}

let SearchPcInput = document.querySelector('.second .search input')

MobileSearchIcon.addEventListener('click' , () => {
  searchPc()
})

SearchPcInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      if(SearchPcInput.value.length == 0) {
        SearchPcInput.focus()
        console.log('Noob');
      } else if (SearchPcInput.value.length >= 1) {
        location.replace('search.html')
      }
  }
})

function searchPc() {
if(SearchPcInput.value.length == 0) {
  SearchPcInput.focus()
  console.log('Noob');
} else if (SearchPcInput.value.length >= 1) {
  location.replace('search.html')
}
}

let  HomePc = document.querySelectorAll('.left .home')
let  ShortsPc = document.querySelectorAll('.left .shorts')
let  SubsPc = document.querySelectorAll('.left .subs')
let  libraryPc = document.querySelectorAll('.left .library')
let  downloadsPc = document.querySelectorAll('.left .downloads')

HomePc[0].addEventListener('click' , () => {
  if (HomePc[0].getAttribute('id') == 'active') {
  } else {
    window.location.assign('index.html')
  }
})
ShortsPc[0].addEventListener('click' , () => {
  if (ShortsPc[0].getAttribute('id') == 'active') {
  } else {
    window.location.assign('shorts.html')
  }
})
SubsPc[0].addEventListener('click' , () => {
  if (SubsPc[0].getAttribute('id') == 'active') {
  } else {
    window.location.assign('subscriptions.html')
  }
})
libraryPc[0].addEventListener('click' , () => {
  if (libraryPc[0].getAttribute('id') == 'active') {
  } else {
    window.location.assign('library.html')
  }
})
downloadsPc[0].addEventListener('click' , () => {
  if (downloadsPc[0].getAttribute('id') == 'active') {
  } else {
    window.location.assign('downloads.html')
  }
})

HomePc[1].addEventListener('click' , () => {
  if (HomePc[1].getAttribute('id') == 'active') {
  } else {
    window.location.assign('index.html')
  }
})
ShortsPc[1].addEventListener('click' , () => {
  if (ShortsPc[1].getAttribute('id') == 'active') {
  } else {
    window.location.assign('shorts.html')
  }
})
SubsPc[1].addEventListener('click' , () => {
  if (SubsPc[1].getAttribute('id') == 'active') {
  } else {
    window.location.assign('subscriptions.html')
  }
})
libraryPc[1].addEventListener('click' , () => {
  if (libraryPc[1].getAttribute('id') == 'active') {
  } else {
    window.location.assign('library.html')
  }
})
downloadsPc[1].addEventListener('click' , () => {
  if (downloadsPc[1].getAttribute('id') == 'active') {
  } else {
    window.location.assign('downloads.html')
  }
})

HomePc[2].addEventListener('click' , () => {
  if (HomePc[2].getAttribute('id') == 'active') {
  } else {
    window.location.assign('index.html')
  }
})
ShortsPc[2].addEventListener('click' , () => {
  if (ShortsPc[2].getAttribute('id') == 'active') {
  } else {
    window.location.assign('shorts.html')
  }
})
SubsPc[2].addEventListener('click' , () => {
  if (SubsPc[2].getAttribute('id') == 'active') {
  } else {
    window.location.assign('subscriptions.html')
  }
})
libraryPc[2].addEventListener('click' , () => {
  if (libraryPc[2].getAttribute('id') == 'active') {
  } else {
    window.location.assign('library.html')
  }
})
downloadsPc[2].addEventListener('click' , () => {
  if (downloadsPc[2].getAttribute('id') == 'active') {
  } else {
    window.location.assign('downloads.html')
  }
})


