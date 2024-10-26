const webPage = document.querySelector(".web-page");
const body = document.body;
const html = document.html;
const curretPage = body.id;
let popupDiv;
let mobile = false;
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  mobile = true;
}
// decalring some main elements of the page
let topNav;
let rightNav;
let rightNavOpen;
let uploadMenu;
let landing;
let videoEditPopup;
let accountSettingPopup;
let inputFocus = false;
//custom events
const UpdateSubsCountEvent = new CustomEvent("updateSubCount");
const playListCreatedEvent = new CustomEvent("playListCreated");
//loading the data depending on page and device
function loadData(e) {
  if (curretPage != "watch") {
    webPage.insertAdjacentHTML("afterbegin", rightNavHTML);
  }
  webPage.insertAdjacentHTML("afterbegin", topNavHTML);
  webPage.insertAdjacentHTML("beforeend", rightNavOpenHTML);
  webPage.insertAdjacentHTML("beforeend", `<div class="popup"></div>`);
  webPage.insertAdjacentHTML(
    "beforeend",
    `<div class="right-nav-movable"></div>`
  );
  webPage.insertAdjacentHTML(
    "beforeend",
    `<div class="pop-up-elements "></div>`
  );
  popupDiv = webPage.querySelector(".web-page > .popup");
  popupDiv.insertAdjacentHTML("beforeend", videoEditHTML);
  popupDiv.insertAdjacentHTML("beforeend", accountHTML(user));
  popupDiv.insertAdjacentHTML("beforeend", saveToPlayListHTML);
  popupDiv.insertAdjacentHTML("beforeend", createListHTML);
  popupDiv.insertAdjacentHTML("beforeend", uploadHTML);
  topNav = webPage.querySelector(".web-page > nav");
  rightNav = webPage.querySelector(".web-page > .right-nav");
  rightNavOpen = webPage.querySelector(".web-page > .right-nav-open-container");
  uploadMenu = popupDiv.querySelector("#uploadMenu");
  landing = webPage.querySelector(".web-page > .landing");
  videoEditPopup = popupDiv.querySelector(".popup > .options-menu");
  accountSettingPopup = popupDiv.querySelector(".popup > #accountPopup");
  inputFocus = false;
  document.querySelectorAll("#userImage").forEach((img) => {
    img.src = user.image;
  });
}

