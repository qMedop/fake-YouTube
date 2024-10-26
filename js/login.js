
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
    console.log(dataFetched);
    if(dataFetched) {
      addChannel(cUser) 
    } else {
      document.addEventListener('dataFetched', function(event) {
        addChannel(cUser) 
      });
    }
    function addChannel(user) {
      checkUserAvailabilityAndGetLength(user).then(result => {
        console.log(result.userAvailable, result.id); 
        if(result.userAvailable) {
          const channel = channelObject(true,true,result.id,cUser,cName,cPassword,cImg,'',true,)
          addData('channels',channel.id,channel)
          window.localStorage.setItem("activeUser", result.id);
          // window.location.href = 'home.html'
        } else {

        }
      }).catch(error => {
        console.error(error);
      });
    }
  }
})
function checkUserAvailabilityAndGetLength(user) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["channels"], "readonly");
    const objectStore = transaction.objectStore("channels");

    const request = objectStore.openCursor();
    let userAvailable = true;
    let id = 0;
    let userChecking = user.toLowerCase(); // Corrected to toLowerCase()

    request.onsuccess = function(event) {
      const cursor = event.target.result;
      if (cursor) {
        id++;
        const channel = cursor.value;
        if (channel.user.toLowerCase() === userChecking) { // Corrected to toLowerCase()
          userAvailable = false;
        }
        cursor.continue();
      } else {
        resolve({ userAvailable, id }); // Resolve with an object
      }
    };

    request.onerror = function(event) {
      reject("Cursor error: " + event.target.error); // Reject with an error message
    };
  });
}

