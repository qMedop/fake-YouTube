let videosArray = []
let shortsArray = []
let channelsArray 
let playListsArray = []
let user
let userI
let dataFetched = false
const dataFetchedEvent = new CustomEvent('dataFetched');
function channelObject(userAccess,userEdit,id,user,name,password,image,description,visibility) {
  const channel = {
    dataType: 'channel',
    userAccess: userAccess,
    userEdit: userEdit,
    id: id,
    user: user,
    name: name,
    Password: password,
    image: image,
    description : description,
    date: Date.now(),
    banner: '',
    visibility: visibility,
    subscribers: [],
    subscribersCount: 0,
    subscridedTo: [],
    videos: [],
    shorts:[],
    playlist: [playlistObject(true,false,'WL','Watch Later','','popular',id,false),
              playlistObject(false,false,'LV','Liked Videos','','popular',id,false),
              playlistObject(false,false,'H','History','','popular',id,false)]
  };
  return channel
}
function videoObject(userAccess,userEdit,id,name,src,description,duration,thumbnail,owner,visibility) {
  const video = {
    dataType: 'video',
    userAccess: userAccess,
    userEdit: userEdit,
    id: id,
    date: Date.now(),
    src: src,
    duration: duration,
    thumbnail: thumbnail,
    name: name,
    descripion: description,
    channel: owner,
    visibility: visibility,
    likesCount:0,
    disLikesCount:0,
    views: [],
    likes: [],
    disLikes: [],
    Watched: [],
    comments: [],
    timeWatched: 0,
  };
  return video
}
function shortObject(userAccess,userEdit,id,name,src,description,duration,thumbnail,owner,visibility) {
  const short = {
    dataType: 'short',
    userAccess: userAccess,
    userEdit: userEdit,
    id: id,
    name: name,
    src: src,
    descripion: description,
    duration: duration,
    date: Date.now(),
    thumbnail: thumbnail,
    channel: owner,
    likesCount:0,
    disLikesCount:0,
    views: [],
    likes: [],
    dislike: [],
    Watched: [],
    comments: [],
    visibility: visibility,
  };
  return short
}
function playlistObject(userAccess,userEdit,id,name,description,sort,owner,visibility) {
  const list = {
    dataType: 'playlist',
    userAccess: userAccess,
    userEdit: userEdit,
    id: id,
    name: name,
    date: Date.now(),
    description : description,
    channel: owner,
    sortType:sort,
    visibility: visibility,
    videos: [],
  };
  return list
}
const guest = channelObject(true,true,0,'guest','guest','','imgs/user.jpg','Default User',true)
if (!window.localStorage.getItem('activeUser')) {
  window.localStorage.setItem('activeUser','0');
}
if(!window.localStorage.getItem('ambientMode')) {
  window.localStorage.setItem('ambientMode', 'false')
}
if(!window.localStorage.getItem('videosTimeLine')) {
  window.localStorage.setItem('videosTimeLine', JSON.stringify([]))
}

let indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

const dbName = "DataBase";
const dbVersion = 1;
let db;

const request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function(event) {
  const db = event.target.result;

  // Create "channels" object store
  if (!db.objectStoreNames.contains("channels")) {
    const channelStore = db.createObjectStore("channels", { keyPath: "id" });
  }

  // Create "videos" object store
  if (!db.objectStoreNames.contains("videos")) {
    console.log('object');
    const videoStore = db.createObjectStore("videos", { keyPath: "id" });
  }

  // Create "playlists" object store
  if (!db.objectStoreNames.contains("playlists")) {
    const playlistStore = db.createObjectStore("playlists", { keyPath: "id" });
  }
};

request.onerror = function(event) {
  console.error("Error opening database: " + event.target.errorCode);
};

request.onsuccess = function(event) {
  db = event.target.result;
  getAllData();
  addData('channels',guest.id,guest);
};


