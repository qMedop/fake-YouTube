const headder = document.querySelector('.headder')
const banner = document.querySelector('.banner')
const controlls = document.querySelector('.controlls')
const taps = document.querySelectorAll('.controlls > div')
const channelImg = document.querySelector('.channel-section .c-img img')
const channelInfo = document.querySelector('.channel-section .c-info')
const channelButton = document.querySelector('.channel-section .c-buttons')
const channelName = document.querySelector(".controlls-section .channel-section .channel-info .c-name > h1")
const channelUser = document.querySelector(".controlls-section .channel-section .channel-info .c-info #user")
const channelSubs = document.querySelector(".controlls-section .channel-section .channel-info .c-info #subs")
const channelvids = document.querySelector(".controlls-section .channel-section .channel-info .c-info #vids")
const menues = document.querySelector(".menues")
const home = document.querySelector(".menues >.home")
const videos = document.querySelector(".menues >.videos")
const vFilter = document.querySelectorAll(".menues >.videos .filter > div button")
const vFilterAll = document.querySelector(".menues >.videos .filter #vAll")
const vFilterPopular = document.querySelector(".menues >.videos .filter #vPopular")
const vFilterOldest = document.querySelector(".menues >.videos .filter #vOldest")
const sFilter = document.querySelectorAll(".menues >.shorts .filter > div button")
const sFilterAll = document.querySelector(".menues >.shorts .filter #sAll")
const sFilterPopular = document.querySelector(".menues >.shorts .filter #sPopular")
const sFilterOldest = document.querySelector(".menues >.shorts .filter #sOldest")
const shorts = document.querySelector(".menues >.shorts")
const playlist = document.querySelector(".menues >.playlist")
const forYou = document.querySelector(".menues > .home .for-you")
const randomVids = document.querySelector(".menues  .home .random-videos")
const popularVids = document.querySelector(".menues  .home .popular-videos")
const subChannels = document.querySelector(".menues  .home .sub-channels")
const cShorts = document.querySelector(".menues  .home .shorts")
const subBtn = channelButton.querySelector('.sub-buttons button')
const menuesDivs = menues.querySelectorAll(`.menues > div`)
let Owned = false
let subscrided = false
let channelVideos
let channelShorts
let cUser
let playlistData
let homeAppended = false
let videosppended = false
let shortsAppended = false
let playlistsAppended = false
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlUser = urlParams.get('user');
const urlTap = urlParams.get('tap');

const channelFetchedEvent = new CustomEvent('cahnnelFetched');


