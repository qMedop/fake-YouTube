
let channelSection = document.querySelector('#channelSection')
let userImage = channelSection.querySelector('#userImage')
let userName = channelSection.querySelector('#userName')
let userUser = channelSection.querySelector('#userUser')
let channelLinkAll = channelSection.querySelectorAll('#channelLink')
let sections = document.querySelector('#sections')
let historySection = sections.querySelector('#historyS')
let playlistsSection = sections.querySelector('#playlistsS')
let watchLaterSection = sections.querySelector('#watchLaterS')
let LikedVideosSection = sections.querySelector('#LikedVideos')
let userHistoryVideos
let userPlayLists
let userWLVideos
let userLVVideos
console.log(LikedVideosSection);
document.addEventListener('dataFetched', function(event) {
  loadYouData()
  requestUserData()
  applyHScroll(historySection)
});
function loadYouData() {
  userImage.src = user.image
  userName.innerHTML = user.name
  userUser.innerHTML = user.user
  channelLinkAll.forEach(a => {
    a.href = `channel.html?user=${user.user}`
  });
}
function requestUserData() {
  getMultipleData('playlists',user.playlist.filter(playlist => typeof(playlist.id) !== 'string'))
  .then(data => {
    if(data.length > 0) {
      appendPlayList(playlistsSection.querySelector('.items'),data)
    } else {
      playlistsSection.style.display = 'none  '
    }
  })
  .catch(error => {
    console.error(error)
  })

  getDefaultPlayList(user.id,'WL','videos')
  .then(data => {
    return getMultipleData('videos',data)
  })
  .then(data => {
    if(data.length > 0) {
      appendVideos(watchLaterSection.querySelector('.items'),sortArray(data,'addedDate'))
    } else {
      watchLaterSection.style.display = 'none  '
    }
  })
  .catch(error => {
    console.error(error)
  })
  
  getDefaultPlayList(user.id,'LV','videos')
  .then(data => {
    return getMultipleData('videos',data)
  })
  .then(data => {
    if(data.length > 0) {
      appendVideos(LikedVideosSection.querySelector('.items'),sortArray(data,'addedDate'))
    } else {
      LikedVideosSection.style.display = 'none  '
    }
  })
  .catch(error => {
    console.error(error)
  })
}
// appendVideos(sortArray(searchInArrayValue(user.playlist,'id','H').videos,'addedDate'),historySection.querySelector('.items'))
// appendPlayList(user.playlist,playlistsSection.querySelector('.items'))
// appendVideos(searchInArrayValue(user.playlist,'id','WL').videos,watchLaterSection.querySelector('.items'))