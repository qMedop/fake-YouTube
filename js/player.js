class customVideoPlayer {
  constructor(videoContainer,controls = {
    controls:true,
    keyboard:true,
    skip:true,
    volume:true,
    playPause:true,
    fullScreen:false,
    settings:true,
    miniPlayer:true,
    timeLineInteract:true,
    timeLineType: 'default',
    preview:true,
    previewType: 'default',
    mobile:false,
  }) {
    this.mainVideoContainer = videoContainer
    this._devicesOverlay()
    this.previewVideo = videoContainer.querySelector('#previewVideo')
    this.loadingWave = videoContainer.querySelector('.loading-wave')
    this.videoCont = videoContainer.querySelector('.videoCont')
    this.playPauseBtn = videoContainer.querySelector('.video-overlay .controlls button.playPause')
    this.fullScereneBtn = videoContainer.querySelector('.video-overlay .controlls .fullScreen')
    this.autoPlayBtn = videoContainer.querySelector('.video-overlay .controlls .autoPlay')
    this.theaterBtn = videoContainer.querySelector('.video-overlay .controlls .theaterMode')
    this.miniPlayerrBtn = videoContainer.querySelector('.video-overlay .controlls .miniPlayer')
    this.volumeBtn = videoContainer.querySelector('.video-overlay .controlls .volume')
    this.currentTime = videoContainer.querySelector('.video-overlay .controlls .currentTime')
    this.allTime = videoContainer.querySelector('.video-overlay .controlls .allTime')
    this.timeLineContaienr = videoContainer.querySelector('.timeline-container .timeline-holder')
    this.going = videoContainer.querySelector('.timeline-container #going')
    this.previewimgContainer = videoContainer.querySelector('.timeline-container .timeline-holder .preview-img-container')
    this.timelineCurrent = videoContainer.querySelector('.timeline-container .timeline-holder .timelineCurrent')
    this.volumeContainer = videoContainer.querySelector('.video-overlay .controlls .volume-container')
    this.videoControlls = videoContainer.querySelector('.video-overlay')
    this.volumeChanger = videoContainer.querySelector('.video-overlay .controlls .volume-container .volume-changer .line')
    this.volumeDiv = videoContainer.querySelector('.video-overlay .controlls .volume-container .volume-changer')
    this.settingBtn = videoContainer.querySelector('.videoControlls .controlls .settings')
    this.settingCont = videoContainer.querySelector('.videoControlls .settings-overlay')
    this.annotationsBtn = videoContainer.querySelector('.videoControlls .settings-overlay .annotations')
    this.annotationsSlider = videoContainer.querySelector('.videoControlls .settings-overlay .annotations .slider')
    this.playbackBtn = videoContainer.querySelector('.videoControlls .settings-overlay .playback-speed')
    this.playbackPanel = videoContainer.querySelector('.videoControlls .settings-overlay .playback-panel')
    this.settingsMain = videoContainer.querySelector('.videoControlls .settings-overlay .main')
    this.playbackPanelContent = videoContainer.querySelector('.videoControlls .settings-overlay .playback-panel-content')
    this.settingsMainContent = videoContainer.querySelector('.videoControlls .settings-overlay .main-content')
    this.thumbIndicaro = videoContainer.querySelector('.timeline .thumb-indicaror')
    this.skipForward = videoContainer.querySelector('.video-overlay .video-anim .skip-forward')
    this.skipBackward = videoContainer.querySelector('.video-overlay .video-anim .skip-backward')
    this.volumeFade = videoContainer.querySelector('.video-overlay .video-anim .volume')
    this.volumePercentage = videoContainer.querySelector('.video-overlay .video-anim .volumePercentage')
    this.video = videoContainer.querySelector('#mainVideo')
    this.settingsContainer = videoContainer.querySelector('.settings-container')
    this.mobile =  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    this.volumeFocus = false
    this.curentVolume = 1
    this.scrrubing = false
    this.skipValue = 5
    this.viewUICheck = false
    this.viewUICheckVolume = false
    this.voluemScrrubing = false
    this.firstTime = true
    this.timeLineHover = false
    this.wasPaused
    this.viewUI
    this.progressInterval
    this.loadingStatue
    this.animtaionTimeOut
    this.animtaionTimeOut2
    this.skipForwardTimeOut
    this.skipBackwardTimeOut
    this.animationElement
    this.controls = controls
    this.video.addEventListener('loadeddata',(e) => {
      this.previewVideo.src = this.video.src
      if(this.firstTime) {
        this._addEventListeners()
      }
      this.loadingWave.classList.remove('loading')
      this.video.addEventListener('progress', this._buffered.bind(this));
      this._assignTime()
      this._observeSrcChange();
    this.firstTime = false
    })
  }

  _handleChangeVideo() {
    this.loadingWave.classList.add('loading')
  }
  _formatTime(time) {
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
  _devicesOverlay() {
    if(this.mobile) {
      let div = this.mainVideoContainer.querySelector('.video-overlay .video-overlay-pc').remove()
      if(div) div.remove()
    } else {
      let div = this.mainVideoContainer.querySelector('.video-overlay .video-overlay-mobile')
      if(div) div.remove()
    }
  }
  _timeOutHandler(contaienr,className,time) {
    clearTimeout(this.animtaionTimeOut)
    contaienr.classList.add(className)
    this.animtaionTimeOut = setTimeout(() => {
      contaienr.classList.remove(className)
    }, time);
  }
  _animationHandler(element,time) {
    if(this.animationElement) {
      this.animationElement.style.display = 'none'
    }
    clearTimeout(this.animtaionTimeOut2)
    element.style.display = 'none'
    setTimeout(() => {
      element.style.display = 'flex'
    }, 10);
    this.animtaionTimeOut2 = setTimeout(() => {
      element.style.display = 'none'
    }, time);
    this.animationElement = element
  }
  _clearOverlay() {
    this.mainVideoContainer.classList.remove('pause')
    this.mainVideoContainer.classList.remove('play')
    this.mainVideoContainer.classList.remove('volumeValue')
  }
  _playPause() {
    if(!this.loadingStatue) {
      if (this.video.paused == true) {
        this.video.play();
        this._clearOverlay()
        this._timeOutHandler(this.mainVideoContainer,'play',1200)
    } else {
        this.video.pause();
        this._clearOverlay()
        this._timeOutHandler(this.mainVideoContainer,'pause',1200)
    }
    this._hideViewUI()
    }
  }
  _fullScreen() {
    if(document.fullscreenElement == null) {
      this.mainVideoContainer.requestFullscreen();
      document.body.classList.add('fullScreen')
    } else {
      document.exitFullscreen();
      document.body.classList.remove('fullScreen')
    }
  }
  _theaterMode() {
    document.body.classList.toggle('theater')
  }
  _toggleMute() {
    if(this.video.volume !== 0) {
      this.curentVolume = this.video.volume
      this.video.volume = 0
      this._checkVolume()
    } else {
      this.video.volume = this.curentVolume
      this._checkVolume()
    }
  }
  _toggleMiniPlayerMode() {
    if (this.mainVideoContainer.classList.contains("mini-player")) {
      document.exitPictureInPicture();
    } else {
      this.video.requestPictureInPicture();
    }
  }
  _assignTime() {
    this.allTime.textContent = this._formatTime(this.video.duration)
    this.timeLineContaienr.style.setProperty("--progress-position", 0);
  }
  _timeupdate() {
    this.currentTime.textContent = this._formatTime(this.video.currentTime)
  }
  _updateTimeLine() {
    if(!this.video.paused) {
      const percent = this.video.currentTime / this.video.duration;
      this.timeLineContaienr.style.setProperty("--progress-position", percent);
    }
    requestAnimationFrame(this._updateTimeLine.bind(this))
  }
  _seekingProgress(e) {
    if(this.timeLineHover || this.scrrubing) {
      this._previewVideo(e)
    }
    if(this.scrrubing) {
      e.preventDefault()
      let x = e.clientX || e.touches[0].clientX;
      const rect = this.timeLineContaienr.getBoundingClientRect();
      const percent = Math.min(Math.max(0, x - rect.x), rect.width) / rect.width;
      const curentTime = percent * this.video.duration;
      let percentMax = (rect.width - this.previewimgContainer.clientWidth / 2) / rect.width;
      let percentLow = 1 - (rect.width - this.previewimgContainer.clientWidth / 2) / rect.width;
      let percentTwo = percent;
      if (percent > percentMax ) {
        percentTwo = percentMax ;
      } else if (percent < percentLow) {
        percentTwo = percentLow;
      }
      // seek mainVideo
      this.video.currentTime = curentTime;
      this.currentTime.textContent = this._formatTime(this.video.currentTime)
      this.timeLineContaienr.style.setProperty("--progress-position", percent);
      if(this.mobile) {
        let percentMax = (rect.width - this.thumbIndicaro.clientWidth / 2) / rect.width;
        let percentLow = 1 - (rect.width - this.thumbIndicaro.clientWidth / 2) / rect.width;
        let percentTwo = percent;
        if (percent > percentMax ) {
          percentTwo = percentMax ;
        } else if (percent < percentLow) {
          percentTwo = percentLow;
        }
      this.timeLineContaienr.style.setProperty("--thumb-position", percentTwo);
      }
    }
  }
  _timeLineDown(e) {
    // e.preventDefault()
    this.mainVideoContainer.classList.add('scrubbing')
    this.scrrubing = true
    this.wasPaused = this.video.paused
    this.video.pause()
    this._seekingProgress(e)
  }
  _timeLineUp(e) {
    if(this.scrrubing) {
      e.preventDefault();
      this.scrrubing = false
      this.mainVideoContainer.classList.remove('scrubbing')
      if(!this.wasPaused) this.video.play()
    }
  }
  _timeLineEnter(e) {
    this.timeLineHover = true
    console.log(this.timeLineHover);
    this._previewVidoeResize()
  }
  _timeLineLeave(e) {
    this.timeLineHover = false
  }
  _previewVideo(e) {
    let x = e.clientX || e.touches[0].clientX;
    const rect = this.timeLineContaienr.getBoundingClientRect();
    const percent = Math.min(Math.max(0, x - rect.x), rect.width) / rect.width;
    const curentTime = percent * this.video.duration;
    let percentMax = (rect.width - this.previewimgContainer.clientWidth / 2) / rect.width;
    let percentLow = 1 - (rect.width - this.previewimgContainer.clientWidth / 2) / rect.width;
    let percentTwo = percent;
    if (percent > percentMax ) {
      percentTwo = percentMax ;
    } else if (percent < percentLow) {
      percentTwo = percentLow;
    }
    //seek previewVideo
    this.previewVideo.currentTime = curentTime
    this.going.textContent = this._formatTime(curentTime)
    this.timeLineContaienr.style.setProperty("--preview-position-img", percentTwo);
    this.timeLineContaienr.style.setProperty("--preview-position", percent);
  }
  _previewVidoeResize() {
    this.previewimgContainer.style.aspectRatio =  this.video.videoWidth / this.video.videoHeight
    this.previewimgContainer.style.height = this.mainVideoContainer.clientHeight / 4.5 + "px";
  }
  _autoPlay() {
    this.autoPlayBtn.classList.toggle('active')
  }
  _buffered() {
    let index = this.video.buffered.length - 1
    if(index >=0) {
      let percent = ((this.video.buffered.end(index) / this.video.duration )* 100)
      console.log(percent);
      this.timeLineContaienr.style.setProperty("--buffered-position", percent);
    }
  }
  _videoQuality() {
    this.videoQuality.textContent = video.videoHeight + 'p'
  }
  _changeVolume(e) {
    const rect = this.volumeChanger.getBoundingClientRect();
    const volumePercent = Math.min(Math.max(0, (e.x - 6) - rect.x), rect.width) / rect.width;
    this.mainVideoContainer.dataset.volumepercent = this.video.volume
    this.volumeChanger.style.setProperty("--volume-position", this.volumeContainer.dataset.volumepercent);
    this.video.volume = volumePercent
    this._checkVolume()
  }
  _checkVolume() {
    this.mainVideoContainer.dataset.volumepercent = this.video.volume
    this.volumeChanger.style.setProperty("--volume-position", this.mainVideoContainer.dataset.volumepercent);
    if(this.video.volume > .5) {
      this.mainVideoContainer.dataset.volumelevel = 'high'
    }else if(this.video.volume < .5 && this.video.volume > 0) {
      this.mainVideoContainer.dataset.volumelevel = 'mid'
    }else if(this.video.volume === 0) {
      this.mainVideoContainer.dataset.volumelevel = 'muted'
    }
  }
  _increaseVolume(e) {
    if (this.video.volume < 1) {
      if (this.video.volume >= 0.9) {
        this.video.volume = 1;
      } else {
        this.video.volume = this.video.volume + 0.05;
      }
    }
    this._checkVolume()
    if(e.type === 'keydown') {
      this._animationHandler(this.volumeFade,600)
      this._volumeValue()
    }
  }
  _decreaceVolume(e) {
    if (this.video.volume >= 0) {
      if (this.video.volume <= 0.10) {
        this.video.volume = 0;
      } else {
      this.video.volume -= 0.05;
      }
    }
    this._checkVolume()
    if(e.type === 'keydown') {
      this._animationHandler(this.volumeFade,600)
      this._volumeValue()
    }
  }
  _volumeValue() {
  this.volumePercentage.textContent = `${Math.floor(this.video.volume * 100)}%`
  this._timeOutHandler(this.mainVideoContainer,'volumeValue',600)
  }
  _hideViewUI() {
    clearTimeout(this.viewUI)
    this.mainVideoContainer.classList.add('view-UI')
    if(!this.video.paused && this.viewUICheck === false) {
      this.viewUI = setTimeout(() => {
        this.mainVideoContainer.classList.remove('view-UI')
      }, 3000);
    }
  }
  _skipForward() {
    this.video.currentTime += this.skipValue
    let percent = this.video.currentTime / this.video.duration;
    this.timeLineContaienr.style.setProperty("--progress-position", percent);
    this._hideViewUI()
    this._animationHandler(this.skipForward,600)
    this._timeupdate()
  }
  _skipBackward() {
    this.video.currentTime -= this.skipValue
    let percent = this.video.currentTime / this.video.duration;
    this.timeLineContaienr.style.setProperty("--progress-position", percent);
    this._hideViewUI()
    this._animationHandler(this.skipBackward,600)
    this._timeupdate()
  }
  _handleSettingsMenu() {
    let settingsOverlay = this.settingsContainer.querySelector('.settings-overlay')
    let settingMenuesContainer = this.settingsContainer.querySelector('.settings-container .settings-menues-container')
    let playbackBtns = this.settingsContainer.querySelectorAll('.settings-container .playback-panel-content > div')
    let customSpeedSlider = this.settingsContainer.querySelector('.settings-container #customSpeedSlider')
    let customValue = this.settingsContainer.querySelector('.settings-container #customValue')
    let settingAnimation = false
    let transition = 300
    let settingsMenuStatus = false; // Corrected typo
    let video = this.video
    function hideViewSettings() {
      if (!settingsMenuStatus) {
        settingsMenuStatus = true;
        this.mainVideoContainer.classList.add('settings-menu');
        // Append the main menu when opening
        let mainMenu = settingMenuesContainer.querySelector(`[data-menu="main"]`);
        settingsOverlay.appendChild(mainMenu);
        mainMenu.classList.add('active');
        mainMenu.style.left = '0px'
        setSettingSize(mainMenu,this.mainVideoContainer);
      } else {
        this.mainVideoContainer.classList.remove('settings-menu');
        // Reset to the initial menu after the transition duration
        setTimeout(() => {
          resetToInitialMenu();
        }, transition);
      }
    }
    
    function resetToInitialMenu() {
      let mainMenu = settingMenuesContainer.querySelector(`[data-menu="main"]`);
      let activeMenu = settingsOverlay.querySelector(`.active`);
      settingsMenuStatus = false;
      if (activeMenu && activeMenu !== mainMenu) {
        activeMenu.classList.remove('active');
        activeMenu.style.left = ''; // Reset the style
        settingMenuesContainer.appendChild(activeMenu); // Move it back to its original container
      }
    
      if (mainMenu) {
        mainMenu.classList.remove('active');
        mainMenu.style.left = ''; // Reset the style
        settingMenuesContainer.appendChild(mainMenu); // Move it back to its original container
      }
    }
    
    function setSettingSize(selectedMenu,mainVideoContainer) {
      if (selectedMenu) {
        let height = selectedMenu.querySelector('.settings-insider > div').clientHeight
        let width = selectedMenu.querySelector('.settings-insider > div').clientWidth
        settingsOverlay.style.height = Math.min(mainVideoContainer.clientHeight - 85, height)  + 'px';
        settingsOverlay.style.width = width  + 'px';
        animation()
      }
    }
    function animation() {
      settingsOverlay.classList.add('animation')
      setTimeout(() => {
      settingsOverlay.classList.remove('animation')
      }, transition);
    }
    
    function go(button,mainVideoContainer) {
      let selectedMenu = settingMenuesContainer.querySelector(`[data-menu="${button.dataset.panel}"]`);
      let prevMenu = settingsOverlay.querySelector(`.active`);
      if (selectedMenu && prevMenu) {
        console.log(selectedMenu);
        settingsOverlay.appendChild(selectedMenu);
        setSettingSize(selectedMenu,mainVideoContainer);
        prevMenu.classList.remove('active');
        selectedMenu.classList.add('active');
    
        if (button.getAttribute('id') === 'back') {
          selectedMenu.style.left = `-${prevMenu.clientWidth}px`;
          setTimeout(() => {
            prevMenu.style.left = `${selectedMenu.clientWidth}px`;
            selectedMenu.style.left = `0px`;
          }, 10); // Ensure the DOM has time to apply the initial left position
        } else {
          selectedMenu.style.left = `${prevMenu.clientWidth}px`;
          setTimeout(() => {
            prevMenu.style.left = `-${selectedMenu.clientWidth}px`;
            selectedMenu.style.left = `0px`;
          }, 10); // Ensure the DOM has time to apply the initial left position
        }
    
        setTimeout(() => {
          settingMenuesContainer.appendChild(prevMenu);
          prevMenu.style.left = ''; // Reset the style
        }, transition);
        playbackCheck()
      }
    }
    function handleVideoSpeed(value) {
    video.playbackRate = +value
    playbackCheck()
    }
    function playbackCheck() {
      let found = false
      let videoSpeed = video.playbackRate
      let customSpeedDiv = settingsOverlay.querySelector('#customSpeedDiv')
      const colorContainer = customSpeedSlider.querySelector(".color-container");
      playbackBtns.forEach(div => {
        let button = div.querySelector('button')
        if(button && button.dataset.speed == +videoSpeed) {
          settingsOverlay.classList.remove('custom-speed')
          div.classList.add('active')
          customSpeedDiv.classList.remove('active')
          found = true
        } else {
          div.classList.remove('active')
        }
        if(!found) {
          settingsOverlay.classList.add('custom-speed')
          customSpeedDiv.classList.add('active')
          customSpeedDiv.querySelector('.text').innerHTML = `Custom (${videoSpeed.toFixed(2)})`
        }
      });
      const initialLeft = ((video.playbackRate - 0.25) / (3 - 0.25)) * customSpeedSlider.querySelector("#slider").getBoundingClientRect().width;
      customSpeedSlider.querySelector("#thumb").style.left = `${initialLeft - thumb.clientWidth / 2}px`;
      colorContainer.style.width = initialLeft / customSpeedSlider.querySelector("#slider").getBoundingClientRect().width * 100 + '%'
      customValue.textContent = video.playbackRate
    }
    function activateSlider(sliderContainer, min, max, step) {
    const slider = sliderContainer.querySelector("#slider");
    const thumb = sliderContainer.querySelector("#thumb");
    const colorContainer = sliderContainer.querySelector(".color-container");
    let rect = slider.getBoundingClientRect()

    let mouseDown = false;

    let value = 1.5;
    let newValue = value.toFixed(2);
    const initialLeft = ((value - min) / (max - min)) * slider.clientWidth;
    customValue.textContent = newValue
    thumb.style.left = `${initialLeft - thumb.clientWidth / 2}px`;

    function updateSlider(e, forceUpdate) {
      if (mouseDown || forceUpdate) {
        let x = e.clientX || e.touches[0].clientX;
        const rect = slider.getBoundingClientRect();
        const percent = Math.min(Math.max(0, x - rect.x), rect.width) / rect.width;
        colorContainer.style.width = percent * 100 + '%'
        e.preventDefault();
        const offsetX = x - rect.left;
        const relativeX = Math.min(
          Math.max(offsetX, 0),
          slider.clientWidth
        );
        newValue = (
          Math.round(
            ((relativeX / slider.clientWidth) * (max - min)) / step
          ) *
            step +
          min
        ).toFixed(2);
        thumb.style.left = `${relativeX - thumb.clientWidth / 2}px`;

        video.playbackRate = newValue
        customValue.textContent = newValue
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
    }
    activateSlider(customSpeedSlider,0.25,3,0.05)
    this.settingBtn.addEventListener('click', hideViewSettings.bind(this));
    settingsOverlay.addEventListener('click', (e) => {
      let button = e.target.closest('button');
      if (button && button.dataset.panel) {
        go(button,this.mainVideoContainer);
      }
      if (button && button.dataset.speed) {
        handleVideoSpeed(button.dataset.speed);
      }
    });
  }
  _observeSrcChange() {
    // Create a new MutationObserver
    this.srcObserver = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
          this.video.removeEventListener('progress', this._buffered);
          this._handleChangeVideo()
        }
      });
    });

    // Define the options for the observer (watch for attribute changes)
    const observerOptions = { attributes: true };

    // Start observing changes to the video element's src attribute
    this.srcObserver.observe(this.video, observerOptions);
  }
  _handleResize() {
    if(this.mainVideoContainer.clientWidth > 700) {
      this.mainVideoContainer.dataset.buttonssize = 'normal'
    }
    if(this.mainVideoContainer.clientWidth <= 700 && this.mainVideoContainer.clientWidth > 500) {
      this.mainVideoContainer.dataset.buttonssize = 'small'
    }
    if(this.mainVideoContainer.clientWidth <= 500) {
      this.mainVideoContainer.dataset.buttonssize = 'very-small'
    }
  }
  _addEventListeners() {
    this._handleResize()
    this._handleSettingsMenu()
    this._updateTimeLine()
    //assign all time
    this._assignTime()
    //update Video Time
    this.video.addEventListener('timeupdate', () => {
      this._timeupdate()
    });
    window.addEventListener('resize', (e) => {
      this._handleResize() 
    })
    this.mainVideoContainer.addEventListener('click',(e) => {
      let button = e.target.closest('button')
      let video = e.target.closest('video')
      if(button) {
        if(button === this.playPauseBtn) {
          this._playPause()
          }
          if(button === this.volumeChanger) {
            this._changeVolume(e)
            }
            if(button === this.volumeBtn) {
              this._toggleMute()
              }
            console.log(this.controls.fullScreen)
        if(button === this.fullScereneBtn && this.controls.fullScreen) {
          this._fullScreen()
        }
        if(button === this.miniPlayerrBtn) {
          this._toggleMiniPlayerMode()
        }
      }
      if(video) {
        if(video === this.video) {
          this._playPause()
        }
      }
    })
    this.timeLineContaienr.addEventListener('pointerenter' , this._timeLineEnter.bind(this))
    this.timeLineContaienr.addEventListener('pointerleave' , this._timeLineLeave.bind(this))
    this.mainVideoContainer.addEventListener('pointerdown',(e) => {
        if(e.target.closest('.line') === this.volumeChanger) {
          this.voluemScrrubing = true
          console.log(this.voluemScrrubing);
          this.volumeContainer.classList.add('active')
        }
        if(e.target.closest('.timeline-holder') === this.timeLineContaienr) {
          this._timeLineDown(e)
        }
    })
    document.addEventListener('pointermove' , (e) => {
      if(!this.mobile) {
        if(this.voluemScrrubing) {
          e.preventDefault()
          this._changeVolume(e)
        }
        this._seekingProgress(e)
      }
    })
    this.timeLineContaienr.addEventListener('touchmove' ,this._seekingProgress.bind(this),{ passive: false })
    document.addEventListener('pointerup' , (e) => {
      if(this.voluemScrrubing) {
        this.voluemScrrubing = false
        this.volumeContainer.classList.remove('active')
      }
      this._timeLineUp(e)
    })
    this.volumeChanger.addEventListener('wheel', (e) => {
    e.preventDefault()
    if (Math.sign(e.deltaY) === -1)  {
      this._increaseVolume(e)
    }
    if (Math.sign(e.deltaY) === 1)  {
      this._decreaceVolume(e)
    }
    })
    this.volumeDiv.addEventListener('focusin' , () => {
      this.volumeFocus = true
    })
    this.volumeDiv.addEventListener('focusout' , () => {
      this.volumeFocus = false
    })
    this.previewVideo.addEventListener('loadeddata', () => this._previewVidoeResize());
    this.video.addEventListener("pause", () => {
      this.mainVideoContainer.classList.add('paused')
    });
    this.video.addEventListener("play", () => {
      this.mainVideoContainer.classList.remove('paused')
    });
    this.video.onwaiting = (event) => {
      document.body.classList.add("loading");
      this.loadingStatue = true
    };
    this.video.onplaying = (event) => {
      document.body.classList.remove("loading");
      this.loadingStatue = false
    };
    document.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 32:
        case 75:
          e.preventDefault()
          this._playPause();
          break;
        case 70:
          e.preventDefault()
          this._fullScreen();
          break;
        case 84:
          e.preventDefault()
          this._theaterMode();
          break;
        case 'i':
          e.preventDefault()
          this._toggleMiniPlayerMode();
          break;
        case 77:
          e.preventDefault()
          this._toggleMute();
          break;
        case 'ArrowRight':
          e.preventDefault()
          this._skipForward();
          break;
          e.preventDefault()
        case 'ArrowLeft':
          e.preventDefault()
          this._skipBackward();
          break;
        case 'ArrowUp':
          e.preventDefault()
          this._increaseVolume(e);
          break;
        case 'ArrowDown':
          e.preventDefault()
          this._decreaceVolume(e);
          break;
      }
    });
    this.mainVideoContainer.addEventListener('mousemove', () => this._hideViewUI());
    this.mainVideoContainer.addEventListener('touchstart', () => this._hideViewUI());
    this.mainVideoContainer.addEventListener('keydown', () => this._hideViewUI());
  }
}