function getChannel() {
  let db
  const request = indexedDB.open(dbName, dbVersion);
  request.onsuccess = function(event) {
    db = event.target.result;
    search()
  };
  function search() {
    const transaction = db.transaction(["channels"], "readonly");
    const channelStore = transaction.objectStore("channels");
    const request2 = channelStore.openCursor();
  
    request2.onsuccess = function(event) {
        const cursor = event.target.result;
        if (cursor) {
          let t = cursor.value
          if (t.user == urlUser) {
            cUser = t
            document.dispatchEvent(channelFetchedEvent);
            return
          }
            cursor.continue();
          } else {
            console.log(`can't Find The Channel`);
        }
    };
    request2.onerror = function(event) {
        console.error("Error retrieving data: " + event.target.errorCode);
    };
  }
}
document.addEventListener('dataFetched', function(event) {
  getCertainDataByProperty('channels', 'user', urlUser).then(result => {
    if (result) {
      cUser = result
      document.dispatchEvent(channelFetchedEvent);
    } else {
      console.log('Object not found');
    }
  }).catch(error => {
    console.error(error);
  });
});
document.addEventListener('cahnnelFetched', function(event) {
  //check if this is the user channel or not
  if(cUser.id == user.id) {
    Owned = true
  } else {
    subscrided = true
    activateSub(user.id,cUser.id,subBtn)
  }
  //change the page tittle
  document.title = cUser.name + ' - ' + 'YouTube'
  //update channel indo 
  updateChannelInfo()
  //handle owned
  handleOwnedOrNot()
  if(!urlTap) {
    homeAppended = true
    appendHomePage()
  }
  //handle taps
  applyClickingOnTaps()
  //window load 
  checkTap()
  removeWaitingLoad()
  applyScrollingAnim()
});
function appendHomePage() {
  if(channelVideos) {
    appendVideosToDom()
  } else {
    getMultipleData('videos',cUser.videos).then(data => {
      channelVideos = data;
      appendVideosToDom()
    })
  }
  if(channelShorts) {
    appendShortsToDom()
  } else {
    getMultipleData('videos',cUser.shorts).then(data => {
      channelShorts = data;
      appendShortsToDom()
    })
  }
  appendChannelView(subChannels.querySelector('.items'),cUser.subscridedTo)
  .then(() => {
    applyHScroll(subChannels)
  })
  function appendVideosToDom() {
    appendVideos(forYou.querySelector('.items'),sortArray(channelVideos,'timeWatched'))
    .then(() => {
        applyHScroll(forYou)
    })

    appendVideos(randomVids.querySelector('.items'),sortDate(channelVideos))
    .then(() => {
      applyHScroll(randomVids)
    })

    appendVideos(popularVids.querySelector('.items'),sortViews(channelVideos))
    .then(() => {
      applyHScroll(popularVids)
    })
  }
  function appendShortsToDom() {
    appendShortsView(cShorts.querySelector('.items'),sortDate(channelShorts))
    .then(() => {
      applyHScroll(cShorts)
    })
  }
}
function appendTapContent(tap) {
  if(tap == 'home') {
    if(!homeAppended) {
      homeAppended = true
      appendHomePage()
    }
  }
  if(tap == 'videos') {
    if(!videosppended) {
      if(channelVideos) {
        console.log(channelVideos);
        appendVideos(videos.querySelector('.videos-container'),sortDate(channelVideos))
      } else {
        getMultipleData('videos',cUser.videos).then(data => {
          channelVideos = data;
          appendVideos(videos.querySelector('.videos-container'),sortDate(channelVideos))
        })
      }
      videosppended = true
    }
  }
  if(tap == 'shorts') {
    if(!shortsAppended) {
      if(channelShorts) {
          appendShortsView(shorts.querySelector('.shorts-container'),sortDate(channelShorts))
        } else {
          getMultipleData('videos',cUser.shorts).then(data => {
          channelShorts = data;
          appendShortsView(shorts.querySelector('.shorts-container'),sortDate(channelShorts))
        })
      }
      shortsAppended = true
    }
  }
  if(tap == 'playlist') {
    if(!playlistsAppended) {
      getMultipleData('playlists',cUser.playlist).then(data => {
        playlistData = data;
        console.log(playlistData);
        appendPlayList(playlist.querySelector('.list-container'),playlistData)
      })
      playlistsAppended = true
    }
  }
}
// const observerOption = {
//   root: menues,
//   threshold: 1,
// }
// const observer = new IntersectionObserver(observerCallBack,observerOption)