//activating the necessary function for the project
document.addEventListener("dataFetched", function (event) {
  loadData();
  let savePlContaienr = document.querySelector(".add-to-playlist");
  let createPl = savePlContaienr.querySelector(".bottom > button");
  document.getElementById("loginBtn").addEventListener("click", (e) => {
    popupMenu(e, document.getElementById("loginBtn"), accountSettingPopup);
  });
  rightNavOpenClsoe();
  handleSearch();
  handleUploadMenu();
  handleLikeDislikeObject();
  elementsInteract();
  activateContainClick();
  handlePopup();
  saveToPlayListPopup();
  CreatePlaylist();
});
//right nav open and close with mouse functionalty
function rightNavOpenClsoe() {
  let optionOpenBtn = topNav.querySelector("#optionsButton");
  let optionCloseBtn = rightNavOpen.querySelector("#optionsButton");
  let navBarBackGround = rightNavOpen.querySelector(
    ".right-nav-open-container .nav-bar-background"
  );
  let rightNavOpenI = rightNavOpen.querySelector(".right-nav-open");
  let rightNavMovable = webPage.querySelector(".right-nav-movable");

  let rightNavS = false;
  let move = false;
  let moveTimeOut;
  optionOpenBtn.addEventListener("click", NavBarOpen);
  navBarBackGround.addEventListener("click", NavBarClose);
  optionCloseBtn.addEventListener("click", NavBarClose);
  rightNavMovable.addEventListener("mousedown", (e) => {
    move = true;
    clearTimeout(moveTimeOut);
    rightNavOpenI.style.transition = 0 + "s";
    document.body.classList.add("nav-grapping");
  });
  document.addEventListener("mouseup", (e) => {
    if (move) {
      rightNavOpenI.style.transition = 0.3 + "s";
      if (move === true && e.offsetX >= rightNavOpenI.clientWidth / 2) {
        rightNavOpenI.style.left = null;
        navBarBackGround.style.opacity = null;
        NavBarOpen();
        move = false;
      } else if (move === true && e.offsetX < rightNavOpenI.clientWidth / 2) {
        navBarBackGround.style.opacity = null;
        rightNavOpenI.style.left = null;
        move = false;
        moveTimeOut = setTimeout(() => {
          document.body.classList.remove("nav-grapping");
        }, 300);
      }
    }
  });
  document.addEventListener("mousemove", (e) => {
    if (move === true) {
      rightNavOpenI.style.left =
        Math.min(e.offsetX - rightNavOpenI.clientWidth, 0) + "px";
      navBarBackGround.style.opacity = Math.min(
        e.offsetX / rightNavOpenI.clientWidth,
        1
      );
    }
  });
  function NavBarOpen() {
    if (!rightNavS) {
      rightNavOpen.style.display = "block";
      bodyPosition = window.scrollY;
      rightNavOpen.classList.add("open");
      document.body.classList.remove("nav-grapping");
      rightNavOpenS = true;
      document.body.classList.add("right-nav-true");
      optionCloseBtn.focus();
      lockBody();
      rightNavOpen.style.display = null;
    }
  }
  function NavBarClose() {
    if (rightNavOpenS == true) {
      rightNavOpen.style.display = "block";
      document.body.classList.remove("lock-scrollbar");
      rightNavOpen.classList.remove("open");
      document.body.classList.remove("right-nav-true");
      unLockBody();
      setTimeout(() => {
        rightNavOpen.style.display = null;
        rightNavOpenS = false;
      }, 300);
    }
  }
  function openCloseRightNav() {
    if (rightNavOpenS == false) {
      bodyPosition = window.scrollY;
      rightNavOpenS = true;
      if (
        document.fullscreenElement == null &&
        document.body.offsetHeight > window.innerHeight
      ) {
        document.body.style.top = `-${bodyPosition}px`;
        document.body.classList.add("lock-scrollbar");
      }
      rightNavOpen.addEventListener("click", (e) => {
        if (
          e.target.getAttribute("class") == "right-nav-open-container" ||
          e.target.getAttribute("id") == "closeRightNav"
        ) {
          rightNavOpenI.style.left = "-270px";
          rightNavOpen.style.opacity = "0";
          setTimeout(() => {
            rightNavOpenDiv.remove();
            rightNavOpenS = false;
            rightNavOpen.style.opacity = "1";
          }, 300);
        }
      });
    }
  }
}
//handle opening and closing upload menu
function handleUploadMenu(e) {
  let videoOptions = webPage.querySelectorAll(
    ".videos-container .video .info .options-container"
  );
  let uploadBtn = topNav.querySelector("nav .third #addBtn");
  let videoUploadLInk = uploadMenu.querySelector(
    ".UploadCont .createVideo #videoUploadLink"
  );
  let videoUploadNext = uploadMenu.querySelector(
    ".UploadCont .createVideo .mid button"
  );
  let uploadContHeadder = uploadMenu.querySelector(
    ".UploadCont .createVideo .headder .left p"
  );
  let UploadPreviewLink = uploadMenu.querySelector(
    ".UploadCont .createVideo .center .left a"
  );
  let pushBtn = uploadMenu.querySelector(
    ".UploadCont .createVideo .footer button"
  );
  let inputHeadder = uploadMenu.querySelector(
    ".UploadCont .createVideo .center .right .input-headder"
  );
  let inputDecription = uploadMenu.querySelector(
    ".UploadCont .createVideo .center .right .input-decription"
  );
  let titleI = uploadMenu.querySelector(
    ".UploadCont .createVideo .center .right .input #titleI"
  );
  let decriptionI = uploadMenu.querySelector(
    ".UploadCont .createVideo .center .right .input #DecriptionI"
  );
  let thumbnailI = uploadMenu.querySelector(
    ".UploadCont .createVideo .center .right .input #thumbnailI"
  );
  let titleCount = uploadMenu.querySelector(
    ".UploadCont .createVideo .center .right .input .count"
  );
  let UploadBtnMobile = uploadMenu.querySelector(".upload-btn-mobile");
  let createVideo = uploadMenu.querySelector(".UploadCont .createVideo");
  let close = uploadMenu.querySelector(".UploadCont .createVideo .closeUpload");
  let videosCont = landing.querySelector(".landing .videos-container");
  let previewVideoContainer = uploadMenu.querySelector(".mainVideo");
  let previewVideo = uploadMenu.querySelector("#mainVideo");
  let imagePreviewCont = document.querySelector(
    ".UploadCont .createVideo .center .right .thumbnail-contaienr .img-preview-container"
  );
  let previewButtons = imagePreviewCont.querySelectorAll(".preview > div");
  let userUpload = imagePreviewCont.querySelector(".preview .user-upload");
  let imgUploadInput = imagePreviewCont.querySelector(
    ".preview .user-upload input"
  );
  let previewImages = imagePreviewCont.querySelectorAll("img");
  let vidSrc;
  let previewduration;
  let videoId;
  let openS = false;
  // opening and closing the upload menu
  videoUploadLInk.value = "User/Videos/Wide Nanami Walking.mp4";
  close.addEventListener("click", closeUpload);
  function closeUpload(e) {
    setTimeout(() => {
      previewButtons.forEach((b) => {
        b.classList.remove("active");
        b.querySelector("img").removeAttribute("id", "imageSelected");
      });
      previewButtons[1].classList.add("active");
      previewButtons[1]
        .querySelector("img")
        .setAttribute("id", "imageSelected");
      userUpload.classList.remove("uploaded");
      previewImages.forEach((img) => {
        img.src = "";
      });
    }, 500);
  }
  // proccing the video
  videoUploadNext.addEventListener("click", processVideo);
  function processVideo(e) {
    if (!videoUploadLInk.value.length == 0) {
      createVideo.classList.add("loadingStart");
      vidSrc = videoUploadLInk.value;
      console.log(vidSrc);
      //creating a new video for test
      let video = document.createElement("video");
      video.src = vidSrc;
      //check if the video valid
      video.addEventListener("canplay", function () {
        //getting some initial values
        videoId = Date.now();
        previewduration = video.duration;
        // clearing the test video
        video.remove();
        //setting the preview frame
        if (video.videoWidth > video.videoHeight) {
          previewVideo.src = `${vidSrc}`;
          const videoPlayer = new customVideoPlayer(previewVideoContainer);
        } else {
          uploadIframe.src = `videoplayer.html?video=${vidSrc}&value=previewUpload&short=true`;
        }
        //setting the video link
        UploadPreviewLink.textContent = vidSrc;
        UploadPreviewLink.href = vidSrc;
        //removing the loading animation and scroll to the create video menu
        createVideo.classList.remove("loadingStart");
        createVideo.classList.add("active");
        //clearing the provided link
        videoUploadLInk.value = "";
        if (video.videoWidth > video.videoHeight) {
          proccingDefaultVideo();
        } else {
          proccingShort();
        }
      });
      // return error if the video src isn't valid
      video.addEventListener("error", function () {
        alert("The Video Link or Path is Invaild");
        createVideo.classList.remove("loadingStart");
      });
    }
  }
  function proccingDefaultVideo() {
    //capture screen shots for thumbnail
    screenFromVideo(vidSrc, previewImages[1]);
    screenFromVideo(vidSrc, previewImages[2]);
    screenFromVideo(vidSrc, previewImages[3]);
    //remove the loading animation from the taken screenshot and handle the active one from them
    vidSrc,
      previewImages[3].addEventListener("load", (e) => {
        imagePreviewCont.classList.remove("loading");
        previewButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            previewButtons.forEach((b) => {
              b.classList.remove("active");
              b.querySelector("img").removeAttribute("id", "imageSelected");
            });
            button.classList.add("active");
            button.querySelector("img").setAttribute("id", "imageSelected");
          });
        });
      });
    // handle user uploaded thumbnail
    imgUploadInput.addEventListener("change", function () {
      userUpload.classList.add("loading");
      const file = this.files[0];
      if (imgUploadInput.value) {
        getBase64(file, function (base64String) {
          previewImages[0].src = base64String;
          previewImages[0].addEventListener("load", (e) => {
            userUpload.classList.add("uploaded");
            userUpload.classList.remove("loading");
          });
        });
      } else {
        userUpload.classList.remove("loading");
      }
    });
    pushBtn.addEventListener("click", pushVideo);
  }
  function proccingShort() {
    uploadIframe.contentWindow.postMessage("short", "*");
    createVideo.classList.add("short");
    //capture screen shots for thumbnail
    screenFromVideo(vidSrc, previewImages[1]);
    pushBtn.addEventListener("click", pushShort);
  }
  //
  titleI.addEventListener("paste", (e) => {
    handlePaste(e);
  });
  titleI.addEventListener("input", checkIfTitleBig);
  titleI.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  });
  //
  let titleFc = false;
  inputHeadder.addEventListener("click", (e) => {
    if (!titleFc) {
      titleI.innerHTML = "";
      titleFc = true;
    }
    titleI.focus();
    checkIfTitleBig();
  });
  inputDecription.addEventListener("click", (e) => {
    decriptionI.focus();
  });
  //
  decriptionI.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      document.execCommand("insertHTML", false, "<br><br>");
    }
  });
  decriptionI.addEventListener("paste", (e) => {
    handlePaste(e);
  });
  // upload the video
  function pushVideo(e) {
    let selectedImage = imagePreviewCont.querySelector("#imageSelected").src;
    if (
      titleI.innerHTML.length > 0 &&
      titleI.innerHTML.length <= 100 &&
      selectedImage
    ) {
      //upload the video
      let id = Date.now();
      let video = videoObject(
        true,
        true,
        id,
        titleI.innerHTML,
        vidSrc,
        "",
        previewduration,
        selectedImage,
        user.id,
        true
      );
      addData("videos", video.id, video)
        .then(() => {
          return pushCertainDataToProperty("channels", user.id, "videos", {
            id: id,
          });
        })
        .then(() => {
          closeUpload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  function pushShort(e) {
    let selectedImage = imagePreviewCont.querySelector("#imageSelected").src;
    if (
      titleI.innerHTML.length > 0 &&
      titleI.innerHTML.length <= 100 &&
      selectedImage
    ) {
      //upload the video
      let id = Date.now();
      let short = shortObject(
        true,
        true,
        id,
        titleI.innerHTML,
        vidSrc,
        "",
        previewduration,
        selectedImage,
        user.id,
        true
      );
      addData("videos", short.id, short)
        .then(() => {
          return pushCertainDataToProperty("channels", user.id, "shorts", {
            id: id,
          });
        })
        .then(() => {
          closeUpload();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  //setting the video frame heigt
  window.addEventListener("resize", (e) => {
    if (openS) setFrameHeight();
  });
  function setFrameHeight() {
    window.addEventListener("message", function (event) {
      uploadIframe.style.height = event.data + "px";
    });
  }
  // a function to make sure that the user upload the video based on my rules
  function checkIfTitleBig() {
    if (titleI.innerHTML.length > 100 || titleI.innerHTML.length == 0) {
      inputHeadder.classList.add("error");
    } else if (titleI.innerHTML.length <= 100 && titleI.innerHTML.length >= 0) {
      inputHeadder.classList.remove("error");
    }
    titleCount.querySelector("#length").innerHTML = titleI.innerHTML.length;
    uploadContHeadder.innerHTML = titleI.innerHTML;
  }
}
function CreatePlaylist() {
  let plContaienr = document.querySelector(".create-playlist-popup");
  let plinner = plContaienr.querySelector(".inner");
  let plCloseBtn = plContaienr.querySelector(".inner .top .close button");
  let inputHeadder = plContaienr.querySelector(".inner .middle .input-headder");
  let inputHeadderInput = plContaienr.querySelector(
    ".inner .middle .input-headder #titlePlaylist"
  );
  let inputdesc = plContaienr.querySelector(".inner .middle .input-decription");
  let inputdescInput = plContaienr.querySelector(
    ".inner .middle .input-decription #DecriptionPlaylist"
  );
  let visibilityDiv = plContaienr.querySelector(
    ".inner .middle .choice .visibility-div"
  );
  let visibilityBtn = plContaienr.querySelector(
    ".inner .middle .choice .visibility"
  );
  let visibilityValue = plContaienr.querySelector(
    ".inner .middle .choice .visibility .value p"
  );
  let visibilityList = plContaienr.querySelector(
    ".inner .middle .choice .visibility .list-options"
  );
  let visibilityListOptions = plContaienr.querySelectorAll(
    ".inner .middle .choice .visibility-div .list-options button"
  );
  let sortDiv = plContaienr.querySelector(".inner .middle .choice .sort-div");
  let sortBtn = plContaienr.querySelector(".inner .middle .choice .sort");
  let sortValue = plContaienr.querySelector(
    ".inner .middle .choice .sort .value p"
  );
  let sortList = plContaienr.querySelector(
    ".inner .middle .choice .sort .list-options"
  );
  let sortListOptions = plContaienr.querySelectorAll(
    ".inner .middle .choice .sort-div .list-options button"
  );
  let createBtn = plContaienr.querySelector(".inner .bottom button");
  let titleCount = plContaienr.querySelector(".inner .middle .count");
  let sortProp;
  let visibilityProp;
  visibilityBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    visibilityDiv.classList.add("show-list");
    if (sortDiv.classList.contains("show-list")) {
      sortDiv.classList.remove("show-list");
    }
  });
  sortBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    sortDiv.classList.add("show-list");
    if (visibilityDiv.classList.contains("show-list")) {
      visibilityDiv.classList.remove("show-list");
    }
  });
  document.addEventListener("click", (e) => {
    if (
      sortDiv.classList.contains("show-list") &&
      !sortDiv.contains(e.target)
    ) {
      sortDiv.classList.remove("show-list");
    }
    if (
      visibilityDiv.classList.contains("show-list") &&
      !visibilityDiv.contains(e.target)
    ) {
      visibilityDiv.classList.remove("show-list");
      sortDiv.classList.remove("show-list");
    }
  });
  createBtn.addEventListener("click", createPlaylist);
  inputHeadder.addEventListener("click", (e) => {
    inputHeadderInput.focus();
  });
  inputdesc.addEventListener("click", (e) => {
    inputdescInput.focus();
  });
  function checkIfTitleBig(e) {
    if (
      inputHeadderInput.innerHTML.length > 100 ||
      inputHeadderInput.innerHTML.length == 0
    ) {
      inputHeadder.classList.add("error");
    } else if (
      inputHeadderInput.innerHTML.length <= 100 &&
      inputHeadderInput.innerHTML.length >= 0
    ) {
      inputHeadder.classList.remove("error");
    }
    titleCount.querySelector("#length").innerHTML =
      inputHeadderInput.innerHTML.length;
  }
  function resetValue() {
    visibilityListOptions.forEach((button) => {
      if (button.id == "selected") {
        visibilityValue.innerHTML = button.innerHTML;
        visibilityProp = button.dataset.value;
      }
    });
    sortListOptions.forEach((button) => {
      if (button.id == "selected") {
        sortValue.innerHTML = button.innerHTML;
        sortProp = button.dataset.value;
      }
    });
  }
  function choice() {
    visibilityListOptions.forEach((button) => {
      button.addEventListener("click", (e) => {
        visibilityListOptions.forEach((button) => {
          button.id = "";
        });
        button.id = "selected";
        resetValue();
        visibilityDiv.classList.remove("show-list");
      });
    });
    sortListOptions.forEach((button) => {
      button.addEventListener("click", (e) => {
        sortListOptions.forEach((button) => {
          button.id = "";
        });
        button.id = "selected";
        resetValue();
        sortDiv.classList.remove("show-list");
      });
    });
  }
  function handleInputsPasteAndInput() {
    inputHeadderInput.addEventListener("paste", (e) => {
      handlePaste(e);
    });
    inputHeadderInput.addEventListener("input", (e) => {
      checkIfTitleBig(e);
    });
    inputHeadderInput.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
      }
    });
    inputdescInput.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        e.preventDefault();
        document.execCommand("insertHTML", false, "<br><br>");
      }
    });
    inputdescInput.addEventListener("paste", (e) => {
      handlePaste(e);
    });
  }
  function createPlaylist() {
    if (
      inputHeadderInput.innerHTML.length > 0 &&
      inputHeadderInput.innerHTML.length <= 100
    ) {
      //upload the video
      let id = Date.now();
      // visibilityProp

      addData(
        "playlists",
        id,
        playlistObject(
          true,
          true,
          id,
          inputHeadderInput.innerHTML,
          "",
          sortProp,
          user.id,
          true
        )
      )
        .then(() => {
          return pushCertainDataToProperty("channels", user.id, "playlist", {
            id: id,
          });
        })
        .then(() => {
          user.playlist.push({ id: id });
          document.dispatchEvent(playListCreatedEvent);
          closePopup();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }
  handleInputsPasteAndInput();
  resetValue();
  choice();
}
function saveToPlayListPopup() {
  let savePlContaienr = document.querySelector(".add-to-playlist");
  let savePlContent = savePlContaienr.querySelector(".content");
  let close = savePlContaienr.querySelector(".top .close button");
  let videoId;
  document.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button) {
      if (button.id == "addToPlaylist") {
        videoId = +videoEditPopup.dataset.videoid;
        if (videoId) {
          showUserLists();
        }
      }
      if (button.dataset.playlistid) {
        toggleVideoToPLayList(button.dataset.playlistid, button);
      }
    }
  });
  function toggleVideoToPLayList(listId, button) {
    if (listId == "WL") {
      getDefaultPlayList(user.id, listId, "videos").then((data) => {
        toggle(listId, data, button);
      });
    } else {
      getCertainPropertyFromObject("playlists", +listId, "videos").then(
        (data) => {
          toggle(+listId, data, button);
        }
      );
    }
    function toggle(listId, array, button) {
      if (searchInArrayValue(array, "id", videoId)) {
        removeVideoFromPlayList(listId, videoId);
        button.classList.remove("checked");
      } else {
        addVideoToPlayList(listId, videoId);
        button.classList.add("checked");
      }
    }
  }
  function showUserLists() {
    savePlContent.innerHTML = "";
    const accessiblePlaylists = user.playlist.filter(
      (playlist) => playlist.userEdit !== false
    );
    getDefaultPlayList(user.id, "WL").then((data) => {
      appendListButtons(data);
      accessiblePlaylists.forEach((list) => {
        getCertainDataById("playlists", list.id).then((data) => {
          appendListButtons(data);
        });
      });
    });
  }
  function appendListButtons(playlist) {
    let div = document.createElement("div");
    div.innerHTML = playlistChoiceHTML(playlist);
    savePlContent.appendChild(div);
    let button = div.querySelector("button");
    button.dataset.playlistid = playlist.id;
    assignCheck(button, playlist.videos);
  }
  function assignCheck(button, array) {
    if (searchInArrayValue(array, "id", videoId)) {
      button.classList.add("checked");
    } else {
      button.classList.remove("checked");
    }
  }
  document.addEventListener("playListCreated", () => {
    showUserLists();
  });
}
//search
function handleSearch() {
  searchForm.addEventListener("submit", searchSubmit);
  function searchSubmit(e) {
    if (inputSearch.value.length == 0) {
      e.preventDefault();
      inputSearch.focus();
    } else {
      console.log(inputSearch.value);
    }
  }
}

