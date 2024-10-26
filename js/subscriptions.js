let subVideosArr = []
let subVideos 
let subVideosContainer = document.querySelector('#subVideosContainer')
document.addEventListener('dataFetched', function(event) {
  getSubVideosData()
  .then(() => {
    console.log(subVideosArr);
    getMultipleData('videos',subVideosArr)
    .then(data => {
      subVideos = data
      appendVideos(subVideosContainer,sortDate(subVideos))
    })
  })
});
function getSubVideosData() {
  return new Promise((resolve, reject) => {
    let successfulAppends = 0
    user.subscridedTo.forEach(channel => {
      getCertainDataById('channels',channel.id)
      .then(data => {
        data.videos.forEach(video => {
          subVideosArr.push(video)
        });
        successfulAppends++;
        if (successfulAppends === user.subscridedTo.length) {
          resolve();
        }
      })
    });
  })
}