function getSpecifiedData(storeName, key, value) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readonly");
    const objectStore = transaction.objectStore(storeName);
    let request;

    // Use get method if the key is the primary key
    if (objectStore.keyPath === key) {
      request = objectStore.get(+value);
    } else {
      // Use index if it exists
      if (objectStore.indexNames.contains(key)) {
        const index = objectStore.index(key);
        request = index.get(+value);
      } else {
        return reject(new Error(`Index '${key}' not found in object store '${storeName}'`));
      }
    }

    request.onsuccess = function(event) {
      const result = event.target.result;
      if (result) {
        resolve(result); // Resolve with the result if found
      } else {
        console.log(`${value} not found in ${storeName}`);
        resolve(null); // Resolve with null if not found
      }
    };

    request.onerror = function(event) {
      console.error(`Error retrieving ${value} from ${storeName}: ` + event.target.errorCode);
      reject(event.target.errorCode); // Reject the promise if an error occurs
    };
  });
}
function addValueToDataBase(storeName,object,key, arrayName, value) {
    return new Promise((resolve, reject) => {
      if (!object || !Array.isArray(object[arrayName])) {
        reject('Invalid object or array name');
        return;
      }
  
      // Add the value to the specified array
      object[arrayName].push(value);
  
      // Update only the specified array in the database
      const transaction = db.transaction([storeName], "readwrite");
      const channelStore = transaction.objectStore(storeName);
  
      const getRequest = channelStore.get(key);
      getRequest.onsuccess = function(event) {
        const existingChannel = event.target.result;
        if (existingChannel) {
          // Update only the specified array in the existing object
          existingChannel[arrayName] = object[arrayName];
  
          // Update the object in the database with the modified array
          const updateRequest = channelStore.put(existingChannel);
          updateRequest.onsuccess = function(event) {
            resolve(object);
          };
          updateRequest.onerror = function(event) {
            reject('Error updating object in the database');
          };
        } else {
          reject('Object not found in the database');
        }
      };
      getRequest.onerror = function(event) {
        reject('Error getting object from the database');
      };
    });
}
// Function to fetch multiple videos from the database based on an array of video IDs


// Function to retrieve all data from the database and parse it into an array
function getAllData() {
  getSpecifiedData('channels', 'id', window.localStorage.getItem('activeUser')).then(userData => {
    if (userData) {
      user = userData
      document.dispatchEvent(dataFetchedEvent);
      dataFetched = true
    } else {
      window.localStorage.setItem('activeUser','0')
      user = userData
      document.dispatchEvent(dataFetchedEvent);
      dataFetched = true
    }
  }).catch(error => {
    console.error('Error:', error);
  });
}
function addValueToDatabase(storeName, key, object, arrayName, newArray,nestedId,nestedArrayName) {
  return new Promise((resolve, reject) => {
    if (!object || !Array.isArray(newArray)) {
      reject('Invalid object or array');
      return;
    }

    const transaction = db.transaction([storeName], 'readwrite');
    const objectStore = transaction.objectStore(storeName);
    const getRequest = objectStore.get(key);
    getRequest.onsuccess = function(event) {
      const existingObject = event.target.result;
      if (existingObject) {
        console.log(existingObject);
        if(nestedId) {
          let arrayindex = existingObject[arrayName].findIndex(item => item.id === nestedId)
          existingObject[arrayName][arrayindex][nestedArrayName] = newArray
        } else {
          existingObject[arrayName] = newArray;
        }

        const updateRequest = objectStore.put(existingObject);
        updateRequest.onsuccess = function(event) {
          resolve(existingObject);
        };
        updateRequest.onerror = function(event) {
          reject('Error updating object in the database');
        };
      } else {
        reject('Object not found in the database');
      }
    };

    getRequest.onerror = function(event) {
      reject('Error getting object from the database');
    };
  });
}
function searchInArray(arr,value) { 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i].user == value) {
      return arr[i]
      break;
    }
  }
}
function searchInArrayValue(arr,prop,value) { 
  for(let i = 0; i < arr.length; i++) {
    if(arr[i][`${prop}`] == value) {
      return arr[i]
      break;
    }
  }
}
function returnindex(arr,prop,value) {
  if(arr) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i][`${prop}`] == value) {
        return i
        break;
      }
    }
  }
}



function randomSort(a, b) {
  return Math.random() - 0.5;
}