// if (
//   navigator.userAgent.match(/Android/i) ||
//   navigator.userAgent.match(/iPhone/i)
// ) {
//   document.querySelector('.mainVideo .video-overlay .video-overlay-pc').remove()
// } else {
//   document.querySelector('.mainVideo .video-overlay .video-overlay-mobile').remove()
// }

// let video = document.querySelector('#mainVideo')
// let previewVideo = document.querySelector('.mainVideo #previewVideo')
// let videoCont = document.querySelector('.videoCont')
// let playPauseBtn = document.querySelector('.mainVideo .video-overlay .controlls .playPause')
// let fullScereneBtn = document.querySelector('.mainVideo .video-overlay .controlls .fullScreen')
// let autoPlayBtn = document.querySelector('.mainVideo .video-overlay .controlls .autoPlay')
// let theaterBtn = document.querySelector('.mainVideo .video-overlay .controlls .theaterMode')
// let miniPlayerrBtn = document.querySelector('.mainVideo .video-overlay .controlls .miniPlayer')
// let volumeBtn = document.querySelector('.mainVideo .video-overlay .controlls .volume')
// let currentTime = document.querySelector('.mainVideo .video-overlay .controlls .currentTime')
// let allTime = document.querySelector('.mainVideo .video-overlay .controlls .allTime')
// let timeLineContaienr = document.querySelector('.mainVideo .timeline-container .timeline-holder')
// let going = document.querySelector('.mainVideo .timeline-container #going')
// let previewimgContainer = document.querySelector('.mainVideo .timeline-container .timeline-holder .preview-img-container')
// let timelineCurrent = document.querySelector('.mainVideo .timeline-container .timeline-holder .timelineCurrent')
// let mainVideoContainer = document.querySelector('.mainVideo')
// let volumeContainer = document.querySelector('.mainVideo .video-overlay .controlls .volume-container')
// let videoControlls = document.querySelector('.mainVideo .video-overlay')
// let volumeChanger = document.querySelector('.mainVideo .video-overlay .controlls .volume-container .volume-changer .line')
// let volumeDiv = document.querySelector('.mainVideo .video-overlay .controlls .volume-container .volume-changer')
// let settingBtn = document.querySelector('.mainVideo .videoControlls .controlls .settings')
// let settingCont = document.querySelector('.mainVideo .videoControlls .settings-overlay')
// let annotationsBtn = document.querySelector('.mainVideo .videoControlls .settings-overlay .annotations')
// let annotationsSlider = document.querySelector('.mainVideo .videoControlls .settings-overlay .annotations .slider')
// let playbackBtn = document.querySelector('.mainVideo .videoControlls .settings-overlay .playback-speed')
// let playbackPanel = document.querySelector('.mainVideo .videoControlls .settings-overlay .playback-panel')
// let settingsMain = document.querySelector('.mainVideo .videoControlls .settings-overlay .main')
// let playbackPanelContent = document.querySelector('.mainVideo .videoControlls .settings-overlay .playback-panel-content')
// let settingsMainContent = document.querySelector('.mainVideo .videoControlls .settings-overlay .main-content')
// const thumbIndicaro = document.querySelector('.mainVideo .timeline .thumb-indicaror')
// let progressInterval
// let volumeFocus = false
// let loadingStatue
// if (
//   navigator.userAgent.match(/Android/i) ||
//   navigator.userAgent.match(/iPhone/i)
// ) {
// } else {
//   volumeDiv.addEventListener('focusin' , () => {
//     volumeFocus = true
//   })
//   volumeDiv.addEventListener('focusout' , () => {
//     volumeFocus = false
//   })
  
// }
// document.addEventListener("keydown", (e) => {
//   if(inputFocus === false) {
//     switch (e.keyCode) {
//       case 32:
//       case 75:
//         e.preventDefault();
//         playPause();
//         break;
//       case 70:
//         e.preventDefault();
//         fullScreen();
//         break;
//       case 84:
//         e.preventDefault();
//         theaterMode();
//         break;
//       case 77:
//         e.preventDefault();
//         toggleMute();
//         break;
//       case 37:
//         if(volumeFocus) {
//           e.preventDefault();
//           decreaceVolume()
//           break;
//         } else {
//           e.preventDefault();
//           skipBackward()
//           break;
//         }
//       case 39:
//         if(volumeFocus) {
//           e.preventDefault();
//           increaseVolume()
//           break;
//         } else {
//           e.preventDefault();
//           skipForward()
//           break;
//         }
//       case 38:
//         e.preventDefault();
//         increaseVolume(e)
//         break;
//       case 40:
//         e.preventDefault();
//         decreaceVolume(e)
//       break;
//     }
//   }
// });
