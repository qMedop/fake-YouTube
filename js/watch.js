
const scrollBtn = document.querySelector(
  ".mainVideo .videoControlls .controlls .scroll"
);


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
  ".Wleft .video-interact .video-info .right .like"
);
let videoInteractionDisLike = document.querySelector(
  ".Wleft .video-interact .video-info .right .dislike"
);
let vdieoLikeNumbers = document.querySelector(
  ".Wleft .video-interact .video-info .right .like .text"
);
let videoAbout = document.querySelector(".Wleft .about-video");
let fullscreenHolder = document.querySelector(".full-screen-holder");
let buttonsHandler = document.querySelector(
  ".Wleft .video-interact .video-info .right .buttons-handler"
);
let watchingVideo = document.querySelector("#mainVideo");
let ambientBtn = document.querySelector(
  ".mainVideo .videoControlls .settings-overlay .ambient-mode"
);
let ambientSlider = document.querySelector(
  ".mainVideo .videoControlls .settings-overlay .ambient-mode .slider"
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
let channelImgLink = document.querySelector(
  ".landing .Wleft .video-interact .video-info .chanenl-img a"
);
let mainVideoContainerW = document.querySelector(".mainVideo");
let ambienEffect = document.querySelector('.ambient-effect')
let addComment = document.querySelector('.add-comment')
let mainCommentForm = document.querySelector("#mainCommentForm");
let mainCommentInput = document.querySelector('#mainCommentInput')
let mainCommnetCancel = document.querySelector('#mainCommentForm #cancelComment')
let mainCommnetSubmit = document.querySelector('#mainCommentForm #submitComment')
let comments = document.querySelectorAll('.comments .comments-section .comment')
let mainComments = document.querySelectorAll('.comments .comments-section .comment .main-comment')
let ReplyForm = document.querySelectorAll(".main-comment #replyForm");
let replyInput = document.querySelectorAll(".main-comment #replyInput");
let replyCancel = document.querySelectorAll('.main-comment #replyForm #cancelReply')
let replySubmit = document.querySelectorAll('.main-comment #replyForm #submitReply')
let commentsReply = document.querySelectorAll('.comments .comments-section .main-comment .comment-interacte .reply button')
let showHideReplys = document.querySelectorAll('.comments .show-hide-replys-btn button')
let commentsCount = document.querySelector('.comments #commentsCount')
let whichComment
let whichSubmit
let whichCancel
let videoLike = false;
let videoDisLike = false;

function reAssigntComment() {
addComment = document.querySelector('.add-comment')
mainCommentForm = document.querySelector("#mainCommentForm");
mainCommentInput = document.querySelector('#mainCommentInput')
mainCommnetCancel = document.querySelector('#mainCommentForm #cancelComment')
mainCommnetSubmit = document.querySelector('#mainCommentForm #submitComment')
comments = document.querySelectorAll('.comments .comments-section .comment')
mainComments = document.querySelectorAll('.comments .comments-section .comment .main-comment')
ReplyForm = document.querySelectorAll(".main-comment #replyForm");
replyInput = document.querySelectorAll(".main-comment #replyInput");
replyCancel = document.querySelectorAll('.main-comment #replyForm #cancelReply')
replySubmit = document.querySelectorAll('.main-comment #replyForm #submitReply')
commentsReply = document.querySelectorAll('.comments .comments-section .main-comment .comment-interacte .reply button')
showHideReplys = document.querySelectorAll('.comments .show-hide-replys-btn button')
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  document.querySelector('.mainVideo .video-overlay .video-overlay-pc').remove()
} else {
  document.querySelector('.mainVideo .video-overlay .video-overlay-mobile').remove()
  }
  for(let i = 0; i < ReplyForm.length; i++) {
    ReplyForm[i].addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }
  for(let i = 0; i < commentsReply.length; i++) {
    commentsReply[i].addEventListener('click' , (e) => { 
      whichComment = searchinCommentArray(videosArray[watchVid].comments, +commentsReply[i].getAttribute('check'))
      mainComments[whichComment].classList.add('active')
      // replyInput[whichComment].innerText = `@${videosArray[watchVid].comments[whichComment].commenterUser}`
      replyInput[whichComment].focus()
    })
  }
  for(let i = 0; i < replyCancel.length; i++) {
    replyCancel[i].addEventListener('click' , (e) => { 
      whichCancel = searchinCommentArray(videosArray[watchVid].comments, +replyCancel[i].getAttribute('check'))
      mainComments[whichCancel].classList.remove('active')
    })
  }
  for(let i = 0; i < replySubmit.length; i++) {
    replySubmit[i].addEventListener('click' , (e) => { 
      whichSubmit = searchinCommentArray(videosArray[watchVid].comments, +replySubmit[i].getAttribute('check'))
      if(replyInput[whichSubmit].innerText.length > 0) {
        mainComments[whichSubmit].classList.remove('active')
      UploadReply()
    }
    })
  }
  for(let i = 0; i < showHideReplys.length; i++) {
    let w
    showHideReplys[i].addEventListener('click' , (e) => { 
      w = searchinCommentArray(videosArray[watchVid].comments, +showHideReplys[i].getAttribute('check'))
      if(comments[w].classList.contains('open-reply')) {
      comments[w].classList.remove('open-reply')
      } else {
        comments[w].classList.add('open-reply')
      }
    })
    console.log(showHideReplys);
  }
}
document.addEventListener("keydown", (e) => {
  if (inputFocus === false) {
    switch (e.key.toLowerCase()) {
      case "f":
        e.preventDefault();
        WatchfullScerene();
        break;
    }
}
for(let i = 0; i < replyInput.length; i++) {
  replyInput[i].addEventListener("paste", handlePaste);
}

});