function getCertainDataById(storeName, objectId) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readonly");
    const objectStore = transaction.objectStore(storeName);

    // Get the object by id
    const getRequest = objectStore.get(objectId);

    getRequest.onsuccess = function(event) {
      const data = event.target.result;
      if (data) {
        resolve(data); // Resolve with the found object
      } else {
        resolve(null); // Resolve with null if the object is not found
      }
    };

    getRequest.onerror = function(event) {
      reject("Get error: " + event.target.error); // Reject with an error message
    };
  });
}
function getCertainPropertyFromObject(storeName, objectId, property) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readonly");
    const objectStore = transaction.objectStore(storeName);

    // Get the object by id
    const getRequest = objectStore.get(objectId);

    getRequest.onsuccess = function(event) {
      const data = event.target.result;
      if (data) {
        // Resolve with the value of the specified property
        resolve(data[property]);
      } else {
        resolve(null); // Resolve with null if the object is not found
      }
    };

    getRequest.onerror = function(event) {
      reject("Get error: " + event.target.error); // Reject with an error message
    };
  });
}
function getCertainDataByProperty(storeName, property, value) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readonly");
    const objectStore = transaction.objectStore(storeName);

    const request = objectStore.openCursor();
    let lowerCaseValue = value.toLowerCase(); // Convert value to lower case for case-insensitive comparison

    request.onsuccess = function(event) {
      const cursor = event.target.result;
      if (cursor) {
        const data = cursor.value;
        if (data[property] && data[property].toLowerCase() === lowerCaseValue) { // Compare property
          resolve(data); // Resolve with the found object
          return; // Exit the function
        }
        cursor.continue();
      } else {
        resolve(null); // Resolve with null if no matching object is found
      }
    };

    request.onerror = function(event) {
      reject("Cursor error: " + event.target.error); // Reject with an error message
    };
  });
}
function getMultipleData(storeName, values) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], 'readonly');
    const dataStore = transaction.objectStore(storeName);
    let data = [];
    let requests = []; // Array to store all getRequest promises
    console.log(values);
    values.forEach(dataId => {
      if (dataId.id) {
        const getRequest = dataStore.get(dataId.id);

        const getRequestPromise = new Promise((resolve, reject) => {
          getRequest.onsuccess = function(event) {
            const receivedData = event.target.result;
            if (receivedData) {
              data.push(receivedData);
            }
            resolve(); // Resolve the promise once data is processed
          };

          getRequest.onerror = function(event) {
            console.error('Error fetching data:', event.target.error);
            reject(event.target.error); // Reject the promise on error
          };
        });

        requests.push(getRequestPromise); // Add getRequest promise to the array
      }
    });

    // Wait for all getRequest promises to resolve
    Promise.all(requests).then(() => {
      setTimeout(() => {
        resolve(data);
      }, 100); // Resolve the main promise with the populated data array
    });
  });
}

function addData(storeName,key,data) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readwrite");
    const dataStore = transaction.objectStore(storeName);
    const getRequest = dataStore.get(key);

    getRequest.onsuccess = function(event) {
      const existingData = event.target.result;
      if (existingData) {
        console.log("The data already exists!");
        resolve(); 
      } else {
        const addRequest = dataStore.add(data);
        addRequest.onsuccess = function(event) {
          console.log(`New data '${key}' added successfully!`);
          resolve();
        };
        addRequest.onerror = function(event) {
          console.error("Error adding new data: " + event.target.errorCode);
          reject(event.target.errorCode);
        };
      }
    };

    getRequest.onerror = function(event) {
      console.error("Error getting data: " + event.target.errorCode);
      reject(event.target.errorCode);
    };
  });
}
function pushCertainDataToProperty(storeName, objectId, property, value) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readwrite");
    const objectStore = transaction.objectStore(storeName);

    // Get the object by id
    const getRequest = objectStore.get(objectId);

    getRequest.onsuccess = function(event) {
      const data = event.target.result;

      if (data) {
        // Check if the property exists and is an array
        if (!data[property]) {
          data[property] = [];
        } else if (!Array.isArray(data[property])) {
          return reject(`Property ${property} is not an array`);
        }

        // Push the new value to the array
        data[property].push(value);

        // Put the updated object back into the store
        const putRequest = objectStore.put(data);

        putRequest.onsuccess = function() {
          resolve(data); // Resolve with the updated object
        };

        putRequest.onerror = function(event) {
          reject("Put error: " + event.target.error);
        };
      } else {
        resolve(null); // Resolve with null if the object is not found
      }
    };

    getRequest.onerror = function(event) {
      reject("Get error: " + event.target.error);
    };
  });
}
function setCertainDataToProperty(storeName, objectId, property, value) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readwrite");
    const objectStore = transaction.objectStore(storeName);

    // Get the object by id
    const getRequest = objectStore.get(objectId);

    getRequest.onsuccess = function(event) {
      const data = event.target.result;

      if (data) {
        // Set the new value to the property
        data[property] = value;

        // Put the updated object back into the store
        const putRequest = objectStore.put(data);

        putRequest.onsuccess = function() {
          resolve(data); // Resolve with the updated object
        };

        putRequest.onerror = function(event) {
          reject("Put error: " + event.target.error);
        };
      } else {
        resolve(null); // Resolve with null if the object is not found
      }
    };

    getRequest.onerror = function(event) {
      reject("Get error: " + event.target.error);
    };
  });
}

