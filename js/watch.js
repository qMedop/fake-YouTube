const scrollBtn = document.querySelector(
  ".mainVideo .videoControlls .controlls .scroll"
);
const hideSidebar = document.querySelector(
  ".landing .Wleft .videoCont #hideSidebarBtn"
);
const watchColums = document.querySelector(".landing .colums");
let videoInteraction = document.querySelector(
  ".Wleft .video-interact .video-info .right"
);
let videoInteractionDownload = document.querySelector(
  ".Wleft .video-interact .video-info .right .download"
);
let videoInteractionThanks = document.querySelector(
  ".Wleft .video-interact .video-info .right .thanks"
);
let videoInteractionClip = document.querySelector(
  ".Wleft .video-interact .video-info .right .clip"
);
let videoInteractionLike = document.querySelector(
  ".Wleft .video-interact .video-info .right #likeBtn"
);
let videoInteractionDisLike = document.querySelector(
  ".Wleft .video-interact .video-info .right #disLikeBtn"
);
let vdieoLikeNumbers = document.querySelector(
  ".Wleft .video-interact .video-info .right .like #LikesCount"
);
let videoAbout = document.querySelector(".Wleft .about-video");
let fullscreenHolder = document.querySelector(".full-screen-holder");
let buttonsHandler = document.querySelector(
  ".Wleft .video-interact .video-info .right .buttons-handler"
);
let watchingVideo = document.querySelector("#mainVideo");
let ambientBtn = document.querySelector(
  ".mainVideo .videoControlls .settings-container .ambient-mode"
);
let ambientSlider = document.querySelector(
  ".mainVideo .videoControlls .settings-container .ambient-mode .slider"
);
let fullScereneBtnWatch = document.querySelector(
  ".mainVideo .video-overlay .controlls .fullScreen"
);
let uploaderImage = document.querySelector(
  ".landing .Wleft .video-interact .video-info .chanenl-img img"
);
let uploaderName = document.querySelector(
  ".landing .Wleft .video-interact .video-info .chanenl-name #chanenlName"
);
let uploaderSubs = document.querySelector(
  ".landing .Wleft .video-interact .video-info .chanenl-name #chanenlSubs"
);
let subBtn = document.querySelector(
  ".landing .Wleft .video-interact .video-info .subscibe-btn #subscribeBtn"
);
let channelImgLink = document.querySelector(
  ".landing .Wleft .video-interact .video-info .chanenl-img a"
);
let mainVideoContainer = document.querySelector(".mainVideo");
let ambienEffect = document.querySelector(".ambient-effect");
let addComment = document.querySelector(".add-comment");
let mainCommentForm = document.querySelector("#mainCommentForm");
let mainCommentInput = document.querySelector("#mainCommentInput");
let mainCommnetCancel = document.querySelector(
  "#mainCommentForm #cancelComment"
);
let mainCommnetSubmit = document.querySelector(
  "#mainCommentForm #submitComment"
);
let comments = document.querySelectorAll(
  ".comments .comments-section .comment"
);
let mainComments = document.querySelectorAll(
  ".comments .comments-section .comment .main-comment"
);
let ReplyForm = document.querySelectorAll(".main-comment #replyForm");
let replyInput = document.querySelectorAll(".main-comment #replyInput");
let replyCancel = document.querySelectorAll(
  ".main-comment #replyForm #cancelReply"
);
let replySubmit = document.querySelectorAll(
  ".main-comment #replyForm #submitReply"
);
let commentsReply = document.querySelectorAll(
  ".comments .comments-section .main-comment .comment-interacte .reply button"
);
let showHideReplys = document.querySelectorAll(
  ".comments .show-hide-replys-btn button"
);
let randomVids = document.querySelector(".Wright .randomVids");
let commentsSection = document.querySelector(".comments .comments-section");
let replysSection = document.querySelectorAll(
  ".comments .replys-comments-section"
);
let watchVideoCont = document.querySelector("#watchVideoCont");
let commentsCount = document.querySelector(".comments #commentsCount");
let AMCanvas1 = document.querySelector("#ambientCanvas1");
let AMCanvas2 = document.querySelector("#ambientCanvas2");
let whichComment;
let whichSubmit;
let whichCancel;
let videoLike = false;
let videoDisLike = false;
let abotStatue = false;
let watchVid;
let videoData;
let videoOwner;
let queryString;
let urlParams;
let videoId;
let listId;
let watchingPlaylist;
let watchingPlaylistOwner;
let watchingPlaylistVideos;