window.onload = () => {
  mainVideo.src = videosArray[watchVid].src;
  previewVideo.src = videosArray[watchVid].src;
  mainImg.src = videosArray[watchVid].thumbnail;
  videoTittle.textContent = videosArray[watchVid].name;
  VideoName.textContent = videosArray[watchVid].name;
  videoUploadDate.textContent = timeSince(videosArray[watchVid].date);
  vdieoAbout.innerText = videosArray[watchVid].descripion;
  uploaderImage.src = videosArray[watchVid].channel.image;
  uploaderName.innerText = videosArray[watchVid].channel.name;
  uploaderSubs.innerText = videosArray[watchVid].channel.subscribers;
  views.innerHTML = videosArray[watchVid].views;
  channelImgLink.href = `channel.html?user=${videosArray[watchVid].channel.user}`
  let a = videosArray[watchVid].comments.length
  for(let i = 0;i < videosArray[watchVid].comments.length ; i++) {
      a += videosArray[watchVid].comments[i].commentreplys.length
    }
    commentsCount.innerText = a
  if (videosArray[watchVid].descripion === "") {
    showMore.textContent = "...About";
  }
  if (videosArray[watchVid].likes === 1) {
    like();
    videoLike = true;
  } else {
    videoLike = false;
  }
  if (videosArray[watchVid].dislike) {
    dislike();
    videoDisLike = true;
  } else {
    videoDisLike = false;
  }
  if (window.localStorage.getItem("ambientMode") == "true") {
    ambientSlider.classList.add("active");
  } else {
    ambientSlider.classList.remove("active");
  }
};
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
} else {
  window.addEventListener("scroll", hideViewNav);
  scrollBtn.addEventListener("click", () => {
    if (window.scrollY <= 200) {
      window.scrollTo({
        top: 200,
        behavior: "smooth",
      });
    }
  });
  videosArray[watchVid].views += 1
  uploadToLocalStorage('videos',videosArray);
  console.log(videosArray[watchVid].views);
  setTimeout(() => {
    document.body.classList.remove('waiting')
  }, 300);
}

function hideViewNav() {
  nav.style.backgroundColor = `rgb(15 15 15 / ${100}%)` 
  if (document.fullscreenElement !== null) {
    if (window.scrollY === 0) {
      nav.classList.add("hide-nav");
    } else {
      nav.classList.remove("hide-nav");
    }
  } else {
    nav.classList.remove("hide-nav");
    let a = Math.min(window.scrollY / 10, 1) * 100
    nav.style.backgroundColor = `rgb(15 15 15 / ${a}%)`
  }
}