function deleteDataFromProperty(storeName, objectId, property, value) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readwrite");
    const objectStore = transaction.objectStore(storeName);

    // Get the object by id
    const getRequest = objectStore.get(objectId);

    getRequest.onsuccess = function(event) {
      const data = event.target.result;
      if (data) {
        // Check if the property exists and is an array
        if (Array.isArray(data[property])) {
          // Find the index of the value in the array
          const index = data[property].findIndex(item => item.id === value);
          if (index !== -1) {
            // Remove the value from the array
            data[property].splice(index, 1);

            // Put the updated object back into the store
            const putRequest = objectStore.put(data);

            putRequest.onsuccess = function() {
              resolve(true); // Resolve with true if the value is deleted
            };

            putRequest.onerror = function(event) {
              reject("Put error: " + event.target.error);
            };
          } else {
            resolve(false); // Resolve with false if the value is not found
          }
        } else {
          resolve(false); // Resolve with false if the property is not an array
        }
      } else {
        resolve(false); // Resolve with false if the object is not found
      }
    };

    getRequest.onerror = function(event) {
      reject("Get error: " + event.target.error); // Reject with an error message
    };
  });
}

function searchForDataInsideProperty(storeName, objectId, property, value) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([storeName], "readonly");
    const objectStore = transaction.objectStore(storeName);

    // Get the object by id
    const getRequest = objectStore.get(objectId);

    getRequest.onsuccess = function(event) {
      const data = event.target.result;
      if (data) {
        // Check if the property exists and is an array
        if (Array.isArray(data[property])) {
          // Search for the value inside the array of objects
          const found = data[property].some(item => item.id === value);
          resolve(found); // Resolve with true if found, false otherwise
        } else {
          resolve(false); // Resolve with false if the property is not an array
        }
      } else {
        resolve(false); // Resolve with false if the object is not found
      }
    };

    getRequest.onerror = function(event) {
      reject("Get error: " + event.target.error); // Reject with an error message
    };
  });
}

function addVideoToPlayList(listId,videoId) {
  let listVideos
  let createdValue = {}
  console.log(listId);
  if(listId == 'WL' || listId == "LV" || listId == 'H') {
    getDefaultPlayList(user.id,listId,'videos')
    .then(data => {
      listVideos = data
      createObject()
    })
  } else {
    getCertainPropertyFromObject('playlists',listId,'videos')
    .then(data => {
      listVideos = data
      createObject()
    })
  }
  function createObject() {
    let statue = true
    if(listVideos) {
      let order = 0
      listVideos.forEach(video => {
        if(video.id === +videoId) statue = false
        if(video.order >= order) {
          order = video.order + 1
        }
      });
      createdValue.id = videoId
      createdValue.order = order
      createdValue.addedDate = Date.now()
      if(statue) procces(createdValue)
      
    }
  }
  function procces(value) {
    if(listId == 'WL' || listId == "LV" || listId == 'H') {
      console.log(value);
    pushVideoToDefaultPlayList(user.id,listId,'videos',value)
    } else {
    pushCertainDataToProperty('playlists',listId,'videos',value)
    }
  }
}
function removeVideoFromPlayList(listId,videoId) {
  let listVideos
  if(listId == 'WL' || listId == "LV" || listId == 'H') {
    getDefaultPlayList(user.id,listId,'videos')
    .then(data => {
      listVideos = data
      procces()
    })
  } else {
    getCertainPropertyFromObject('playlists',listId,'videos')
    .then(data => {
      listVideos = data
      procces()
    })
  }
  function procces() {
    let statue = false
    listVideos.forEach(video => {
      if(video.id == +videoId) statue = true 
    });
    if(statue) {
      if(listId == 'WL' || listId == "LV" || listId == 'H') {
        deleteDataFromPropertty(user.id,listId,'videos',videoId)
      } else {
      deleteDataFromProperty('playlists',listId,'videos',+videoId)
      }
    }
  }
}