// function observerCallBack(entries,observer) {
//   entries.forEach(el => {
//     if (el.isIntersecting == true) {
//       console.log(el);
//       } else {
//       // console.log(el,'not');
//     }
//   })
// }
// menuesDivs.forEach(menu => {
//   observer.observe(menu)
// })
function applyClickingOnTaps() {
  taps.forEach(tap => {
    let link = tap.querySelector('a')
    link.href = window.location.pathname + `?user=${urlUser}&tap=${tap.id}`
    link.addEventListener('click',(e)=> {
      e.preventDefault()
      let index = location.pathname.indexOf('/channel.html')
      let url = location.pathname.slice(0,index)
      window.history.pushState({}, '', `${url}/channel.html?user=${urlUser}&tap=${tap.id}`);
      checkTap()
    })
  });
}
function checkTap() {
  let g
    const urlUser = window.location.search
    const params = urlUser.split('&');
    let tapValue = null;
    params.forEach(param => {
        if (param.indexOf('tap=') !== -1) {
            tapValue = param.split('=')[1];
        }
    });
    if(tapValue) {
    appendTapContent(tapValue);
    let divs = menues.querySelectorAll(`.menues > div`)
    function r() {
      for(let i = 0; i < divs.length; i++) {
        if(divs[i].id == tapValue) {
          return i
          break;
        }
      }
    }
    g = r()
    console.log(g);
    divs.forEach(div => {
      div.style.transform = `translateX(${100 * -g}%)`
      div.style.maxHeight = '0px'
    });
    taps.forEach(tap => {
      tap.classList.remove('active')
    })
    taps[g].classList.add('active')
    divs[g].style.maxHeight = null
    if(window.scrollY > headder.getBoundingClientRect().height + topNav.getBoundingClientRect().height) {
      window.scrollTo({
        left:0,
        top:headder.getBoundingClientRect().height + topNav.getBoundingClientRect().height + 8,
      })
    }
  } else {
    taps[0].classList.add('active')
  }
}
function applyScrollingAnim() {
  let headderB = headder.getBoundingClientRect()
  let cInfoB = channelInfo.getBoundingClientRect()
  window.addEventListener('scroll', (e)=> {
    scrollingAnim(e)
  })
  window.addEventListener('load', (e)=> {
    scrollingAnim(e)
  })
  window.addEventListener('resize', (e)=> {
    headderB = headder.getBoundingClientRect()
    scrollingAnim(e)
  })
  
  function scrollingAnim(e) {
    let v = Math.min(Math.max(scrollY / headderB.height,0),1)
    channelImg.style.height = 160 -  v * 60 + 'px'
    channelImg.style.width = 160 -  v * 60 + 'px'
    channelInfo.style.height = cInfoB.height -  v * cInfoB.height + 'px'
    channelInfo.style.opacity = 1 - v
  
  }
}
function updateChannelInfo() {
  channelImg.src = cUser.image
  channelName.innerHTML = cUser.name
  channelUser.innerHTML = cUser.user
  channelSubs.innerHTML = cUser.subscribers.length
  channelvids.innerHTML = cUser.videos.length + cUser.shorts.length
}
function handleOwnedOrNot() {
  if(Owned) {
    channelButton.querySelector('.sub-buttons').innerHTML = ''
  } else {
    channelButton.querySelector('.edit-buttons').innerHTML = ''
  }
}
window.addEventListener('popstate', function(event) {
  checkTap()
});
vFilterAll.addEventListener('click', (e)=> {
  if(!vFilterAll.classList.contains('active')) {
    let cont = videos.querySelector('.videos-container')
    cont.style.opacity = '0.4'
    let arr = sortDate(cUser.videos)
    cont.innerHTML = ''
    appendVideos(arr,cont)
    cont.style.opacity = null
    vFilter.forEach(b => {
      b.classList.remove('active')
    });
    vFilterAll.classList.add('active')
  }
})
vFilterPopular.addEventListener('click', (e)=> {
  if(!vFilterPopular.classList.contains('active')) {
    let cont = videos.querySelector('.videos-container')
    cont.style.opacity = '0.4'
    let arr = sortViews(cUser.videos)
    cont.innerHTML = ''
    appendVideos(arr,cont)
    cont.style.opacity = null
    vFilter.forEach(b => {
      b.classList.remove('active')
    });
    vFilterPopular.classList.add('active')
  }
})
vFilterOldest.addEventListener('click', (e)=> {
  if(!vFilterOldest.classList.contains('active')) {
    let cont = videos.querySelector('.videos-container')
    cont.style.opacity = '0.4'
    let arr = sortDateReverse(cUser.videos)
    cont.innerHTML = ''
    appendVideos(arr,cont)
    cont.style.opacity = null
    vFilter.forEach(b => {
      b.classList.remove('active')
    });
    vFilterOldest.classList.add('active')
  }
})
sFilterAll.addEventListener('click', (e)=> {
  if(!sFilterAll.classList.contains('active')) {
    let cont =shorts.querySelector('.shorts-container')
    cont.style.opacity = '0.4'
    let arr = sortDate(shortsArray)
    cont.innerHTML = ''
    appendShortsView(arr,cont,'channel.user','==',cUser.user)
    cont.style.opacity = null
    sFilter.forEach(b => {
      b.classList.remove('active')
    });
    sFilterAll.classList.add('active')
  }
})
sFilterPopular.addEventListener('click', (e)=> {
  if(!sFilterPopular.classList.contains('active')) {
    let cont =shorts.querySelector('.shorts-container')
    cont.style.opacity = '0.4'
    let arr = sortViews(shortsArray)
    cont.innerHTML = ''
    appendShortsView(arr,cont,'channel.user','==',cUser.user)
    cont.style.opacity = null
    sFilter.forEach(b => {
      b.classList.remove('active')
    });
    sFilterPopular.classList.add('active')
  }
})
sFilterOldest.addEventListener('click', (e)=> {
  if(!sFilterOldest.classList.contains('active')) {
    let cont =shorts.querySelector('.shorts-container')
    cont.style.opacity = '0.4'
    let arr = sortDateReverse(shortsArray)
    cont.innerHTML = ''
    appendShortsView(arr,cont,'channel.user','==',cUser.user)
    cont.style.opacity = null
    sFilter.forEach(b => {
      b.classList.remove('active')
    });
    sFilterOldest.classList.add('active')
  }
})