window.addEventListener("resize", interactionHandler);

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
interactionHandler();

let abotStatue = false;

videoAbout.addEventListener("click", openAbout);
closeAboutBtn.addEventListener("click", closeAbout);
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
videoInteractionLike.addEventListener("click", like);
videoInteractionDisLike.addEventListener("click", dislike);
function like(e) {
  if (!videoLike) {
    videoInteractionLike.classList.add("active");
    videoInteractionDisLike.classList.remove("active");
    videosArray[watchVid].dislike = false;
    videosArray[watchVid].likes = 1;
    uploadToLocalStorage('videos',videosArray)
    videoDisLike = false;
    vdieoLikeNumbers.textContent = videosArray[watchVid].likes;
    setTimeout(() => {
      videoLike = true;
    }, 100);
  }
  if (videoLike) {
    videoInteractionLike.classList.remove("active");
    videoInteractionDisLike.classList.remove("active");
    videosArray[watchVid].dislike = false;
    videosArray[watchVid].likes = 0;
    uploadToLocalStorage('videos',videosArray)
    videoDisLike = false;
    vdieoLikeNumbers.textContent = videosArray[watchVid].likes;
    // vdieoLikeNumbers.textContent = ''
    setTimeout(() => {
      videoLike = false;
    }, 100);
  }
}
function dislike(e) {
  if (!videoDisLike) {
    videoInteractionDisLike.classList.add("active");
    videoInteractionLike.classList.remove("active");
    videosArray[watchVid].likes = 0;
    videosArray[watchVid].dislike = true;
    uploadToLocalStorage('videos',videosArray)
    videoLike = false;
    vdieoLikeNumbers.textContent = videosArray[watchVid].likes;
  }
  if (videoDisLike) {
    videoInteractionDisLike.classList.remove("active");
    videoInteractionLike.classList.remove("active");
    videosArray[watchVid].likes = 0;
    videosArray[watchVid].dislike = false;
    uploadToLocalStorage('videos',videosArray)
    videoLike = false;
    vdieoLikeNumbers.textContent = videosArray[watchVid].likes;
    setTimeout(() => {
      videoDisLike = false;
    }, 100);
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

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

// ctx.filter = 'blur(1px)'

let step;

let draw = () => {
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
};

const drawloop = () => {
  draw();
  window.requestAnimationFrame(drawloop);
};

watchingVideo.addEventListener("loadeddata", draw);
watchingVideo.addEventListener("seeked", draw, false);
watchingVideo.addEventListener("play", drawloop);

watchingVideo.addEventListener("loadeddata", () => {
  watchingVideo.addEventListener("play", () => {
    draw();
    ambientModeCheck();
  });
});
ambientBtn.addEventListener("click", () => {
  if (window.localStorage.getItem("ambientMode") == "false") {
    window.localStorage.setItem("ambientMode", "true");
  } else {
    window.localStorage.setItem("ambientMode", "false");
  }
  ambientModeCheck();
});

function ambientModeCheck(e) {
  if (window.localStorage.getItem("ambientMode") == "true") {
    document.body.classList.add("ambient-mode");
    ambientSlider.classList.add("active");
  } else {
    document.body.classList.remove("ambient-mode");
    ambientSlider.classList.remove("active");
  }
}
mainCommentInput.addEventListener("paste", handlePaste);
for(let i = 0; i < replyInput.length; i++) {
replyInput[i].addEventListener("paste", handlePaste);
}
function handlePaste(event) {
  event.preventDefault();

  // Get pasted text
  const pastedText = (event.clipboardData || clipboardData).getData(
    "text/plain"
  );

  // Remove unwanted styles or formatting here if needed
  // For simplicity, this example removes any HTML tags
  const sanitizedText = pastedText.replace(/<[^>]+>/g, "");

  // Insert sanitized text into the editable div
  document.execCommand("insertText", false, sanitizedText);
}

fullScereneBtnWatch.addEventListener("click", (e) => {
  WatchfullScerene();
});
document.addEventListener('fullscreenchange', (e) => {
  if(document.fullscreenElement !== null) {
  } else {
    videoCont.appendChild(mainVideoHolder);
    document.body.classList.remove("fullScreen");
    nav.classList.remove("hide-nav");
    previewimgSize();
  }
})
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
} else {
  mainVideoContainerW.addEventListener("dblclick", (e) => {
    if (e.target.toString() === "[object HTMLVideoElement]") {
      WatchfullScerene();
    }
  });
}
function WatchfullScerene(e) {
  if (document.fullscreenElement == null) {
    fullscreenHolder.appendChild(mainVideoHolder);
    console.log('object');
    html.requestFullscreen();
    document.body.classList.add("fullScreen");
    setTimeout(() => {
      nav.classList.add("hide-nav");
    }, 50);
    window.scrollTo(0, 0);
    previewimgSize();
  } else {
    document.exitFullscreen();
  }
  console.log('object');
}


mainCommentForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
mainCommentInput.addEventListener("paste", handlePaste);
// for(let i = 0; i < ReplyForm.length; i++) {
//   ReplyForm[i].addEventListener("submit", (e) => {
//     e.preventDefault();
//   });
// }


mainCommentInput.addEventListener('focus', (e) => {
  addComment.classList.add('active')
})

mainCommnetCancel.addEventListener('click', (e) => {
  addComment.classList.remove('active')
})

mainCommnetSubmit.addEventListener('click', (e) => {
  if(mainCommentInput.innerText.length > 0) {
    UploadComment()
    addComment.classList.remove('active')
  }
})
function UploadComment(e) {
  const comment = {
    commentValue: mainCommentInput.innerText,
    commentDate: Date.now(),
    commentLikes: 0,
    commentDisLike: false,
    commenterUser: channelName,
    commenterImgae: channelImg,
    commentreplys: [],
  }
  videosArray[watchVid].comments.push(comment)
  mainCommentInput.innerText = ''
  uploadToLocalStorage('videos',videosArray)
  commentsSection.innerHTML =''
  appendComments(videosArray[watchVid].comments)
  reAssigntComment()
}
function UploadReply(e) {
  const reply = {
    replyValue: replyInput[whichSubmit].innerText,
    replyDate: Date.now(),
    replyLikes: 0,
    replyDisLike: false,
    replyerUser: channelName,
    replyerImgae: channelImg,
  }
  videosArray[watchVid].comments[whichSubmit].commentreplys.push(reply)
  replyInput[whichSubmit].innerText = ''
  uploadToLocalStorage('videos',videosArray)
  commentsSection.innerHTML =''
  appendComments(videosArray[watchVid].comments)
  reAssigntComment()
}

for(let i = 0; i < commentsReply.length; i++) {
  commentsReply[i].addEventListener('click' , (e) => { 
    whichComment = searchinCommentArray(videosArray[watchVid].comments, +commentsReply[i].getAttribute('check'))
    mainComments[whichComment].classList.add('active')
    // replyInput[whichComment].innerText = `@${videosArray[watchVid].comments[whichComment].commenterUser}`
    replyInput[whichComment].focus()
  })
}
for(let i = 0; i < replyCancel.length; i++) {
  replyCancel[i].addEventListener('click' , (e) => { 
    whichCancel = searchinCommentArray(videosArray[watchVid].comments, +replyCancel[i].getAttribute('check'))
    mainComments[whichCancel].classList.remove('active')
  })
}
for(let i = 0; i < replySubmit.length; i++) {
  replySubmit[i].addEventListener('click' , (e) => { 
    whichSubmit = searchinCommentArray(videosArray[watchVid].comments, +replySubmit[i].getAttribute('check'))
    if(replyInput[whichSubmit].innerText.length > 0) {
      mainComments[whichSubmit].classList.remove('active')
    UploadReply()
  }
  })
}
for(let i = 0; i < showHideReplys.length; i++) {
  let w
  showHideReplys[i].addEventListener('click' , (e) => { 
    w = searchinCommentArray(videosArray[watchVid].comments, +showHideReplys[i].getAttribute('check'))
    if(comments[w].classList.contains('open-reply')) {
    comments[w].classList.remove('open-reply')
    } else {
      comments[w].classList.add('open-reply')
    }
  })
}

