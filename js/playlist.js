let allLists = document.querySelector('.all-lists')
let ListCont = document.querySelector('.list-container')
let viewListCont = document.querySelector('.view-list-container')
let listVideoContaier = viewListCont.querySelector('.list-videos-reveal .list-videos .videos-container')
let listVideoReveal = viewListCont.querySelector('.list-videos-reveal')
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const urlList = urlParams.get('list');
let viewingList = null
let viewingListOwner = null
let mainList = null
let userOwnPlaylist = false
let playlistVideos
document.addEventListener('dataFetched', function(event) {
  if(urlList) {
    allLists.remove()
    if(urlList == 'WL') {
      viewingList = searchInArrayValue(user.playlist,'id',urlList)
      console.log(user);
      console.log(searchInArrayValue(user.playlist,'id',urlList));
    } else if(urlList == 'LV') {
      viewingList = searchInArrayValue(user.playlist,'id',urlList)
    } else {
      getCertainDataById('playlists', +urlList)
      .then(data => {
        viewingList = data;
        return getCertainDataById('channels', viewingList.channel);
      })
      .then(channel => {
        viewingListOwner = channel;
        checkifOwned()
        appendViewingListData();
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  } else {
    viewListCont.remove()
    appendPlayList(user.playlist,ListCont)
  }
    removeWaitingLoad()
    
});
function checkifOwned() {
  if(user.user == viewingListOwner.user && viewingList.userEdit) {
    listVideoReveal.classList.add('owner-style')
    userOwnPlaylist = true
  }
}
function appendViewingListData() {
    let listName = viewListCont.querySelector('#ListName')
    let listOwner = viewListCont.querySelector('#listOwner')
    let listDesc = viewListCont.querySelector('#listDesc')
    let videosCount = viewListCont.querySelector('#videosCount')
    let videosViews = viewListCont.querySelector('#videosViews')
    let lastUpdated = viewListCont.querySelector('#lastUpdated')
    listName.innerHTML = viewingList.name
    listOwner.innerHTML = viewingListOwner.user
    listDesc.innerHTML = viewingList.description
    videosCount.innerHTML = viewingList.videos.length
    console.log(viewingList.videos);
    getMultipleData('videos',viewingList.videos).then(data => {
      playlistVideos = data
      console.log(playlistVideos);
      videosViews.innerHTML = calculateViews()
      appendVideos(listVideoContaier.querySelector('.items'),assignPlaylistOrderWithVideo(playlistVideos,viewingList.videos),viewingList).then(()=> {
      updateTheFirstImage()
      setOrder()
      if(userOwnPlaylist) {
        movingDivs()
      }
      })
    })
}
function updateTheFirstImage() {
  let img = [viewListCont.querySelector('.image-info-controlls .image .main-image'),
            viewListCont.querySelector('.image-shadow .img img'),
            viewListCont.querySelector('.image-shadow .bg-img img')]
  img.forEach(i => {
    i.src = listVideoContaier.querySelectorAll('.items .video')[0].querySelector('.thumbnail .img img').src
  });
}
function movingDivs(e) {
    let handles = viewListCont.querySelectorAll('.list-videos-reveal .list-videos .videos-container .video  .handle');
    console.log(handles);
    let vids = viewListCont.querySelectorAll('.list-videos-reveal .list-videos .videos-container .video');
    let movingDiv = document.createElement('div');
    let down = false;
    movingDiv.classList.add('moving');
    movingDiv.classList.add('pop-up');
    let mouseX, mouseY, div, divIndex,nextVid,prevVid;
    handles.forEach((hand, index) => {
      hand.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        down = true;
        vid = hand.closest('.video').parentNode;
        nextVid = vid.nextElementSibling
        prevVid = vid.previousElementSibling
        let videoClone = vid.cloneNode(true);
        movingDiv.appendChild(videoClone);
        videoClone.style.height = vid.clientHeight + 'px';
        videoClone.style.width = vid.clientWidth + 'px';
        videoClone.style.padding = '8px 0px';
        webPage.appendChild(movingDiv);
        vid.style.visibility = 'hidden';
        document.body.classList.add('dragging');
        movingDiv.style.top = vid.getBoundingClientRect().top + 'px';
        movingDiv.style.left = vid.getBoundingClientRect().left + 'px';
        mouseX = e.clientX - movingDiv.getBoundingClientRect().left;
        mouseY = e.clientY - movingDiv.getBoundingClientRect().top;
      });
      document.addEventListener('pointermove', (e) => {
        if (down) {
          e.preventDefault();
          movingDiv.style.top = e.clientY - mouseY + 'px';
          movingDiv.style.left = e.clientX - mouseX + 'px';
          // nextVid = vid.nextElementSibling;
          // prevVid = vid.previousElementSibling;
          if (nextVid && checkCollision(movingDiv, nextVid)) {
            swapVideos(vid, nextVid);
            nextVid = vid.nextElementSibling;
            prevVid = vid.previousElementSibling;
          }
          else if (prevVid && checkCollision(movingDiv, prevVid)) {
            swapVideos(vid, prevVid);
            nextVid = vid.nextElementSibling;
            prevVid = vid.previousElementSibling;
          }
        }
      });
      document.addEventListener('pointerup', (e) => {
        if (down) {
          e.preventDefault();
          movingDiv.innerHTML = '';
          movingDiv.remove();
          document.body.classList.remove('dragging');
          vid.style.visibility = null;
          setOrder()
          updataStorageOrder()
          updateTheFirstImage()
          down = false;
        }
      });
    });
}
function swapVideos(div1, div2) {
  const placeholder = document.createElement('div');
  div1.parentNode.insertBefore(placeholder, div1);
  div2.parentNode.insertBefore(div1, div2);

  placeholder.parentNode.insertBefore(div2, placeholder);

  placeholder.remove();
}
function checkCollision(div1, div2) {
  let rect1 = div1.getBoundingClientRect();
  let rect2 = div2.getBoundingClientRect();

  let x_overlap = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
  let y_overlap = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));
  let overlapArea = x_overlap * y_overlap;

  let halfDiv1Area = (rect1.width * rect1.height) / 2;

  return overlapArea >= halfDiv1Area;
}
function calculateViews() {
  let count = 0
  playlistVideos.forEach(video => {
    count += video.views.length
  });
  return count
}
function setOrder(e) {
  listVideoContaier.querySelectorAll('.items .video').forEach((vid,i) => {
    vid.setAttribute('data-order',i)
  });
}
function updataStorageOrder(e) {
  viewingList.videos.forEach((video) => {
    console.log(video.videoId);
    listVideoContaier.querySelectorAll('.items .video').forEach(element => {
      if(video.videoId == element.dataset.videoid) {
        video.order = +element.dataset.order
      }
    });
  });
  sortListOrderInt(viewingList.videos)
  addValueToDatabase('playlists',viewingList.id,viewingList,'videos',viewingList.videos)
}