function mSearchF() {
  if (window.innerWidth <= 520) {
    document.body.appendChild(mSearchDiv);
    let mSearchContiner = document.querySelector(".m-search-container");
    let closeSearchBtn = document.querySelector(".m-search-container .m-back");
    closeSearchBtn.addEventListener("click", mSearchCloseF);
    mSearchContiner.style.opacity = "1";
    mSearchForm.addEventListener("submit", searchSubmit);
    function searchSubmit(e) {
      if (mSearchInput.value.length == 0) {
        e.preventDefault();
        mSearchInput.focus();
      }
    }
    mSearchContiner.addEventListener("click", (e) => {
      if (e.target.getAttribute("class") === "m-search-container") {
        mSearchCloseF();
      }
    });
  }
}
function mSearchCloseF() {
  let mSearch = document.querySelector(".m-search-container .m-search");
  let mSearchContiner = document.querySelector(".m-search-container");
  mSearch.style.animation = "mSearchAClose .4s ease";
  mSearchContiner.style.opacity = "0";
  setTimeout(() => {
    mSearchDiv.remove();
    mSearch.style.animation = "mSearchA .3s ease";
  }, 300);
}
//append Comments
function appendComments(array, div) {
  array.forEach((comment, index) => {
    div.insertAdjacentHTML("beforeend", commentHtml(comment, index));
    const commentElement = div.lastElementChild;
    const likeButton = commentElement.querySelector("#like-comment");
    const disLikeButton = commentElement.querySelector("#dislike-comment");
    const mainComment = commentElement.querySelector(".main-comment");
    const replyBtn = commentElement.querySelector("#reply");
    const cancelReplyBtn = commentElement.querySelector("#cancelReply");
    const showHideReply = commentElement.querySelector(".show-hide-replys");
    const replyInput = commentElement.querySelector("#replyInput");
    const submitReplyBtn = commentElement.querySelector("#submitReply");
    const showReplyes = commentElement.querySelector("#showReplyes");
    const replySection = commentElement.querySelector(
      ".replys-comments-section"
    );
    if (comment.replys.length < 1) {
      showHideReply.style.display = "none";
    } else {
      showReplyes.addEventListener("click", (e) => {
        replySection.classList.toggle("active");
      });
    }
    if (returnindex(comment.likes, "user", user.user) !== undefined) {
      likeButton.classList.add("active");
    }
    if (returnindex(comment.dislikes, "user", user.user) !== undefined) {
      disLikeButton.classList.add("active");
    }
    likeButton.addEventListener("click", (e) => {
      likeComment(comment, likeButton, disLikeButton);
    });
    disLikeButton.addEventListener("click", (e) => {
      disLikeComment(comment, likeButton, disLikeButton);
    });
    replyBtn.addEventListener("click", (e) => {
      replyInput.focus();
      mainComment.classList.add("active");
    });
    cancelReplyBtn.addEventListener("click", (e) => {
      mainComment.classList.remove("active");
    });
    submitReplyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (replyInput.innerHTML.length > 0) {
        UploadReply(replyInput.innerHTML, comment);
      }
    });
    comment.replys.forEach((reply) => {
      replySection.insertAdjacentHTML("beforeend", replyCommentHtml(reply));
      const commentElement = replySection.lastElementChild;
      const likeButton = commentElement.querySelector("#like-comment");
      const disLikeButton = commentElement.querySelector("#dislike-comment");
      const mainComment = commentElement.querySelector(".reply-section");
      const replyBtn = commentElement.querySelector("#reply");
      const cancelReplyBtn = commentElement.querySelector("#cancelReply");
      const showHideReply = commentElement.querySelector(".show-hide-replys");
      const replyInput = commentElement.querySelector("#replyInput");
      const submitReplyBtn = commentElement.querySelector("#submitReply");
      const showReplyes = commentElement.querySelector("#showReplyes");
      if (returnindex(reply.likes, "user", user.user) !== undefined) {
        likeButton.classList.add("active");
      }
      if (returnindex(reply.dislikes, "user", user.user) !== undefined) {
        disLikeButton.classList.add("active");
      }
      likeButton.addEventListener("click", (e) => {
        likeComment(reply, likeButton, disLikeButton);
      });
      disLikeButton.addEventListener("click", (e) => {
        disLikeComment(reply, likeButton, disLikeButton);
      });
      replyBtn.addEventListener("click", (e) => {
        replyInput.focus();
        mainComment.classList.add("active");
      });
      cancelReplyBtn.addEventListener("click", (e) => {
        mainComment.classList.remove("active");
      });
      submitReplyBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (replyInput.innerHTML.length > 0) {
          UploadReply(replyInput.innerHTML, comment);
        }
      });
    });
  });
}
// appending videos any where in the page
function appendVideos(div, array, list) {
  return new Promise((resolve, reject) => {
    if (array) {
      let successfulAppends = 0;
      array.forEach((video, index) => {
        appendVideoToDOM(div, video, list, index)
          .then(() => {
            successfulAppends++;
            if (successfulAppends === array.length) {
              resolve();
            }
          })
          .catch((error) => reject(error));
      });
    } else {
      getLimitedVideosFromDatabase("videos", 10)
        .then((data) => {
          const promises = data.map((video) =>
            appendVideoToDOM(div, video, list)
          );
          Promise.allSettled(promises).then((results) => {
            // Check the results array for any rejections
            const failedVideos = results.filter(
              (result) => result.status === "rejected"
            );
            if (failedVideos.length === 0) {
              resolve(); // All videos were successfully appended
            } else {
              const errors = failedVideos.map((failed) => failed.reason);
              reject(errors); // At least one video failed to append
            }
          });
        })
        .catch((error) => {
          reject(error); // Reject if there's an error fetching videos from the database
        });
    }
  });
  function appendVideoToDOM(div, video, list, index) {
    return new Promise((resolve, reject) => {
      getSpecifiedData("channels", "id", video.channel)
        .then((channel) => {
          let videoDiv = document.createElement("div");
          if (list) {
            videoDiv.innerHTML = videoHTML(video, channel, list.id, index);
          } else {
            videoDiv.innerHTML = videoHTML(
              video,
              channel,
              returnTimeLineData(video)
            );
          }
          div.appendChild(videoDiv);
          let editBtn = videoDiv.querySelector("button.options");
          // editBtn.addEventListener('click', (e) => {
          //   popupMenu(e, editBtn, videoEditPopup, editBtn.dataset.videoid);
          // });
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function getLimitedVideosFromDatabase(storeName, limit) {
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([storeName], "readonly");
      const videoStore = transaction.objectStore(storeName);
      const request = videoStore.openCursor();
      let count = 0;
      const videos = [];

      request.onsuccess = function (event) {
        const cursor = event.target.result;
        if (cursor && count < limit) {
          videos.push(cursor.value);
          count++;
          cursor.continue();
        } else {
          resolve(videos);
        }
      };

      request.onerror = function (event) {
        reject(event.target.error);
      };
    });
  }
}

// Function to append a single video to the DOM
function appendListVideos(list, div) {
  sortListOrder(list.videos).forEach((video) => {
    div.insertAdjacentHTML("beforeend", videoHTML(video, "list", list.id));
  });
}
function returnTimeLineData(element) {
  let data;
  JSON.parse(window.localStorage.getItem("videosTimeLine")).forEach((video) => {
    if (video.id == element.id) {
      data = video.timeLineData;
    }
  });
  return data;
}
// appending shorts any where in the page in the viewing mode (view outside shorts mode)
function appendShortsView(div, array, list) {
  return new Promise((resolve, reject) => {
    if (array) {
      let successfulAppends = 0;
      array.forEach((short, index) => {
        appendShortsToDOM(div, short, index)
          .then(() => {
            successfulAppends++;
            if (successfulAppends === array.length) {
              resolve();
            }
          })
          .catch((error) => reject(error));
      });
    } else {
    }
  });
  function appendShortsToDOM(div, short, index) {
    return new Promise((resolve, reject) => {
      let shortDiv = document.createElement("div");
      shortDiv.classList.add("short");
      shortDiv.setAttribute("id", `short${index}`);
      shortDiv.setAttribute("tabindex", "0");
      shortDiv.setAttribute("data-link", short.id);
      if (list) {
        shortDiv.innerHTML = videoHTML(video, channel, list.id, index);
      } else {
        shortDiv.innerHTML = shortViewHTML(short);
      }
      div.appendChild(shortDiv);
      resolve();
    });
  }
}
// appending shorts any where in the shorts page
function appendShorts(div, array, list) {
  return new Promise((resolve, reject) => {
    if (array) {
      let successfulAppends = 0;
      array.forEach((short, index) => {
        appendShortsToDOM(div, short, list, index)
          .then(() => {
            successfulAppends++;
            if (successfulAppends === array.length) {
              resolve();
            }
          })
          .catch((error) => reject(error));
      });
    } else {
    }
  });
  function appendShortsToDOM(div, short, list, index) {
    return new Promise((resolve, reject) => {
      getCertainDataById("channels", video.channel)
        .then((channel) => {
          let shortDiv = document.createElement("div");
          shortDiv.classList.add("short");
          shortDiv.setAttribute("id", `short${i}`);
          shortDiv.setAttribute("tabindex", "0");
          shortDiv.setAttribute("data-link", array[i].id);
          if (list) {
            shortDiv.innerHTML = videoHTML(video, channel, list.id, index);
          } else {
            shortDiv.innerHTML = shortHTML(short, channel);
          }
          div.appendChild(shortDiv);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
function appendChannelView(div, array) {
  return new Promise((resolve, reject) => {
    if (array) {
      let successfulAppends = 0;
      array.forEach((channel, index) => {
        appendchannelsToDOM(div, channel, index)
          .then(() => {
            successfulAppends++;
            if (successfulAppends === array.length) {
              resolve();
            }
          })
          .catch((error) => reject(error));
      });
    } else {
    }
  });
  function appendchannelsToDOM(div, channel, index) {
    return new Promise((resolve, reject) => {
      getCertainDataById("channels", channel.id)
        .then((channel) => {
          let channelDiv = document.createElement("div");
          channelDiv.innerHTML = channelViewHTML(channel);
          div.appendChild(channelDiv);
          activateSub(
            user.id,
            channel.id,
            channelDiv.querySelector(".channel-subscribe-button button")
          );
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
function appendPlayList(div, array) {
  return new Promise((resolve, reject) => {
    if (array) {
      let successfulAppends = 0;
      array.forEach((playlist) => {
        if (playlist.videos.length > 0) {
          if (playlist.userAccess) {
            appendplaylistoToDOM(div, playlist)
              .then(() => {
                successfulAppends++;
                if (successfulAppends === array.length) {
                  resolve();
                }
              })
              .catch((error) => reject(error));
          }
        }
      });
    }
  });
  function appendplaylistoToDOM(div, playlist) {
    return new Promise((resolve, reject) => {
      getCertainDataById("channels", playlist.channel)
        .then((channel) => {
          let playlistDiv = document.createElement("div");
          listHTML(playlist, channel).then((data) => {
            playlistDiv.innerHTML = data;
            div.appendChild(playlistDiv);
            resolve();
          });
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
// for applying horizontal scrool by giving the wanted div
function applyHScroll(div) {
  let hScrolls = document.querySelectorAll(".h-scroll");
  let lScrollBDiv = `<div class="scroll-b l-scroll-b">
<button class="cb">
  <div class="svg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
    >
      <path
        d="M14.96 18.96 8 12l6.96-6.96.71.71L9.41 12l6.25 6.25-.7.71z"
      ></path>
    </svg>
  </div>
</button>
</div>`;
  let rScrollBDiv = `<div class="scroll-b r-scroll-b">
<button class="cb">
  <div class="svg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      focusable="false"
    >
      <path
        d="m9.4 18.4-.7-.7 5.6-5.6-5.7-5.7.7-.7 6.4 6.4-6.3 6.3z"
      ></path>
    </svg>
  </div>
</button>
</div>`;

  let container = div.querySelector(".h-scroll");
  let hContInner = container.querySelector(".c-scroll");
  let hContDivs = Array.from(
    container.querySelectorAll(".c-scroll .items > div")
  );
  let itemsCont = div.querySelector(".c-scroll .items");
  container.insertAdjacentHTML("afterbegin", lScrollBDiv);
  container.insertAdjacentHTML("afterbegin", rScrollBDiv);
  let lScroll = container.querySelector(".l-scroll-b");
  let rScroll = container.querySelector(".r-scroll-b");
  let lScrollB = container.querySelector(".l-scroll-b button");
  let rScrollB = container.querySelector(".r-scroll-b button");

  function prevDiv() {
    let hContInnerRect = hContInner.getBoundingClientRect();
    let itemsContRect = itemsCont.getBoundingClientRect();
    let divWidth =
      hContDivs[0].getBoundingClientRect().width +
      parseInt(getComputedStyle(hContDivs[0]).marginRight);
    let maxScroll = -(itemsContRect.width - hContInnerRect.width);
    let scrollWidth = 0;
    let value = 0;
    let w = 1;
    while (
      divWidth * w <=
      hContInnerRect.width +
        parseInt(getComputedStyle(hContDivs[0]).marginRight)
    ) {
      w++;
    }

    scrollWidth = divWidth * (w - 1);
    value = extractNum(itemsCont.style.transform) + scrollWidth;
    itemsCont.style.transform = `translateX(${Math.min(value, 0)}px)`;
    checkButtons(maxScroll);
  }
  function nextDiv() {
    let hContInnerRect = hContInner.getBoundingClientRect();
    let itemsContRect = itemsCont.getBoundingClientRect();
    let divWidth =
      hContDivs[0].getBoundingClientRect().width +
      parseInt(getComputedStyle(hContDivs[0]).marginRight);
    let maxScroll = -(itemsContRect.width - hContInnerRect.width);
    let scrollWidth = 0;
    let value = 0;
    let w = 1;
    while (
      divWidth * w <=
      hContInnerRect.width +
        parseInt(getComputedStyle(hContDivs[0]).marginRight)
    ) {
      w++;
    }
    scrollWidth = divWidth * (w - 1);
    value = extractNum(itemsCont.style.transform) - scrollWidth;
    itemsCont.style.transform = `translateX(${Math.max(value, maxScroll)}px)`;
    checkButtons(maxScroll);
  }
  function checkButtons(max) {
    if (!max) {
      let hContInnerRect = hContInner.getBoundingClientRect();
      let itemsContRect = itemsCont.getBoundingClientRect();
      let maxScroll = -(itemsContRect.width - hContInnerRect.width);
      max = maxScroll;
    }
    if (!itemsCont.style.transform)
      itemsCont.style.transform = `translateX(0px)`;
    if (Math.floor(extractNum(itemsCont.style.transform)) <= Math.floor(max)) {
      rScroll.style.display = "none";
    } else {
      rScroll.style.display = "flex";
    }
    if (Math.floor(extractNum(itemsCont.style.transform)) >= 0) {
      lScroll.style.display = "none";
    } else {
      lScroll.style.display = "flex";
    }
  }
  function checkPrevButtons(width) {
    if (hContInner.scrollLeft - width <= 0) {
      lScroll.style.display = "none";
      rScroll.style.display = "flex";
    } else {
      rScroll.style.display = "flex";
    }
  }
  window.addEventListener("resize", (e) => {
    checkButtons();
  });
  // hContInner.addEventListener('scroll',(e) => {
  //   checkNextButtons(mainWidth)
  // })
  checkButtons();
  lScrollB.addEventListener("click", prevDiv);
  rScrollB.addEventListener("click", nextDiv);
}
// sorting arrays
function sortListOrder(array) {
  let newArr = [...array];
  return newArr.sort(function (a, b) {
    return +a.order - +b.order;
  });
}
function sortListOrderInt(array) {
  return array.sort(function (a, b) {
    return a.order - b.order;
  });
}
function sortViews(array) {
  let newArr = [...array];
  return newArr.sort(function (a, b) {
    return b.views.length - a.views.length;
  });
}
function sortDate(array) {
  let newArr = [...array];
  return newArr.sort(function (a, b) {
    return b.date - a.date;
  });
}
function sortArray(array, prop) {
  let newArr = [...array];
  return newArr.sort(function (a, b) {
    return b[`${prop}`] - a[`${prop}`];
  });
}
function sortDateReverse(array) {
  let newArr = [...array];
  return newArr.sort(function (a, b) {
    return a.date - b.date;
  });
}
// functions for the click animation
let preventA = false;
function elementsInteract() {
  let el;
  let animationTimeOut;
  let animationTimeOut2;
  let timeOutEl;
  let element;
  let ripple;
  document.addEventListener("pointerdown", (e) => {
    el = e.target.closest(".cb") || e.target.closest(".clickable");
    element = e.target.closest(".contain-click");
    if (el) {
      if (!el.querySelector(".interact-cb")) {
        el.insertAdjacentHTML(
          "beforeend",
          `<div  class='interact-cb'><div  class='stroke-cb'></div><div  class='inner-cb'></div></div>`
        );
      }
      e.preventDefault();
      e.stopPropagation();
      clearTimeout(animationTimeOut);
      el = e.target.closest(".cb") || e.target.closest(".clickable");
      el.classList.remove("pressed");
      el.classList.add("mousedown");
      if (el.toLocaleString() == "[object HTMLButtonElement]") {
        preventA = true;
      }
    }
    if (element) {
      clearTimeout(animationTimeOut2);
      if (ripple) {
        ripple.remove();
      }
      if (!element.querySelector(".click")) {
        let clickDiv = document.createElement("div");
        clickDiv.classList.add("click");
        element.appendChild(clickDiv);
      }
      let clickX = element.getBoundingClientRect().left;
      let clickY = element.getBoundingClientRect().top;
      let divWidth = element.getBoundingClientRect().width;
      let divHeight = element.getBoundingClientRect().height;
      let mouseX = e.x;
      let mouseY = e.y;
      let divLeft = mouseX - clickX;
      let divTop = mouseY - clickY;
      ripple = document.createElement("span");
      ripple.classList.add("ripple");
      ripple.style.top = divTop + "px";
      ripple.style.left = divLeft + "px";
      if (divWidth >= divHeight) {
        divHeight = divWidth;
      } else {
        divWidth = divHeight;
      }
      element.querySelector(".click").appendChild(ripple);
      setTimeout(() => {
        ripple.style.width = divWidth * 2 + "px";
        ripple.style.height = divHeight * 2 + "px";
      }, 10);
      preventA = true;
    }
  });
  document.addEventListener("pointerup", (e) => {
    if (el) {
      clearEl();
    }
    if (element) {
      clearElement();
    }
  });
  document.addEventListener("pointercancel", () => {
    if (el) {
      clearEl();
    }
    if (element) {
      clearElement();
    }
  });
  document.addEventListener("click", (e) => {
    if (preventA) {
      e.stopPropagation();
      e.preventDefault();
      console.log(preventA);
      preventA = false;
    }
  });
  function clearEl() {
    el.classList.remove("mousedown");
    el.classList.add("pressed");
    timeOutEl = el;
    animationTimeOut = setTimeout(() => {
      timeOutEl.classList.remove("pressed");
    }, 600);
    el = null;
  }
  function clearElement() {
    ripple.style.opacity = 0;
    animationTimeOut2 = setTimeout(() => {
      ripple.remove();
    }, 800);
    element = null;
  }
}
// pointer down scale animtaion on elements with contain-click class
function activateContainClick() {}
// handle user paste
function handlePaste(e) {
  e.preventDefault();

  // Get pasted text
  const pastedText = (e.clipboardData || clipboardData).getData("text/plain");

  // Remove unwanted styles or formatting here if needed
  // For simplicity, this example removes any HTML tags
  const sanitizedText = pastedText.replace(/<[^>]+>/g, "");

  // Insert sanitized text into the editable div
  document.execCommand("insertText", false, sanitizedText);
}
//prevent new lines
function preventNewLine(e) {
  let text = (e.originalEvent || e).clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text.replace(/(\r\n|\n|\r)/gm, ""));
}
// create a url for the image
function getBase64(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    callback(reader.result);
  };
  reader.onerror = function (error) {
    console.log("Error: ", error);
  };
}
// take the intial js date value and return time passed
function timeSince(date) {
  let seconds = Math.floor((new Date() - date) / 1000);

  let interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}
// for getting the time of a video by passing the video duration
function FormatTime(time) {
  const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2,
  });
  const s = Math.floor(time % 60);
  const m = Math.floor(time / 60) % 60;
  const h = Math.floor(time / 3600);
  if (h === 0) {
    return `${m}:${leadingZeroFormatter.format(s)}`;
  } else if (h !== 0) {
    return `${h}:${leadingZeroFormatter.format(
      m
    )}:${leadingZeroFormatter.format(s)}`;
  }
}
// to lock and unloack the scrooling when there is a popup
let bodyPosition;
function lockBody(e) {
  if (
    document.fullscreenElement == null &&
    document.body.offsetHeight > window.innerHeight
  ) {
    bodyPosition = window.scrollY;
    document.body.style.top = `-${bodyPosition}px`;
    document.body.classList.add("lock-scrollbar");
  }
}
function unLockBody(e) {
  document.body.classList.remove("lock-scrollbar");
  window.scrollTo(0, bodyPosition);
}
//cool function that can give me screenshoot of a video
function screenFromVideo(src, element, time) {
  const video = document.createElement("video");
  video.src = src;
  video.preload = "metadata";

  video.addEventListener("loadeddata", () => {
    video.pause();
    video.style.width = video.videoWidth + "px";
    video.style.height = video.videoHeight + "px";
    let randomTime;
    if (!time) {
      randomTime = Math.floor(Math.random() * video.duration);
    } else {
      randomTime = time;
    }
    video.currentTime = randomTime;
    video.addEventListener("seeked", function onSeeked() {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Attempt to convert canvas to data URL
        const dataURL = canvas.toDataURL("image/jpeg");

        // Call the callback with the data URL
        element.src = dataURL;

        // Clean up
        video.removeEventListener("seeked", onSeeked);
        video.remove();
        canvas.remove();
      } catch (error) {
        console.error("Error capturing screenshot:", error);
      }
    });
  });
}
// to extract any numbers in a string
function extractNum(str) {
  let match = str.match(/-?\d+\.?\d*/);
  let number = match ? parseFloat(match[0]) : 0;
  return number;
}
//to format large numbers
function formatNumber(num, value) {
  let string;
  if (num == 0 && value) {
    return `No ${value}`;
  }
  if (!value) {
    string = "";
  } else {
    string = ` ${value}`;
  }
  if (num == 1) {
    return `${num.toLocaleString() + string}`;
  }
  if (num < 10000) {
    // For numbers less than 10k, use comma as a separator
    return num.toLocaleString() + string;
  } else if (num < 1000000) {
    // For numbers between 10k and 1m, use K suffix
    return (num / 1000).toFixed(2) + "K" + string;
  } else if (num < 1000000000) {
    // For numbers between 1m and 1b, use M suffix
    return (num / 1000000).toFixed(2) + "M" + string;
  } else {
    // For numbers greater than or equal to 1b, use B suffix
    return (num / 1000000000).toFixed(2) + "B" + string;
  }
}
//remove lodaing animation
function removeWaitingLoad() {
  document.body.classList.remove("waiting");
}
function activateSub(userId, thatUserId, button) {
  if (userId == thatUserId) {
    button.remove();
  }
  searchForDataInsideProperty("channels", userId, "subscridedTo", thatUserId)
    .then((found) => {
      if (found) {
        buttonChangeToSub(button);
      }
      button.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        checkIfSubscribed(userId, thatUserId, button);
      });
    })
    .catch((error) => {
      console.error(error);
    });
  function checkIfSubscribed(userId, thatUserId, button) {
    if (userId == thatUserId) {
      return;
    }
    searchForDataInsideProperty("channels", userId, "subscridedTo", thatUserId)
      .then((found) => {
        if (found) {
          unSubscribe(userId, thatUserId, button);
        } else {
          subscribe(userId, thatUserId, button);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function subscribe(userId, thatUserId, button) {
    return new Promise((resolve, reject) => {
      let value = {
        id: userId,
      };
      let value2 = {
        id: thatUserId,
      };
      pushCertainDataToProperty("channels", thatUserId, "subscribers", value)
        .then(() => {
          return pushCertainDataToProperty(
            "channels",
            userId,
            "subscridedTo",
            value2
          );
        })
        .then(() => {
          buttonChangeToSub(button);
          document.dispatchEvent(UpdateSubsCountEvent);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function unSubscribe(userId, thatUserId, button) {
    return new Promise((resolve, reject) => {
      deleteDataFromProperty("channels", thatUserId, "subscribers", userId)
        .then(() => {
          return deleteDataFromProperty(
            "channels",
            userId,
            "subscridedTo",
            thatUserId
          );
        })
        .then(() => {
          buttonChangeToUnSub(button);
          document.dispatchEvent(UpdateSubsCountEvent);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function buttonChangeToSub(button) {
    button.textContent = "Subscribed";
    button.classList.add("gray");
    button.classList.remove("white");
  }
  function buttonChangeToUnSub(button) {
    button.textContent = "Subscribe";
    button.classList.remove("gray");
    button.classList.add("white");
    button.id = "subscribe";
  }
}
function handleLikeDislikeObject() {
  document.addEventListener("click", handleClick);
  function handleClick(e) {
    let button = e.target.closest("button");
    if (button && button.dataset.action) {
      let action = button.dataset.action.toLowerCase();
      let likeCheck = "likeobject".toLowerCase();
      let disLikeCheck = "dislikeobject".toLowerCase();
      let object = button.closest("#objectId");
      let objectId = +object.dataset.objectid;
      if (objectId) {
        if (action == likeCheck) {
          handleLike(
            objectId,
            button,
            object.querySelector("#disLikeBtn"),
            object.querySelector("#LikesCount"),
            object.querySelector("#disLikesCount")
          );
        } else if (action == disLikeCheck) {
          handleDisLike(
            objectId,
            button,
            object.querySelector("#likeBtn"),
            object.querySelector("#disLikesCount"),
            object.querySelector("#LikesCount")
          );
        }
      }
    }
  }
  function handleDisLike(objectId, button, otherBtn, count, otherCount) {
    button.classList.toggle("active");
    searchForDataInsideProperty("videos", objectId, "disLikes", user.id)
      .then((found) => {
        if (found) {
          removeDislike(objectId, count);
        } else {
          addDislike(objectId, count);
        }
        return searchForDataInsideProperty(
          "videos",
          objectId,
          "likes",
          user.id
        );
      })
      .then((found) => {
        if (found) {
          removeLike(objectId, otherCount);
          otherBtn.classList.remove("active");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function handleLike(objectId, button, otherBtn, count, otherCount) {
    button.classList.toggle("active");
    searchForDataInsideProperty("videos", objectId, "likes", user.id)
      .then((found) => {
        if (found) {
          removeLike(objectId, count);
        } else {
          addLike(objectId, count);
        }
        return searchForDataInsideProperty(
          "videos",
          objectId,
          "disLikes",
          user.id
        );
      })
      .then((found) => {
        if (found) {
          removeDislike(objectId, otherCount);
          otherBtn.classList.remove("active");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function addLike(objectId, count) {
    return new Promise((resolve, reject) => {
      let value;
      pushCertainDataToProperty("videos", objectId, "likes", { id: user.id })
        .then(() => {
          return getCertainPropertyFromObject("videos", objectId, "likesCount");
        })
        .then((data) => {
          value = +data;
          value++;
          return setCertainDataToProperty(
            "videos",
            objectId,
            "likesCount",
            value
          );
        })
        .then(() => {
          count.textContent = formatNumber(value);
          resolve();
          return getCertainPropertyFromObject("videos", objectId, "dataType");
        })
        .then((data) => {
          let value = data.toLowerCase();
          if (value == "video" || value == "short") {
            addVideoToPlayList("LV", objectId);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function addDislike(objectId, count) {
    return new Promise((resolve, reject) => {
      let value;
      pushCertainDataToProperty("videos", objectId, "disLikes", { id: user.id })
        .then(() => {
          return getCertainPropertyFromObject(
            "videos",
            objectId,
            "disLikesCount"
          );
        })
        .then((data) => {
          value = +data;
          value++;
          return setCertainDataToProperty(
            "videos",
            objectId,
            "disLikesCount",
            value
          );
        })
        .then(() => {
          count.textContent = formatNumber(value);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function removeLike(objectId, count) {
    return new Promise((resolve, reject) => {
      let value;
      deleteDataFromProperty("videos", objectId, "likes", user.id)
        .then(() => {
          return getCertainPropertyFromObject("videos", objectId, "likesCount");
        })
        .then((data) => {
          value = +data;
          value--;
          return setCertainDataToProperty(
            "videos",
            objectId,
            "likesCount",
            value
          );
        })
        .then(() => {
          count.textContent = formatNumber(value);
          resolve();
          return getCertainPropertyFromObject("videos", objectId, "dataType");
        })
        .then((data) => {
          let value = data.toLowerCase();
          if (value == "video" || value == "short") {
            removeVideoFromPlayList("LV", videoData.id);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  function removeDislike(objectId, count) {
    let value;
    return new Promise((resolve, reject) => {
      deleteDataFromProperty("videos", objectId, "disLikes", user.id)
        .then(() => {
          return getCertainPropertyFromObject(
            "videos",
            objectId,
            "disLikesCount"
          );
        })
        .then((data) => {
          value = +data;
          value--;
          return setCertainDataToProperty(
            "videos",
            objectId,
            "disLikesCount",
            value
          );
        })
        .then(() => {
          count.textContent = formatNumber(value);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}
function assignPlaylistOrderWithVideo(videoArray, orderArray) {
  let arr = [...videoArray];
  arr.forEach((video) => {
    orderArray.forEach((videOrder) => {
      if (video.id == videOrder.videoId) {
        video.order = videOrder.order;
      }
    });
  });

  return sortListOrder(arr);
}
function getMostFrequentColor(image) {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    const colorCounts = {};
    let maxCount = 0;
    let mostFrequentColor = "";

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      if (a === 0) continue; // skip transparent pixels

      const color = `${r} ${g} ${b}`;
      colorCounts[color] = (colorCounts[color] || 0) + 1;

      if (colorCounts[color] > maxCount) {
        maxCount = colorCounts[color];
        mostFrequentColor = color;
      }
    }

    // Variables for brightness control
    const brightColorReduction = 150;
    const darkColorReduction = 50;
    const minBrightnessThreshold = 20;
    const brightenAmount = 30;

    // Adjust color brightness
    const [r, g, b] = mostFrequentColor.split(" ").map(Number);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b; // Calculate brightness

    let adjustedR = r,
      adjustedG = g,
      adjustedB = b;

    if (luminance > 128) {
      // Darken the color more if it's too bright
      adjustedR = Math.max(r - brightColorReduction, 0);
      adjustedG = Math.max(g - brightColorReduction, 0);
      adjustedB = Math.max(b - brightColorReduction, 0);
    } else {
      // Slightly darken the color if it's not too bright
      adjustedR = Math.max(r - darkColorReduction, 0);
      adjustedG = Math.max(g - darkColorReduction, 0);
      adjustedB = Math.max(b - darkColorReduction, 0);
    }

    // Ensure the color is not too dark to be visible
    if (
      adjustedR < minBrightnessThreshold &&
      adjustedG < minBrightnessThreshold &&
      adjustedB < minBrightnessThreshold
    ) {
      adjustedR = Math.min(r + brightenAmount, 255);
      adjustedG = Math.min(g + brightenAmount, 255);
      adjustedB = Math.min(b + brightenAmount, 255);
    }

    resolve(`rgb(${adjustedR} ${adjustedG} ${adjustedB} / 40%)`);
  });
}

function activateSlider(sliderContainer, min, max, step, updates) {
  const slider = sliderContainer.querySelector("#slider");
  const thumb = sliderContainer.querySelector("#thumb");
  const sliderValue = sliderContainer.querySelector("#sliderValue");
  let mouseDown = false;

  let value = max / 2;
  let newValue = value.toFixed(2);
  const initialLeft = ((value - min) / (max - min)) * slider.clientWidth;
  thumb.style.left = `${initialLeft - thumb.clientWidth / 2}px`;
  sliderValue.textContent = value;

  function updateSlider(e, forceUpdate) {
    if (mouseDown || forceUpdate) {
      let x = e.clientX || e.touches[0].clientX;
      e.preventDefault();
      const rect = slider.getBoundingClientRect();
      const offsetX = x - rect.left;
      const relativeX = Math.min(Math.max(offsetX, 0), slider.clientWidth);
      newValue = (
        Math.round(((relativeX / slider.clientWidth) * (max - min)) / step) *
          step +
        min
      ).toFixed(2);
      thumb.style.left = `${relativeX - thumb.clientWidth / 2}px`;

      if (updates) {
        updates.forEach((update) => {
          update.element[update.property] = newValue;
        });
      }
      sliderValue.textContent = newValue; // Update main slider value display
    }
  }

  slider.addEventListener("pointerdown", () => {
    mouseDown = true;
    slider.classList.add("sliding");
  });

  document.addEventListener("mousemove", (e) => updateSlider(e, false));
  document.addEventListener("pointerup", () => {
    mouseDown = false;
    slider.classList.remove("sliding");
  });

  slider.addEventListener("click", (e) => {
    updateSlider(e, true);
  });

  document.addEventListener("touchmove", (e) => updateSlider(e, false), {
    passive: false,
  });

  // Return the function to get the current slider value
  return () => parseFloat(newValue);
}
// buttons blur
function buttonsBlur() {
  for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", () => {
      document.querySelectorAll("button")[i].blur();
    });
  }
  for (let i = 0; i < document.querySelectorAll("button").length; i++) {
    document
      .querySelectorAll("button")
      [i].addEventListener("mouseleave", () => {
        document.querySelectorAll("button")[i].blur();
      });
  }
  // for (let i = 0; i < document.querySelectorAll("div").length; i++) {
  //   document.querySelectorAll("div")[i].addEventListener("click", () => {
  //       document.querySelectorAll("div")[i].blur();
  //   });
  // }
  // for (let i = 0; i < document.querySelectorAll("div").length; i++) {
  //   document
  //     .querySelectorAll("div")
  //     [i].addEventListener("mouseleave", () => {
  //       setTimeout(() => {
  //         document.querySelectorAll("div")[i].blur();
  //       }, 100);
  //     });
  // }
}
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelectorAll("input").length > 0) {
    for (let i = 0; i > document.querySelectorAll("input").length; i++) {
      document.querySelectorAll("input")[i].addEventListener("focusin", () => {
        inputFocus = true;
      });
      document.querySelectorAll("input")[i].addEventListener("focusout", () => {
        inputFocus = false;
      });
      document.querySelectorAll(".input")[i].addEventListener("focusin", () => {
        inputFocus = true;
      });
      document
        .querySelectorAll(".input")
        [i].addEventListener("focusout", () => {
          inputFocus = false;
        });
    }
  }
});

function handlePopResize() {
  setPopupPosition(currentBtn);
}
function handleBlur() {
  let el;
  document.addEventListener("pointerdown", (e) => {
    el =
      e.target.closest("button") ||
      e.target.closest('div[data-focasable="true"]');
  });
  document.addEventListener("pointerup", (e) => {
    if (el) {
      el.blur();
    }
  });
}
handleBlur();
let popupStatus = false;
let popupAnimationTimeOut;
const openPopups = [];

function handlePopup() {
  document.addEventListener("click", (e) => {
    const button = e.target.closest("button");

    if (!popupStatus) {
      if (button && button.dataset.popup) {
        e.stopPropagation();
        openPopup(button);
      }
    } else {
      const activeMenu = popupDiv.querySelector(".active-popup");
      if (popupDiv.classList.contains("center")) {
        if (
          activeMenu &&
          !openPopups[openPopups.length - 1].contains(e.target) &&
          popupDiv.contains(e.target)
        ) {
          closePopup();
        }
      } else {
        if (activeMenu && !activeMenu.contains(e.target)) {
          closePopup();
        }
      }
      if (button && button.id === "closePopup") {
        closePopup();
      }
      if (button && button.dataset.popup) {
        e.stopPropagation();
        openPopup(button);
      }
    }
  });
}

function resetPopupClasses() {
  popupDiv.style.left = null;
  popupDiv.style.top = null;
  popupDiv.classList.remove("closer", "center", "active");
}

function openPopup(button) {
  if (!button.dataset.multipopup) {
    resetPopupClasses();
  }

  clearTimeout(popupAnimationTimeOut);

  const menu = popupDiv.querySelector(`#${button.dataset.popup}`);
  if (!menu) {
    console.error(`Menu with ID ${button.dataset.popup} not found.`);
    return;
  }

  if (button.dataset.multipopup !== "true") {
    const activeMenu = popupDiv.querySelector(".active-popup");
    if (activeMenu) {
      activeMenu.classList.remove("active-popup");
    }
    openPopups.length = 0; // Clear the stack if not a multi-popup
  }

  menu.style.display = null;
  menu.classList.add("active-popup");
  openPopups.push(menu);
  popupDiv.querySelectorAll(".active-popup").forEach((menu) => {
    menu.classList.remove("current-active");
  });
  menu.classList.add("current-active");
  popupDiv.classList.add("active");
  popupStatus = true;

  if (button.dataset.videoid) {
    menu.dataset.videoid = button.dataset.videoid;
  }

  if (button.dataset.popuptype === "center") {
    popupDiv.classList.add("center");
  } else {
    setPopupPosition(button);
  }
}

function closePopup() {
  const activeMenu = openPopups.pop(); // Remove the last opened popup
  if (!activeMenu) return;
  if (openPopups.length > 0) {
    openPopups[openPopups.length - 1].classList.add("current-active");
  }

  activeMenu.classList.add("closer"); // Apply closing animation to the active popup
  if (openPopups.length === 0) {
    popupDiv.classList.add("closer");
  }
  clearTimeout(popupAnimationTimeOut);
  popupAnimationTimeOut = setTimeout(() => {
    activeMenu.classList.remove("active-popup", "closer", "current-active");
    activeMenu.style.display = "none"; // Hide the closed popup

    if (openPopups.length === 0) {
      resetPopupClasses(); // Reset container classes only if no popups are open
      popupStatus = false;
    }
  }, 300);
}

function setPopupPosition(button) {
  let buttonRect = button.getBoundingClientRect();
  let popupDivRect = popupDiv.getBoundingClientRect();
  const isLeftHalf = buttonRect.left / window.innerWidth <= 0.5;
  const isTopHalf = buttonRect.top / window.innerHeight <= 0.5;

  popupDiv.style.left = isLeftHalf
    ? `${Math.max(buttonRect.left, 0)}px`
    : `${Math.min(
        buttonRect.left + buttonRect.width - popupDivRect.width,
        window.innerWidth
      )}px`;

  popupDiv.style.top = isTopHalf
    ? `${buttonRect.bottom}px`
    : `${buttonRect.top - popupDivRect.height}px`;
}
