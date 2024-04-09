let imgsViewre = document.querySelectorAll('.login form .images-viewer > div img')
let loginForm = document.querySelector('.login form')
let cUser
let cName
let cPassword
let cImg
function getBase64(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
}

// Example usage:
const fileInput = document.querySelector('#img');
fileInput.addEventListener('change', function() {
  const file = this.files[0];
  getBase64(file, function(base64String) {
    // Now you can save the base64String to local storage
    for(let i = 0 ;i < imgsViewre.length; i++) {
      imgsViewre[i].src = base64String
      cImg = base64String
    }
  });
});

loginForm.addEventListener('submit',(e) => {
  e.preventDefault()
  cUser = loginForm.querySelector('#user').value
  cName = loginForm.querySelector('#name').value
  cPassword = loginForm.querySelector('#pass').value
  if(cUser.length >= 1 & cName.length >= 4 & cPassword >= 2) {
    const channel = {
      user: cUser,
      name: cName,
      Password: cPassword,
      image: cImg,
      createDate: Date.now(),
      banner: '',
      totalViews: 0,
      totalLikes: 0,
      totalVideos: 0,
      subscribers: 0,
      videos: [],
      shorts:[]
    };
    channelsArray.push(channel);
    window.localStorage.setItem("channels", JSON.stringify(channelsArray));
    window.localStorage.setItem("activeUser", cUser);
    window.location.href = 'home.html'
  }
})