document.addEventListener("dataFetched", function (event) {
  queryString = window.location.search;
  urlParams = new URLSearchParams(queryString);
  videoId = urlParams.get("video");
  listId = urlParams.get("list");
  if (videoId) {
    getCertainDataById("videos", +videoId).then((data) => {
      videoData = data;
      if (videoData) {
        getCertainDataById("channels", videoData.channel).then((data) => {
          if (data) {
            videoOwner = data;
            loadWatchPageData();
          } else {
            console.log(`can't find the channel`);
          }
        });
      } else {
        console.log(`can't find the video`);
      }
    });
  } else {
    body.classList.add("only-player");
    watchColums.classList.add("hide-sidebar");
    removeWaitingLoad();
    hideViewNav();
    inputch.onchange = (evt) => {
      const [file] = inputch.files;
      if (file) {
        watchingVideo.src = URL.createObjectURL(file);
        previewVideo.src = URL.createObjectURL(file);
        applyVisualEffects(watchingVideo, AMCanvas1, AMCanvas2, 6000);
        const videoPlayer = new customVideoPlayer(mainVideoContainer);
      }
      console.log(file.name);
    };
    urluploadbtn.addEventListener("click", () => {
      if (urlvalue.value.length == 0) {
      } else {
        watchingVideo.src = urlvalue.value;
        previewVideo.src = urlvalue.value;
        urlvalue.value = "";
      }
    });
  }
  if (listId) {
    getCertainDataById("playlists", +listId)
      .then((data) => {
        watchingPlaylist = data;
        return getCertainDataById("channels", watchingPlaylist.channel);
      })
      .then((channel) => {
        watchingPlaylistOwner = channel;
        return getMultipleData("videos", watchingPlaylist.videos);
      })
      .then((videos) => {
        watchingPlaylistVideos = videos;
        loadWatchFromPlaylist();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    document.getElementById("WatchPlaylist").remove();
  }
});
function loadWatchFromPlaylist(list) {
  let playlistCont = document.getElementById("WatchPlaylist");
  let listName = playlistCont.querySelector("#wListName");
  let listOwner = playlistCont.querySelector("#wListOwner");
  let listIndex = playlistCont.querySelector("#wListIndex");
  let listVideosCont = playlistCont.querySelector(
    ".list-videos .videos-container"
  );

  listName.innerHTML = watchingPlaylist.name;
  listName.href = `playlist.html?list=${watchingPlaylist.id}`;
  listOwner.innerHTML = watchingPlaylistOwner.name;
  listOwner.href = `channel.html?user=${watchingPlaylistOwner.user}`;
  listIndex.innerHTML = `${getVideoIndex(watchingPlaylist, videoId) + 1} / ${
    watchingPlaylist.videos.length
  }`;
  function getVideoIndex(list, videoId) {
    let value;
    list.videos.forEach((video, i) => {
      if (video.id == videoId) {
        value = i;
      }
    });
    console.log(value);
    return value;
  }
  appendVideos(
    listVideosCont,
    assignPlaylistOrderWithVideo(
      watchingPlaylistVideos,
      watchingPlaylist.videos
    ),
    watchingPlaylist
  ).then(() => {
    let wantedDiv = playlistCont.querySelectorAll(
      ".list-videos .videos-container .video"
    )[getVideoIndex(watchingPlaylist, videoId)];
    wantedDiv.classList.add("playing");
    getMostFrequentColor(wantedDiv.querySelector(".thumbnail .img img")).then(
      (color) => {
        wantedDiv.style.backgroundColor = color;
        console.log("Most frequent color:", color);
      }
    );
  });
}
function loadWatchPageData() {
  addValueToDataBase("videos", videoData, videoData.id, "views", {
    user: user.id,
  })
    .then(() => {
      assignData();
      handlePage();
      saveTimeLine();
      // addVideoToHistory(videoData)
    })
    .catch((error) => console.log(error));
  activateSub(user.id, videoOwner.id, subBtn);
  removeWaitingLoad();
  let a = videoData.comments.length;
  for (let i = 0; i < videoData.comments.length; i++) {
    a += videoData.comments[i].replys.length;
  }
  commentsCount.innerText = a;
  if (videoData.descripion === "") {
    showMore.textContent = "...About";
  }
  searchForDataInsideProperty("videos", videoData.id, "likes", user.id)
    .then((found) => {
      if (found) {
        videoInteractionLike.classList.add("active");
      }
      return searchForDataInsideProperty(
        "videos",
        videoData.id,
        "disLikes",
        user.id
      );
    })
    .then((found) => {
      if (found) {
        videoInteractionDisLike.classList.add("active");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  getCertainPropertyFromObject("videos", videoData.id, "likesCount").then(
    (result) => {
      vdieoLikeNumbers.textContent = formatNumber(result);
    }
  );
  document.addEventListener("updateSubCount", (e) => {
    uploaderSubs.innerText = formatNumber(
      videoData.channel.subscribers.length,
      "subscribers"
    );
  });
  // appendVideos(videosArray,randomVids.querySelector('.videos-container'))
}
function assignData() {
  watchingVideo.src = videoData.src;
  mainImg.src = videoData.thumbnail;
  videoTittle.textContent = videoData.name;
  VideoName.textContent = videoData.name;
  videoUploadDate.textContent = timeSince(videoData.date);
  vdieoAbout.innerText = videoData.descripion;
  uploaderImage.src = videoOwner.image;
  uploaderName.innerText = videoOwner.name;
  uploaderSubs.innerText = formatNumber(
    videoOwner.subscribers.length,
    "subscribers"
  );
  views.innerHTML = formatNumber(videoData.views.length, "views");
  channelImgLink.href = `channel.html?user=${videoOwner.user}`;
  document.querySelector(
    ".video-interact .video-info .right #objectId"
  ).dataset.objectid = videoData.id;
  appendComments(videoData.comments, commentsSection);
  const videoPlayer = new customVideoPlayer(mainVideoContainer);
  console.log(videoPlayer);
}

function handlePage() {
  applyVisualEffects(watchingVideo, AMCanvas1, AMCanvas2, 2000);
  activateFullscreenByDB();
  handleEntringFullScreen();
  interactionHandler();
  // ambientBtn.addEventListener("click", () => {
  //   ambientModeAD()
  //   ambientModeCheck();
  // });
  fullScereneBtnWatch.addEventListener("click", (e) => {
    e.stopPropagation();
    WatchfullScerene();
  });
  document.addEventListener("keydown", (e) => {
    if (inputFocus === false) {
      switch (e.key.toLowerCase()) {
        case "f":
          e.preventDefault();
          WatchfullScerene();
          break;
      }
    }
    for (let i = 0; i < replyInput.length; i++) {
      replyInput[i].addEventListener("paste", handlePaste);
    }
  });
  // videoInteractionLike.addEventListener("click", function () {
  //   handleLikeDislikeObject(videoData.id)
  // });
  // videoInteractionDisLike.addEventListener("click", function () {
  //   handleLikeDislikeObject(videoData.id)
  // });
  window.addEventListener("resize", interactionHandler);
  videoAbout.addEventListener("click", openAbout);
  closeAboutBtn.addEventListener("click", closeAbout);
  if (!mobile) {
    window.addEventListener("scroll", hideViewNav);
    hideViewNav();
    scrollBtn.addEventListener("click", () => {
      if (window.scrollY <= 200) {
        window.scrollTo({
          top: 200,
          behavior: "smooth",
        });
      }
    });
  }
}
function hideViewNav() {
  topNav.style.backgroundColor = `rgb(15 15 15 / ${100}%)`;
  if (document.fullscreenElement !== null) {
    if (window.scrollY === 0) {
      topNav.classList.add("hide-nav");
    } else {
      topNav.classList.remove("hide-nav");
    }
  } else {
    let a = Math.min(window.scrollY / 30, 1) * 100;
    topNav.style.backgroundColor = `rgb(15 15 15 / ${a}%)`;
  }
}
function interactionHandler(e) {
  if (window.window.innerWidth >= 600) {
    if (videoInteraction.clientWidth < 900) {
      videoInteractionClip.style.display = "none";
    } else {
      videoInteractionClip.style.display = "block";
    }
    if (videoInteraction.clientWidth < 650) {
      videoInteractionThanks.style.display = "none";
    } else {
      videoInteractionThanks.style.display = "block";
    }
    if (videoInteraction.clientWidth < 430) {
      videoInteractionDownload.style.display = "none";
    } else {
      videoInteractionDownload.style.display = "block";
    }
  } else {
    if (videoInteraction.clientWidth > 520) {
      videoInteractionThanks.style.display = "block";
    } else {
      videoInteractionThanks.style.display = "none";
    }
    videoInteractionClip.style.display = "none";
    videoInteractionDownload.style.display = "block";
  }
}
function openAbout(e) {
  if (!abotStatue) {
    abotStatue = true;
    videoAbout.classList.add("opened");
  }
}
function closeAbout(e) {
  if (abotStatue) {
    videoAbout.classList.remove("opened");
    setTimeout(() => {
      abotStatue = false;
    }, 300);
  }
}

function updatePlayer(e) {
  fullscreenHolder.innerHTML = videoCont.innerHTML;
  videoCont.innerHTML = "";
  script.remove();
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    let script = document.createElement("script");
    script.setAttribute("src", "js/playerM.js");
    document.body.appendChild(script);
  } else {
    let script = document.createElement("script");
    script.setAttribute("src", "js/player.js");
    document.body.appendChild(script);
  }
}
function ambientModeAD() {
  if (window.localStorage.getItem("ambientMode") == "false") {
    window.localStorage.setItem("ambientMode", "true");
  } else {
    window.localStorage.setItem("ambientMode", "false");
  }
}
function ambientModeCheck(e) {
  if (window.localStorage.getItem("ambientMode") == "true") {
    window.localStorage.setItem("ambientMode", "true");
    document.body.classList.add("ambient-mode");
    ambientSlider.classList.add("active");
  } else {
    document.body.classList.remove("ambient-mode");
    ambientSlider.classList.remove("active");
    window.localStorage.setItem("ambientMode", "false");
  }
}
function WatchfullScerene(e) {
  if (document.fullscreenElement == null) {
    fullscreenHolder.appendChild(mainVideoContainer);
    document.querySelector("#html").requestFullscreen();
    document.body.classList.add("fullScreen");
    setTimeout(() => {
      topNav.classList.add("hide-nav");
    }, 50);
    window.scrollTo(0, 0);
  } else {
    document.exitFullscreen();
  }
}
function activateFullscreenByDB() {
  if (!mobile) {
    watchVideoCont.addEventListener("dblclick", (e) => {
      if (e.target.toString() === "[object HTMLVideoElement]") {
        WatchfullScerene();
      }
    });
  }
}
function handleEntringFullScreen() {
  document.addEventListener("fullscreenchange", (e) => {
    if (document.fullscreenElement !== null) {
    } else {
      watchVideoCont.appendChild(mainVideoContainer);
      document.body.classList.remove("fullScreen");
      topNav.classList.remove("hide-nav");
    }
  });
}
function saveTimeLine() {
  let interval;
  let allData = JSON.parse(window.localStorage.getItem("videosTimeLine"));
  if (returnindex(allData, "user", user.user) == undefined) {
    let videoUser = { user: user.user, videosData: [] };
    allData.push(videoUser);
    console.log(allData);
  } else {
  }
  let userIndex = returnindex(allData, "user", user.user);
  let allVideos = allData[userIndex].videosData;
  if (allVideos.length >= 1) {
    let found = false;
    allVideos.forEach((video) => {
      if (video.id == videoData.id) {
        found = true;
      }
    });
    if (!found) {
      pushVideo();
    }
  } else {
    pushVideo();
  }
  function pushVideo() {
    let video = { id: videoData.id, timeLineData: 0 };
    console.log(allVideos);
    allVideos.push(video);
    window.localStorage.setItem("videosTimeLine", JSON.stringify(allData));
  }
  let index = returnindex(allVideos, "id", videoData.id);
  watchingVideo.addEventListener("loadeddata", (e) => {
    watchingVideo.addEventListener("play", (e) => {
      interval = setInterval(() => {
        allVideos[index].timeLineData =
          watchingVideo.currentTime / watchingVideo.duration;
        window.localStorage.setItem("videosTimeLine", JSON.stringify(allData));
      }, 3000);
    });
    watchingVideo.addEventListener("ended", (e) => {
      allVideos[index].timeLineData = 1;
      window.localStorage.setItem("videosTimeLine", JSON.stringify(allData));
      clearInterval(interval);
    });
  });
}
function reAssigntComment() {
  addComment = document.querySelector(".add-comment");
  mainCommentForm = document.querySelector("#mainCommentForm");
  mainCommentInput = document.querySelector("#mainCommentInput");
  mainCommnetCancel = document.querySelector("#mainCommentForm #cancelComment");
  mainCommnetSubmit = document.querySelector("#mainCommentForm #submitComment");
  comments = document.querySelectorAll(".comments .comments-section .comment");
  mainComments = document.querySelectorAll(
    ".comments .comments-section .comment .main-comment"
  );
  ReplyForm = document.querySelectorAll(".main-comment #replyForm");
  replyInput = document.querySelectorAll(".main-comment #replyInput");
  replyCancel = document.querySelectorAll(
    ".main-comment #replyForm #cancelReply"
  );
  replySubmit = document.querySelectorAll(
    ".main-comment #replyForm #submitReply"
  );
  commentsReply = document.querySelectorAll(
    ".comments .comments-section .main-comment .comment-interacte .reply button"
  );
  showHideReplys = document.querySelectorAll(
    ".comments .show-hide-replys-btn button"
  );
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    document
      .querySelector(".mainVideo .video-overlay .video-overlay-pc")
      .remove();
  } else {
    document
      .querySelector(".mainVideo .video-overlay .video-overlay-mobile")
      .remove();
  }
  for (let i = 0; i < ReplyForm.length; i++) {
    ReplyForm[i].addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
  for (let i = 0; i < commentsReply.length; i++) {
    commentsReply[i].addEventListener("click", (e) => {
      whichComment = searchinCommentArray(
        videosArray[watchVid].comments,
        +commentsReply[i].getAttribute("check")
      );
      mainComments[whichComment].classList.add("active");
      // replyInput[whichComment].innerText = `@${videosArray[watchVid].comments[whichComment].commenterUser}`
      replyInput[whichComment].focus();
    });
  }
  for (let i = 0; i < replyCancel.length; i++) {
    replyCancel[i].addEventListener("click", (e) => {
      whichCancel = searchinCommentArray(
        videosArray[watchVid].comments,
        +replyCancel[i].getAttribute("check")
      );
      mainComments[whichCancel].classList.remove("active");
    });
  }
  for (let i = 0; i < replySubmit.length; i++) {
    replySubmit[i].addEventListener("click", (e) => {
      whichSubmit = searchinCommentArray(
        videosArray[watchVid].comments,
        +replySubmit[i].getAttribute("check")
      );
      if (replyInput[whichSubmit].innerText.length > 0) {
        mainComments[whichSubmit].classList.remove("active");
        UploadReply();
      }
    });
  }
  for (let i = 0; i < showHideReplys.length; i++) {
    let w;
    showHideReplys[i].addEventListener("click", (e) => {
      w = searchinCommentArray(
        videosArray[watchVid].comments,
        +showHideReplys[i].getAttribute("check")
      );
      if (comments[w].classList.contains("open-reply")) {
        comments[w].classList.remove("open-reply");
      } else {
        comments[w].classList.add("open-reply");
      }
    });
    console.log(showHideReplys);
  }
}
mainCommentInput.addEventListener("paste", handlePaste);
for (let i = 0; i < replyInput.length; i++) {
  replyInput[i].addEventListener("paste", handlePaste);
}

mainCommentForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
mainCommentInput.addEventListener("paste", handlePaste);

mainCommentInput.addEventListener("focus", (e) => {
  addComment.classList.add("active");
});

mainCommnetCancel.addEventListener("click", (e) => {
  addComment.classList.remove("active");
});

mainCommnetSubmit.addEventListener("click", (e) => {
  if (mainCommentInput.innerText.length > 0) {
    UploadComment();
    addComment.classList.remove("active");
  }
});
function UploadComment() {
  const comment = {
    value: mainCommentInput.innerText,
    date: Date.now(),
    likes: [],
    dislikes: [],
    replys: [],
    channel: { user: user.user, image: user.image, name: user.name },
  };
  videoData.comments.push(comment);
  addOrUpdateChannel(videoOwner)
    .then(() => {
      appendComments(videoData.comments, commentsSection);
    })
    .catch((error) => console.log(error));
}
function likeComment(comment, likeBtn, disBtn) {
  console.log(comment.likes.length);
  if (returnindex(comment.likes, "user", user.user) !== undefined) {
    removeLikeComment(comment, likeBtn, disBtn);
  } else {
    console.log(returnindex(comment.dislike, "user", user.user));
    if (returnindex(comment.dislikes, "user", user.user) !== undefined) {
      removeDisLikeComment(comment, likeBtn, disBtn);
    }
    addLikeComment(comment, likeBtn, disBtn);
  }
}
function disLikeComment(comment, likeBtn, disBtn) {
  if (returnindex(comment.dislikes, "user", user.user) !== undefined) {
    removeDisLikeComment(comment, likeBtn, disBtn);
  } else {
    if (returnindex(comment.likes, "user", user.user) !== undefined) {
      removeLikeComment(comment, likeBtn, disBtn);
    }
    addDisLikeComment(comment, likeBtn, disBtn);
  }
}
function addLikeComment(comment, likeBtn, disBtn) {
  return new Promise((resolve, reject) => {
    comment.likes.push({ user: user.user });
    likeBtn.classList.add("active");
    addOrUpdateChannel(videoOwner)
      .then(() => {
        resolve();
      })
      .catch((error) => reject(error));
  });
}
function removeLikeComment(comment, likeBtn, disBtn) {
  return new Promise((resolve, reject) => {
    let userIndex = comment.likes.findIndex((obj) => obj.user === user.user);
    if (userIndex !== -1) {
      comment.likes.splice(userIndex, 1);
    }
    likeBtn.classList.remove("active");
    addOrUpdateChannel(videoOwner)
      .then(() => {
        resolve();
      })
      .catch((error) => reject(error));
  });
}

function addDisLikeComment(comment, likeBtn, disBtn) {
  return new Promise((resolve, reject) => {
    comment.dislikes.push({ user: user.user });
    disBtn.classList.add("active");
    addOrUpdateChannel(videoOwner)
      .then(() => {
        resolve();
      })
      .catch((error) => reject(error));
  });
}
function removeDisLikeComment(comment, likeBtn, disBtn) {
  return new Promise((resolve, reject) => {
    let userIndex = comment.dislikes.findIndex((obj) => obj.user === user.user);
    if (userIndex !== -1) {
      comment.dislikes.splice(userIndex, 1);
    }
    disBtn.classList.remove("active");
    addOrUpdateChannel(videoOwner)
      .then(() => {
        resolve();
      })
      .catch((error) => reject(error));
  });
}
function UploadReply(value, comment) {
  const reply = {
    value: value,
    date: Date.now(),
    likes: [],
    dislikes: [],
    channel: { user: user.user, image: user.image, name: user.name },
  };
  comment.replys.push(reply);
  addOrUpdateChannel(videoOwner)
    .then(() => {})
    .catch((error) => console.log(error));
}
function addVideoToHistory(video) {
  const playlist = searchInArrayValue(user.playlist, "id", "H");

  if (!playlist) {
    console.error("Playlist not found");
    return;
  }

  const videoCopy = { videoId: video.id };

  // Find if the video is already in the playlist
  const videoIndex = playlist.videos.findIndex((v) => v.videoId === video.id);
  let order = 0;

  // Calculate the order for the new video
  playlist.videos.forEach((v) => {
    if (v.order >= order) {
      order = v.order + 1;
    }
  });

  videoCopy.order = order;
  videoCopy.addedDate = Date.now();

  if (videoIndex === -1) {
    // Video not found in the playlist, add it
    playlist.videos.push(videoCopy);
  } else {
    const existingVideo = playlist.videos[videoIndex];
    const isOld = Date.now() - existingVideo.addedDate > 24 * 60 * 60 * 1000;

    if (isOld) {
      // If the existing video is older than 24 hours, add a new entry
      playlist.videos.push(videoCopy);
    } else {
      // If the existing video is within 24 hours, remove and re-add it
      playlist.videos.splice(videoIndex, 1);
      playlist.videos.push(videoCopy);
    }
  }

  // Update the playlist in the database
  addVideoToPlaylist("channels", user.id, "playlist", "H", playlist.videos)
    .then((updatedObject) => {})
    .catch((error) => {
      console.error("Error:", error);
    });
}
function addVideoToLV(video) {}
function removeVideoFromLV(video) {}
function applyVisualEffects(video, canvas1, canvas2, updateSpeed) {
  const ctx1 = canvas1.getContext("2d", { willReadFrequently: true });
  const ctx2 = canvas2.getContext("2d", { willReadFrequently: true });
  let captureInterval;
  let transitionInterval;
  let imageData1;
  let imageData2;
  function resizeCanvas() {
    canvas1.width = video.videoWidth;
    canvas1.height = video.videoHeight;
    canvas2.width = video.videoWidth;
    canvas2.height = video.videoHeight;
  }
  video.addEventListener("play", function () {
    resizeCanvas();
    captureFrame();
    captureInterval = setInterval(captureFrame, updateSpeed); // Capture frame every 3 seconds
  });
  video.addEventListener("pause", function () {
    clearInterval(captureInterval); // Stop capturing frames when video is paused
    cancelAnimationFrame(animationId); // Stop the animation when the video is paused
  });
  function captureFrame() {
    if (video.paused || video.ended) return;
    // Capture the current frame from the video onto the second canvas
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.drawImage(video, 0, 0, canvas2.width, canvas2.height);
    // Clear the filter for future operations
    ctx2.filter = "none";
    startTransition();
  }
  let animationId; // Variable to store the animation ID
  function startTransition() {
    const frames = 60; // Number of frames for the transition
    const transitionDuration = updateSpeed / 2; // Transition duration in milliseconds (adjust as needed)
    const startTime = performance.now();
    const imageData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
    const imageData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const blendedData = ctx1.createImageData(canvas1.width, canvas1.height); // Create a new ImageData object for the blended result
    function animate() {
      const currentTime = performance.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(1, elapsedTime / transitionDuration);
      // Perform color blending for each pixel
      for (let i = 0; i < blendedData.data.length; i += 4) {
        // Linear interpolation between pixel colors from canvas1 and canvas2
        for (let j = i; j < i + 4; j++) {
          blendedData.data[j] =
            (1 - progress) * imageData1.data[j] + progress * imageData2.data[j];
        }
      }
      // Clear canvas1 before drawing the blended frame
      ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
      // Put the blended image data onto canvas1
      ctx1.putImageData(blendedData, 0, 0);
      if (progress < 1 && !video.paused) {
        // Continue animation if progress is not complete and video is not paused
        requestAnimationFrame(animate);
      }
    }
    animate();
  }
}
hideSidebar.addEventListener("click", function () {
  watchColums.classList.toggle("hide-sidebar");
});
