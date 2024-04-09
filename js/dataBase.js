let videosArray = []
let shortsArray = []
let channelsArray = []
const guest = {
  user: 'guest',
  name: 'guest',
  Password: '',
  image: 'imgs/user.jpg',
  createDate: Date.now(),
  banner: '',
  totalViews: 0,
  totalLikes: 0,
  totalVideos: 0,
  subscribers: 0,
  videos: [],
  shorts:[]
}
channelsArray.push(guest)
if (!window.localStorage.getItem("videos")) {
  uploadToLocalStorage('videos',videosArray)
}
if (!window.localStorage.getItem("channels")) {
  uploadToLocalStorage('channels',channelsArray)
}
if (!window.localStorage.getItem("shorts")) {
  uploadToLocalStorage('shorts',shortsArray)
} 
if (!window.localStorage.getItem('activeUser')) {
  window.localStorage.setItem('activeUser','guest');
}
function downloadFromLocalStorage() {
  videosArray = JSON.parse(window.localStorage.getItem("videos"));
  channelsArray = JSON.parse(window.localStorage.getItem("channels"));
  shortsArray = JSON.parse(window.localStorage.getItem("shorts"));
}
downloadFromLocalStorage() 
let user = searchInArray(channelsArray,window.localStorage.getItem('activeUser'))
let userI =  returnindex(channelsArray,user.user)
function searchInArray(arr,value) { 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].user == value) {
      return arr[i]
      break;
    }
  }
}
function returnindex(arr,value) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].user == value) {
      return i
      break;
    }
  }
}
function uploadToLocalStorage(data,array) {
  window.localStorage.setItem(data, JSON.stringify(array));
}