function pushVideoToDefaultPlayList(objectId, listId, property, value) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('channels', "readwrite");
    const objectStore = transaction.objectStore('channels');

    // Get the object by id
    const getRequest = objectStore.get(objectId);

    getRequest.onsuccess = function(event) {
      const data = event.target.result;

      if (data) {
        let listIndex
        data.playlist.forEach((list,index) => {
          if(list.id == listId) {
            listIndex = index
          }
        });
        if (!data.playlist[listIndex][property]) {
          data.playlist[listIndex][property] = [];
        } else if (!Array.isArray(data.playlist[listIndex][property])) {
          console.log(data.playlist[listIndex][property]);
          return reject(`Property ${property} is not an array`);
        }
        console.log(data.playlist[listIndex][property]);
        data.playlist[listIndex][property].push(value);
        // Put the updated object back into the store
        const putRequest = objectStore.put(data);

        putRequest.onsuccess = function() {
          resolve(data); // Resolve with the updated object
        };

        putRequest.onerror = function(event) {
          reject("Put error: " + event.target.error);
        };
      } else {
        resolve(null); // Resolve with null if the object is not found
      }
    };

    getRequest.onerror = function(event) {
      reject("Get error: " + event.target.error);
    };
  });
}
function getDefaultPlayList(objectId, listId,property) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('channels', "readwrite");
    const objectStore = transaction.objectStore('channels');

    const getRequest = objectStore.get(objectId);

    getRequest.onsuccess = function(event) {
      const data = event.target.result;
      if (data) {
        let listIndex
        data.playlist.forEach((list,index) => {
          if(list.id == listId) {
            listIndex = index
          }
        });
        if(property) {
          resolve(data.playlist[listIndex][property])
        } else {
          resolve(data.playlist[listIndex])
        }
      } else {
        resolve(null);
      }
    };
    getRequest.onerror = function(event) {
      reject("Get error: " + event.target.error);
    };
  });
}
function deleteDataFromPropertty(objectId, listId, property, value) {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('channels', "readwrite");
    const objectStore = transaction.objectStore('channels');

    // Get the object by id
    const getRequest = objectStore.get(objectId);

    getRequest.onsuccess = function(event) {
      const data = event.target.result;
      if (data) {
        let listIndex
        data.playlist.forEach((list,index) => {
          if(list.id == listId) {
            listIndex = index
          }
        });
        // Check if the property exists and is an array
        if (Array.isArray(data.playlist[listIndex][property])) {
          // Find the index of the value in the array
          const index = data.playlist[listIndex][property].findIndex(item => item.id === value);
          console.log(index);
          if (index !== -1) {
            // Remove the value from the array
            data.playlist[listIndex][property].splice(index, 1);

            // Put the updated object back into the store
            const putRequest = objectStore.put(data);

            putRequest.onsuccess = function() {
              resolve(true); // Resolve with true if the value is deleted
            };

            putRequest.onerror = function(event) {
              reject("Put error: " + event.target.error);
            };
          } else {
            resolve(false); // Resolve with false if the value is not found
          }
        } else {
          resolve(false); // Resolve with false if the property is not an array
        }
      } else {
        resolve(false); // Resolve with false if the object is not found
      }
    };

    getRequest.onerror = function(event) {
      reject("Get error: " + event.target.error); // Reject with an error message
    };
  });
}