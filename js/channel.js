const headder = document.querySelector('.headder')
const banner = document.querySelector('.banner')
const landing = document.querySelector('.landing')
const controlls = document.querySelector('.controlls')
const taps = document.querySelectorAll('.controlls > div')
const channelImg = document.querySelector('.channel-section .c-img img')
const channelInfo = document.querySelector('.channel-section .c-info')
const channelName = document.querySelector(".controlls-section .channel-section .channel-info .c-name > h1")
const channelUser = document.querySelector(".controlls-section .channel-section .channel-info .c-info #user")
const channelSubs = document.querySelector(".controlls-section .channel-section .channel-info .c-info #subs")
const channelvids = document.querySelector(".controlls-section .channel-section .channel-info .c-info #vids")
const menues = document.querySelector(".menues")
const home = document.querySelector(".menues >.home")
const videos = document.querySelector(".menues >.videos")
const shorts = document.querySelector(".menues >.shorts")
const playlist = document.querySelector(".menues >.playlist")
const forYou = document.querySelector(".menues > .home .for-you")
const randomVids = document.querySelector(".menues  .home .random-videos")
const popularVids = document.querySelector(".menues  .home .popular-videos")
const subChannels = document.querySelector(".menues  .home .sub-channels")
const cShorts = document.querySelector(".menues  .home .shorts")
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlUser = urlParams.get('user');

let cUser = searchInArray(channelsArray,urlUser)




window.addEventListener('load', (e) => {
  document.body.classList.add('channel')
  channelImg.src = cUser.image
  channelName.innerHTML = cUser.name
  channelUser.innerHTML = cUser.user
  channelSubs.innerHTML = cUser.subscribers
  channelvids.innerHTML = cUser.totalVideos
  appendVideos(videosArray,forYou.querySelector('.items'),'channel.user','==',cUser.user)
  appendVideos(videosArray,forYou.querySelector('.items'),'channel.user','==',cUser.user)
  appendVideos(videosArray,forYou.querySelector('.items'),'channel.user','==',cUser.user)
  appendVideos(videosArray,forYou.querySelector('.items'),'channel.user','==',cUser.user)
  appendVideos(videosArray,videos.querySelector('.videos-container'),'channel.user','==',cUser.user)
  applyHScroll(forYou)
  appendVideos(videosArray,randomVids.querySelector('.items'),'channel.user','==',cUser.user)
  applyHScroll(randomVids)
  appendVideos(videosArray,popularVids.querySelector('.items'),'channel.user','==',cUser.user)
  applyHScroll(popularVids)
  applyHScroll(subChannels)
  applyHScroll(cShorts)
  taps.forEach(tap => {
    let link = tap.querySelector('a')
    link.href = window.location.pathname + `?user=${urlUser}&tap=${tap.id}`
    link.addEventListener('click',(e)=> {
      e.preventDefault()
      let index = location.pathname.indexOf('/channel.html')
      let url = location.pathname.slice(0,index)
      window.history.pushState({}, '', `${url}/channel.html?user=${urlUser}&tap=${tap.id}`);
      checkTap()
      // tap.addEventListener('click',(e)=> {
      //   taps.forEach(tap => {
      //     tap.classList.remove('active')
      //   })
      //   tap.classList.add('active')
      // })
    })
  });
  checkTap(e)
  let divs = menues.querySelectorAll(`.menues > div`)
  setTimeout(() => {
      divs.forEach(div => {
        div.style.transition = `0.3s`
      });
      document.body.classList.remove('waiting')
  }, 100);
})
function checkTap(e) {
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
    divs.forEach(div => {
      div.style.transform = `translateX(${100 * -g}%)`
    });
    taps.forEach(tap => {
      tap.classList.remove('active')
    })
    taps[g].classList.add('active')
  } else {
    taps[0].classList.add('active')
  }
}
let headderB = headder.getBoundingClientRect()
let cInfoB = channelInfo.getBoundingClientRect()
window.addEventListener('resize', (e) => {
  headderB = headder.getBoundingClientRect()
})

window.addEventListener('scroll', (e)=> {
  scrollingAnim(e)
})
window.addEventListener('load', (e)=> {
  scrollingAnim(e)
})
window.addEventListener('resize', (e)=> {
  scrollingAnim(e)
})

function scrollingAnim(e) {
  let v = Math.min(Math.max(scrollY / headderB.height,0),1)
  channelImg.style.height = 160 -  v * 60 + 'px'
  channelImg.style.width = 160 -  v * 60 + 'px'
  channelInfo.style.height = cInfoB.height -  v * cInfoB.height + 'px'
  channelInfo.style.opacity = 1 - v

}

window.addEventListener('popstate', function(event) {
  checkTap()
});
