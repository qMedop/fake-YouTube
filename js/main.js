const topBarPc = `
<div class="first">
  <div class="Options">
    <button id="optionsButton">
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
        style="pointer-events: none; display: block">
        <g class="style-scope yt-icon">
          <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" class="style-scope yt-icon"></path>
        </g>
      </svg>
    </button>
  </div>
  <div id="logoHome" title="YouTube Home" class="logo">
    <p>EG</p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 380.9 85.1" focusable="false" style="">
    <path fill="#ff0000" d="M 60.699219 0.30078125 C 60.699219 0.30078125 22.699219 0.30078125 13.199219 2.8007812 C 7.9992187 4.2007813 3.9 8.3 2.5 13.5 C 0 23 0 42.699219 0 42.699219 C 0 42.699219 0 62.500391 2.5 71.900391 C 3.9 77.100391 7.9992188 81.199609 13.199219 82.599609 C 22.699219 85.099609 60.699219 85.099609 60.699219 85.099609 C 60.699219 85.099609 98.699219 85.099609 108.19922 82.599609 C 113.39922 81.199609 117.50039 77.100391 118.90039 71.900391 C 121.40039 62.400391 121.40039 42.699219 121.40039 42.699219 C 121.40039 42.699219 121.40039 23 118.90039 13.5 C 117.50039 8.3 113.39922 4.2007812 108.19922 2.8007812 C 98.699219 0.30078125 60.699219 0.30078125 60.699219 0.30078125 z M 48.5 24.5 L 80.099609 42.800781 L 48.5 61 L 48.5 24.5 z " style="
  "></path>
      <path fill="#ffffff" d="M 48.5,61 80.1,42.8 48.5,24.5 Z" style="
  "></path>
    <path d="M147.1 55.5L133.5 6.2h11.9l4.8 22.3c1.2 5.5 2.1 10.2 2.7 14.1h.3c.4-2.8 1.3-7.4 2.7-14l5-22.4h11.9L159 55.5v23.7h-11.8l-.1-23.7zm29.2 22.1c-2.4-1.6-4.1-4.1-5.1-7.6-1-3.4-1.5-8-1.5-13.6v-7.7c0-5.7.6-10.3 1.7-13.8 1.2-3.5 3-6 5.4-7.6 2.5-1.6 5.7-2.4 9.7-2.4 3.9 0 7.1.8 9.5 2.4s4.1 4.2 5.2 7.6 1.7 8 1.7 13.8v7.7c0 5.7-.5 10.2-1.6 13.7-1.1 3.4-2.8 6-5.2 7.6-2.4 1.6-5.7 2.4-9.8 2.4-4.3-.1-7.6-.9-10-2.5zm13.5-8.3c.7-1.7 1-4.6 1-8.5V44.2c0-3.8-.3-6.6-1-8.4s-1.8-2.6-3.5-2.6c-1.6 0-2.8.9-3.4 2.6-.7 1.8-1 4.6-1 8.4v16.6c0 3.9.3 6.8 1 8.5.6 1.7 1.8 2.6 3.5 2.6 1.5 0 2.7-.9 3.4-2.6zm51.7-43.4v53.3h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.9h12V65c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.9h12z"></path>
    <path d="M274.1 15.9h-11.9v63.3h-11.7V16h-11.9V6.4h35.5v9.5z"></path>
    <path d="M303 25.9v53.3h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.9h12V65c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.9h12zm39.7 8.5c-.7-3.4-1.9-5.8-3.5-7.3s-3.9-2.3-6.7-2.3c-2.2 0-4.3.6-6.2 1.9-1.9 1.2-3.4 2.9-4.4 4.9h-.1V3.5h-11.6v75.7h9.9l1.2-5h.3c.9 1.8 2.3 3.2 4.2 4.3 1.9 1 3.9 1.6 6.2 1.6 4.1 0 7-1.9 8.9-5.6 1.9-3.7 2.9-9.6 2.9-17.5v-8.4c0-6.2-.4-10.8-1.1-14.2zm-11 21.7c0 3.9-.2 6.9-.5 9.1-.3 2.2-.9 3.8-1.6 4.7-.8.9-1.8 1.4-3 1.4-1 0-1.9-.2-2.7-.7-.8-.5-1.5-1.2-2-2.1V38.3c.4-1.4 1.1-2.6 2.1-3.6 1-.9 2.1-1.4 3.2-1.4 1.2 0 2.2.5 2.8 1.4.7 1 1.1 2.6 1.4 4.8.3 2.3.4 5.5.4 9.6l-.1 7zm29.1.4v2.7c0 3.4.1 6 .3 7.7.2 1.7.6 3 1.3 3.7.6.8 1.6 1.2 3 1.2 1.8 0 3-.7 3.7-2.1.7-1.4 1-3.7 1.1-7l10.3.6c.1.5.1 1.1.1 1.9 0 4.9-1.3 8.6-4 11s-6.5 3.6-11.4 3.6c-5.9 0-10-1.9-12.4-5.6-2.4-3.7-3.6-9.4-3.6-17.2v-9.3c0-8 1.2-13.8 3.7-17.5s6.7-5.5 12.6-5.5c4.1 0 7.3.8 9.5 2.3s3.7 3.9 4.6 7c.9 3.2 1.3 7.6 1.3 13.2v9.1h-20.1v.2zm1.5-22.4c-.6.8-1 2-1.2 3.7s-.3 4.3-.3 7.8v3.8h8.8v-3.8c0-3.4-.1-6-.3-7.8-.2-1.8-.7-3-1.3-3.7-.6-.7-1.6-1.1-2.8-1.1-1.3 0-2.3.4-2.9 1.1z"></path>
  </svg>
  </div>
</div>
<div class="second">
  <form id="searchForm" action="search.html">
    <div class="search">
      <input id="inputSearch" type="text" placeholder="Search" />
    </div>
    <div class="search-btn">
      <input type="submit" value="" id="searchSubmitBtn">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
    </div>
      </form>
    <div class="voice">
      <button id="voiceBtn">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
      </button>
    </div>
</div>
<div class="third">
  <div class="add">
    <button id="addBtn">
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
        style="pointer-events: none; display: block">
        <g class="style-scope yt-icon">
          <path
            d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
            class="style-scope yt-icon"></path>
        </g>
      </svg>
    </button>
  </div>
  <div class="notifications">
    <button id="notificationsBtn">
      <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
        style="pointer-events: none; display: block">
        <g class="style-scope yt-icon">
          <path
            d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
            class="style-scope yt-icon"></path>
        </g>
      </svg>
    </button>
  </div>
  <div class="login">
    <button id="loginBtn">
      <img id="userImage" src="imgs/user.jpg" alt="" />
    </button>
</div>
</div>
`;
const rightBarPc = `    <div class="left">
<div class="home" id="active">
<a href="home.html">
  <button id="homeBtn"> 
  <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block">
    <g class="style-scope yt-icon">
      <path d="m12 4.44 7 6.09V20h-4v-6H9v6H5v-9.47l7-6.09m0-1.32-8 6.96V21h6v-6h4v6h6V10.08l-8-6.96z" class="style-scope yt-icon"></path>
    </g>
  </svg>
  <span>Home</span>
  </button>
  </a>
</div>
<div class="shorts">
  <button id="shortsBtn">
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
      style="pointer-events: none; display: block">
      <g height="24" viewBox="0 0 24 24" width="24" class="style-scope yt-icon">
        <path
          d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
          class="style-scope yt-icon"></path>
      </g>
    </svg>
    <span>Shorts</span>
  </button>
</div>
<div class="subs">
  <button id="subsBtn">
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
      style="pointer-events: none; display: block">
      <g class="style-scope yt-icon">
        <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
          class="style-scope yt-icon"></path>
      </g>
    </svg>
    <span>Subscriptions</span>
  </button>
</div>
<div class="library">
  <button id="libraryBtn">
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon">
      <g class="style-scope yt-icon">
        <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
          class="style-scope yt-icon"></path>
      </g>
    </svg>
    <span>Library</span>
  </button>
</div>
<div class="downloads">
  <button id="downloadBtn">
    <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
      style="pointer-events: none; display: block">
      <g class="style-scope yt-icon">
        <path d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"
          class="style-scope yt-icon"></path>
      </g>
    </svg>
    <span>Downloads</span>
  </button>
</div>
</div>`;
const account = function(user) {
  return `<div class="account-setting">
  <div>
    <div class="account-s">
      <div class="pic"><img id="userImage" src="${user.image}" alt="" /></div>
      <div class="info">
        <p>${user.name}</p>
        <p>your-email@gmail.com</p>
        <p><a href="#">Manage Your Google Account</a></p>
      </div>
      <div class="close"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0,0,256,256" width="50px" height="50px" fill-rule="nonzero">
          <g fill="#f1f1f1" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
            stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
            font-family="none" font-weight="none" font-size="none" text-anchor="none"
            style="mix-blend-mode: normal">
            <g transform="scale(5.12,5.12)">
              <path
                d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z">
              </path>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
  <div class="account-options">
    <div class="first-s">
      <div class="one">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Your Channel</p>
      </div>
      <div class="two">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"
            class="style-scope yt-icon">
            <path
              d="M10,9.35,15,12l-5,2.65ZM12,3a.73.73,0,0,0-.31.06L4.3,7.28A.79.79,0,0,0,4,7.8v8.4a.79.79,0,0,0,.3.52l7.39,4.22a.83.83,0,0,0,.62,0l7.39-4.22a.79.79,0,0,0,.3-.52V7.8a.79.79,0,0,0-.3-.52L12.31,3.06A.73.73,0,0,0,12,3m0-1a1.6,1.6,0,0,1,.8.19l7.4,4.22A1.77,1.77,0,0,1,21,7.8v8.4a1.77,1.77,0,0,1-.8,1.39l-7.4,4.22a1.78,1.78,0,0,1-1.6,0L3.8,17.59A1.77,1.77,0,0,1,3,16.2V7.8a1.77,1.77,0,0,1,.8-1.39l7.4-4.22A1.6,1.6,0,0,1,12,2Zm0,4a.42.42,0,0,0-.17,0l-4.7,2.8A.59.59,0,0,0,7,9.19V14.8a.65.65,0,0,0,.13.37l4.7,2.8A.42.42,0,0,0,12,18a.34.34,0,0,0,.17,0l4.7-2.81A.56.56,0,0,0,17,14.8V9.19a.62.62,0,0,0-.13-.37L12.17,6A.34.34,0,0,0,12,6m0-1a1.44,1.44,0,0,1,.69.17L17.39,8A1.46,1.46,0,0,1,18,9.19V14.8A1.46,1.46,0,0,1,17.39,16l-4.7,2.81A1.44,1.44,0,0,1,12,19a1.4,1.4,0,0,1-.68-.17L6.62,16A1.47,1.47,0,0,1,6,14.8V9.19A1.47,1.47,0,0,1,6.62,8l4.7-2.8A1.4,1.4,0,0,1,12,5Z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>YouTube Studio</p>
      </div>
      <div class="three">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block;">
          <g class="style-scope yt-icon">
            <path
              d="M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Switch Account</p>
        <div class="arrow">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
            style="pointer-events: none; display: block">
            <g mirror-in-rtl="" class="style-scope yt-icon">
              <path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" class="style-scope yt-icon">
              </path>
            </g>
          </svg>
        </div>
      </div>
      <div class="four">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Sign out</p>
      </div>
    </div>
    <div class="second-s">
      <div class="one">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block;">
          <g class="style-scope yt-icon">
            <path
              d="M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z M12.45,10.95c-0.67-0.22-1.18-0.47-1.52-0.72c-0.34-0.26-0.52-0.57-0.52-0.95c0-0.41,0.15-0.73,0.44-0.98 c0.29-0.25,0.71-0.37,1.24-0.37c0.55,0,1.23,0.15,1.53,0.44C13.8,8.53,13.93,8.75,14,9h2c-0.07-0.46-0.26-0.88-0.49-1.27 c-0.33-0.55-0.78-0.98-1.37-1.28C13.79,6.27,13.41,6.17,13,6.09V5h-2v1.12c-0.31,0.07-0.62,0.16-0.9,0.29 C9.5,6.7,9.04,7.08,8.72,7.58C8.4,8.07,8.24,8.63,8.24,9.26c0,1.21,0.6,2.18,1.8,2.9c0.44,0.26,1.04,0.53,1.79,0.8 c0.75,0.27,1.27,0.53,1.56,0.77c0.29,0.24,0.43,0.59,0.43,1.05c0,0.42-0.14,0.74-0.43,0.97c-0.29,0.23-0.69,0.35-1.21,0.35 c-1.05,0-1.92-0.37-2.18-1.1H8c0.08,0.42,0.22,0.81,0.44,1.16c0.35,0.57,0.86,1.02,1.52,1.35c0.33,0.16,0.67,0.28,1.04,0.37V19h2 v-1.05c0.79-0.11,1.45-0.38,1.97-0.81c0.69-0.57,1.03-1.37,1.03-2.38c0-0.91-0.28-1.67-0.85-2.28S13.69,11.36,12.45,10.95z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Purchases and memberships</p>
      </div>
      <div class="two">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M12,3.06l7,3.21v4.84c0,1.3-0.25,2.6-0.75,3.86c-0.15,0.37-0.33,0.76-0.55,1.17c-0.15,0.27-0.31,0.54-0.48,0.81 c-1.32,2.01-3.17,3.42-5.23,3.98c-2.06-0.56-3.91-1.97-5.23-3.98c-0.17-0.27-0.33-0.54-0.48-0.81c-0.22-0.41-0.4-0.79-0.55-1.17 C5.25,13.71,5,12.41,5,11.11V6.27L12,3.06 M12,1.96L4,5.63v5.49c0,1.47,0.3,2.9,0.81,4.22c0.17,0.44,0.37,0.86,0.6,1.28 c0.16,0.3,0.34,0.6,0.52,0.88c1.42,2.17,3.52,3.82,5.95,4.44L12,21.96l0.12-0.03c2.43-0.61,4.53-2.26,5.95-4.43 c0.19-0.29,0.36-0.58,0.52-0.88c0.22-0.41,0.43-0.84,0.6-1.28C19.7,14.01,20,12.58,20,11.11V5.63L12,1.96L12,1.96z M13.08,12.11 c-0.32-0.06-0.64-0.11-0.96-0.12C13.72,11.92,15,10.62,15,9c0-1.66-1.34-3-3-3S9,7.34,9,9c0,1.62,1.28,2.92,2.88,2.99 c-0.32,0.01-0.64,0.06-0.96,0.12h0C8.64,12.58,7,14.62,7,17h10C17,14.62,15.36,12.58,13.08,12.11z M10,9c0-1.1,0.9-2,2-2s2,0.9,2,2 s-0.9,2-2,2S10,10.1,10,9z M11.12,13.09c0.37-0.08,0.64-0.11,0.88-0.11s0.51,0.03,0.88,0.11c1.48,0.3,2.63,1.46,3,2.91H8.12 C8.49,14.55,9.64,13.39,11.12,13.09z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Your data in YouTube</p>
      </div>
    </div>
    <div class="third-s">
      <div class="one">
        <svg id="moon" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false"
          class="style-scope yt-icon" style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Appearance: <span>Dark</span></p>
        <div class="arrow">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
            style="pointer-events: none; display: block">
            <g mirror-in-rtl="" class="style-scope yt-icon">
              <path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" class="style-scope yt-icon">
              </path>
            </g>
          </svg>
        </div>
      </div>
      <div class="two">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M12.26,16.18l-2.93-2.87c-0.8,0.86-1.64,1.71-2.48,2.54L4.6,18.1L3.9,17.4l2.25-2.25c0.84-0.84,1.68-1.69,2.48-2.55 c-1.18-1.23-2.17-2.64-2.9-4.18L5.73,8.4h1.14c0.65,1.26,1.47,2.43,2.44,3.45c1.59-1.81,2.89-3.69,3.43-5.7H2.08v-1h6.65V3h1v2.15 h6.78v1h-2.73c-0.54,2.32-2.01,4.42-3.77,6.42l2.63,2.58C12.51,15.5,12.39,15.82,12.26,16.18z M21.51,21.01h-0.95l-1.12-3.04h-4.91 l-1.11,3.04h-0.96l4.09-10.81h0.87L21.51,21.01z M19.15,17.2l-2.17-5.89l-2.17,5.89H19.15z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Language: <span>English</span></p>
        <div class="arrow">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
            style="pointer-events: none; display: block">
            <g mirror-in-rtl="" class="style-scope yt-icon">
              <path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" class="style-scope yt-icon">
              </path>
            </g>
          </svg>
        </div>
      </div>
      <div class="three">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M12 20.95Q8.975 20.075 6.987 17.312Q5 14.55 5 11.1V5.7L12 3.075L19 5.7V11.35Q18.775 11.275 18.5 11.2Q18.225 11.125 18 11.075V6.375L12 4.15L6 6.375V11.1Q6 12.575 6.438 13.938Q6.875 15.3 7.625 16.438Q8.375 17.575 9.413 18.425Q10.45 19.275 11.625 19.725L11.675 19.7Q11.8 20 11.975 20.288Q12.15 20.575 12.375 20.825Q12.275 20.85 12.188 20.888Q12.1 20.925 12 20.95ZM17 17Q17.625 17 18.062 16.562Q18.5 16.125 18.5 15.5Q18.5 14.875 18.062 14.438Q17.625 14 17 14Q16.375 14 15.938 14.438Q15.5 14.875 15.5 15.5Q15.5 16.125 15.938 16.562Q16.375 17 17 17ZM17 20Q17.8 20 18.438 19.65Q19.075 19.3 19.5 18.7Q18.925 18.35 18.3 18.175Q17.675 18 17 18Q16.325 18 15.7 18.175Q15.075 18.35 14.5 18.7Q14.925 19.3 15.562 19.65Q16.2 20 17 20ZM17 21Q15.325 21 14.163 19.837Q13 18.675 13 17Q13 15.325 14.163 14.162Q15.325 13 17 13Q18.675 13 19.837 14.162Q21 15.325 21 17Q21 18.675 19.837 19.837Q18.675 21 17 21ZM12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Q12 11.95 12 11.95Z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Restricted Mode: <span>Off</span></p>
        <div class="arrow">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
            style="pointer-events: none; display: block">
            <g mirror-in-rtl="" class="style-scope yt-icon">
              <path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" class="style-scope yt-icon">
              </path>
            </g>
          </svg>
        </div>
      </div>
      <div class="four">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M11.99,1.98C6.46,1.98,1.98,6.47,1.98,12s4.48,10.02,10.01,10.02c5.54,0,10.03-4.49,10.03-10.02S17.53,1.98,11.99,1.98z M8.86,14.5c-0.16-0.82-0.25-1.65-0.25-2.5c0-0.87,0.09-1.72,0.26-2.55h6.27c0.17,0.83,0.26,1.68,0.26,2.55 c0,0.85-0.09,1.68-0.25,2.5H8.86z M14.89,15.5c-0.54,1.89-1.52,3.64-2.89,5.15c-1.37-1.5-2.35-3.25-2.89-5.15H14.89z M9.12,8.45 c0.54-1.87,1.52-3.61,2.88-5.1c1.36,1.49,2.34,3.22,2.88,5.1H9.12z M16.15,9.45h4.5c0.24,0.81,0.37,1.66,0.37,2.55 c0,0.87-0.13,1.71-0.36,2.5h-4.51c0.15-0.82,0.24-1.65,0.24-2.5C16.39,11.13,16.3,10.28,16.15,9.45z M20.29,8.45h-4.38 c-0.53-1.97-1.47-3.81-2.83-5.4C16.33,3.45,19.04,5.56,20.29,8.45z M10.92,3.05c-1.35,1.59-2.3,3.43-2.83,5.4H3.71 C4.95,5.55,7.67,3.44,10.92,3.05z M3.35,9.45h4.5C7.7,10.28,7.61,11.13,7.61,12c0,0.85,0.09,1.68,0.24,2.5H3.34 c-0.23-0.79-0.36-1.63-0.36-2.5C2.98,11.11,3.11,10.26,3.35,9.45z M3.69,15.5h4.39c0.52,1.99,1.48,3.85,2.84,5.45 C7.65,20.56,4.92,18.42,3.69,15.5z M13.09,20.95c1.36-1.6,2.32-3.46,2.84-5.45h4.39C19.08,18.42,16.35,20.55,13.09,20.95z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Location: <span>Egypt</span></p>
        <div class="arrow">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
            style="pointer-events: none; display: block">
            <g mirror-in-rtl="" class="style-scope yt-icon">
              <path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" class="style-scope yt-icon">
              </path>
            </g>
          </svg>
        </div>
      </div>
      <div class="five">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block">
          <g class="style-scope yt-icon">
            <path
              d="M16,16H8v-2h8V16z M16,11h-2v2h2V11z M19,11h-2v2h2V11z M13,11h-2v2h2V11z M10,11H8v2h2V11z M7,11H5v2h2V11z M16,8h-2v2h2V8 z M19,8h-2v2h2V8z M13,8h-2v2h2V8z M10,8H8v2h2V8z M7,8H5v2h2V8z M22,5v14H2V5H22z M21,6H3v12h18V6z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Keyboard shortcuts</p>
      </div>
    </div>
    <div class="forth-s">
      <div class="one">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="
            pointer-events: none;
            display: block;
          ">
          <g class="style-scope yt-icon">
            <path
              d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Settings</p>
      </div>
    </div>
    <div class="fifth-s">
      <div class="one">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block;">
          <g class="style-scope yt-icon">
            <path
              d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Help</p>
      </div>
      <div class="two">
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
          style="pointer-events: none; display: block;">
          <g class="style-scope yt-icon">
            <path
              d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
              class="style-scope yt-icon"></path>
          </g>
        </svg>
        <p>Send feedback</p>
      </div>
    </div>
  </div>
  </div>`
};
const notifications = `          <div class="open-notifications">
<div class="headding">
  <h1>Notifications</h1>
  <div class="settings-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
    >
      <path
        d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"
      />
    </svg>
  </div>
</div>
<div class="notfi-content">
  <div class="notfi container">
    <div class="notif">
      <div class="user-img"><img id="userImage" src="imgs/user.jpg" alt="" /></div>
      <div class="text">
        <h1>Medo says Hi</h1>
        <span>1 day ago</span>
      </div>
      <div class="vid-img"></div>
    </div>
  </div>
</div>
</div>`;
const rightNavPc = `      <div class="right-nav-open">
<div class="first">
  <div class="Options">
    <button id="closeRightNav">
      <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        class="style-scope yt-icon"
        style="pointer-events: none; display: block"
      >
        <g class="style-scope yt-icon">
          <path
            d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
            class="style-scope yt-icon"
          ></path>
        </g>
      </svg>
    </button>
  </div>
  <div class="logo">
    <p>EG</p>
    <svg
      viewBox="0 0 90 20"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      class="style-scope yt-icon"
      style="pointer-events: none; display: block"
    >
      <g
        viewBox="0 0 90 20"
        preserveAspectRatio="xMidYMid meet"
        class="style-scope yt-icon"
      >
        <g class="style-scope yt-icon">
          <path
            d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
            fill="#FF0000"
            class="style-scope yt-icon"
          ></path>
          <path
            d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z"
            fill="white"
            class="style-scope yt-icon"
          ></path>
        </g>
        <g class="style-scope yt-icon">
          <g id="youtube-paths" class="style-scope yt-icon">
            <path
              d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
              class="style-scope yt-icon"
            ></path>
            <path
              d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"
              class="style-scope yt-icon"
            ></path>
            <path
              d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
              class="style-scope yt-icon"
            ></path>
            <path
              d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
              class="style-scope yt-icon"
            ></path>
            <path
              d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
              class="style-scope yt-icon"
            ></path>
            <path
              d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"
              class="style-scope yt-icon"
            ></path>
            <path
              d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.7942 16.343C86.9518 16.0161 87.0365 15.4705 87.0506 14.7085L89.4824 14.8519C89.4965 14.9601 89.5035 15.1106 89.5035 15.3011C89.5035 16.4582 89.186 17.3237 88.5534 17.8952C87.9208 18.4667 87.0247 18.7536 85.8676 18.7536C84.4777 18.7536 83.504 18.3185 82.9466 17.446C82.3869 16.5735 82.1094 15.2259 82.1094 13.4008V11.2136C82.1094 9.33452 82.3987 7.96105 82.9772 7.09558C83.5558 6.2301 84.5459 5.79736 85.9499 5.79736C86.9165 5.79736 87.6597 5.97375 88.1771 6.32888C88.6945 6.684 89.059 7.23433 89.2707 7.98457C89.4824 8.7348 89.5882 9.76961 89.5882 11.0913V13.2362H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V11.5641H86.9283V10.6657C86.9283 9.86133 86.9001 9.25221 86.846 8.83593C86.7919 8.41966 86.6931 8.12803 86.5496 7.95635C86.4062 7.78702 86.1851 7.7 85.8864 7.7C85.5854 7.70235 85.3643 7.79172 85.2232 7.96811Z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  </div>
</div>
<div class="left">
  <section class="sec1">
    <div class="home active" id="active">
      <button>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style="pointer-events: none; display: block"
        >
          <g class="style-scope yt-icon">
            <path
              d="M4,10V21h6V15h4v6h6V10L12,3Z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span>Home</span>
      </button>
    </div>
    <div class="shorts">
      <button>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style="pointer-events: none; display: block"
        >
          <g
            height="24"
            viewBox="0 0 24 24"
            width="24"
            class="style-scope yt-icon"
          >
            <path
              d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span>Shorts</span>
      </button>
    </div>
    <div class="subs">
      <button>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style="pointer-events: none; display: block"
        >
          <g class="style-scope yt-icon">
            <path
              d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span>Subscriptions</span>
      </button>
    </div>
  </section>
  <section class="sec2">
    <div class="library">
      <button>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
        >
          <g class="style-scope yt-icon">
            <path
              d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span>Library</span>
      </button>
    </div>
    <div class="history">
      <button>
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <g>
            <path
              d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"
            ></path>
          </g>
        </svg>
        <span>History</span>
      </button>
    </div>
    <div class="your-videos">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="m10 8 6 4-6 4V8zm11-5v18H3V3h18zm-1 1H4v16h16V4z"
          ></path>
        </svg>
        <span>Your videos</span>
      </button>
    </div>
    <div class="watch-later">
      <button>
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
          ></path>
        </svg>
        <span>Watch later</span>
      </button>
    </div>
    <div class="liked-videos">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
          ></path>
        </svg>
        <span>Liked videos</span>
      </button>
    </div>
    <div class="downloads">
      <button>
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style="pointer-events: none; display: block"
        >
          <g class="style-scope yt-icon">
            <path
              d="M17 18V19H6V18H17ZM16.5 11.4L15.8 10.7L12 14.4V4H11V14.4L7.2 10.6L6.5 11.3L11.5 16.3L16.5 11.4Z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span>Downloads</span>
      </button>
    </div>
  </section>
  <section class="sec3">
    <h1>Subscriptions</h1>
    <div class="qMedop">
      <button>
        <img id="userImage" src="imgs/user.jpg" alt="" />
        <span>Medo</span>
      </button>
    </div>
    <div class="more-channels">
      <button>
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
          ></path>
        </svg>
        <span>Browse channels</span>
      </button>
    </div>
  </section>
  <section class="sec4">
    <h1>trending</h1>
    <div class="library">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"
          ></path>
        </svg>
        <span>Trending</span>
      </button>
    </div>
    <div class="music">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"
          ></path>
        </svg>
        <span>Music</span>
      </button>
    </div>
    <div class="live">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <g>
            <path
              d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"
            ></path>
          </g>
        </svg>
        <span>Live</span>
      </button>
    </div>
    <div class="gaming">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"
          ></path>
        </svg>
        <span>Gaming</span>
      </button>
    </div>
    <div class="sports">
      <button>
        <svg
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"
          ></path>
        </svg>
        <span>Sports</span>
      </button>
    </div>
  </section>
  <section class="sec5">
    <h1>More from YouTube</h1>
    <div class="Premium">
      <button>
        <svg viewBox="0 0 24 24" focusable="false">
          <defs>
            <radialGradient
              cx="5.4%"
              cy="7.11%"
              r="107.93%"
              fx="5.4%"
              fy="7.11%"
              gradientTransform="matrix(.70653 0 0 1 .016 0)"
            >
              <stop offset="0%" stop-color="#FFF"></stop>
              <stop
                offset="100%"
                stop-color="#FFF"
                stop-opacity="0"
              ></stop>
            </radialGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <path d="M1 1h21.77v22H1z"></path>
            <g fill-rule="nonzero">
              <path
                fill="#F00"
                d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
              ></path>
              <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
              <path
                fill="#000"
                fill-opacity=".12"
                d="M9.68 8.88l5.13 3.48.73-.38"
              ></path>
              <path
                fill="#FFF"
                fill-opacity=".2"
                d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
              ></path>
              <path
                fill="#3E2723"
                fill-opacity=".2"
                d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
              ></path>
              <path
                fill="#FFF"
                fill-opacity=".2"
                d="M9.68 15.08v.1l5.84-3.08v-.12"
              ></path>
              <path
                fill="#3E2723"
                fill-opacity=".2"
                d="M9.68 8.9v-.13l5.84 3.1v.1"
              ></path>
              <path
                fill="url(#a)"
                fill-opacity=".1"
                d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                transform="translate(1 4.208)"
              ></path>
            </g>
          </g>
        </svg>
        <span>YouTube Premium</span>
      </button>
    </div>
    <div class="Studio">
      <button>
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            fill="red"
            d="M11.13 1.21c.48-.28 1.26-.28 1.74 0l8.01 4.64c.48.28.87.97.87 1.53v9.24c0 .56-.39 1.25-.87 1.53l-8.01 4.64c-.48.28-1.26.28-1.74 0l-8.01-4.64c-.48-.28-.87-.97-.87-1.53V7.38c0-.56.39-1.25.87-1.53l8.01-4.64z"
          ></path>
          <path
            fill="#fff"
            d="m12.71 18.98 4.9-2.83c.41-.24.64-.77.64-1.24V9.24c0-.47-.23-1-.64-1.24l-4.9-2.82c-.41-.23-1.02-.23-1.42 0L6.39 8c-.4.23-.64.77-.64 1.24v5.67c0 .47.24 1 .64 1.24l4.9 2.83c.2.12.46.18.71.18.26-.01.51-.07.71-.18z"
          ></path>
          <path
            fill="red"
            d="m12.32 5.73 4.89 2.83c.16.09.41.31.41.67v5.67c0 .37-.25.54-.41.64l-4.89 2.83c-.16.09-.48.09-.64 0l-4.89-2.83c-.16-.09-.41-.34-.41-.64V9.24c.02-.37.25-.58.41-.68l4.89-2.83c.08-.05.2-.07.32-.07s.24.02.32.07z"
          ></path>
          <path fill="#fff" d="M9.88 15.25 15.5 12 9.88 8.75z"></path>
        </svg>
        <span>YouTube Studio</span>
      </button>
    </div>
    <div class="Music">
      <button>
        <svg viewBox="0 0 24 24" focusable="false">
          <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
          <polygon
            fill="#FFFFFF"
            points="10,14.65 10,9.35 15,12 "
          ></polygon>
          <path
            fill="#FFFFFF"
            d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
          ></path>
        </svg>
        <span>YouTube Music</span>
      </button>
    </div>
    <div class="Kids">
      <button>
        <svg viewBox="0 0 24 24" focusable="false">
          <path
            fill="#FF0000"
            d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
          ></path>
          <path
            fill="#000"
            d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
          ></path>
          <path
            fill="#000"
            d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
          ></path>
          <path
            fill="#FFF"
            d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
          ></path>
        </svg>
        <span>YouTube Kids</span>
      </button>
    </div>
  </section>
  <section class="sec6">
    <div class="settnigs">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M12 9.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-1c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM13.22 3l.55 2.2.13.51.5.18c.61.23 1.19.56 1.72.98l.4.32.5-.14 2.17-.62 1.22 2.11-1.63 1.59-.37.36.08.51c.05.32.08.64.08.98s-.03.66-.08.98l-.08.51.37.36 1.63 1.59-1.22 2.11-2.17-.62-.5-.14-.4.32c-.53.43-1.11.76-1.72.98l-.5.18-.13.51-.55 2.24h-2.44l-.55-2.2-.13-.51-.5-.18c-.6-.23-1.18-.56-1.72-.99l-.4-.32-.5.14-2.17.62-1.21-2.12 1.63-1.59.37-.36-.08-.51c-.05-.32-.08-.65-.08-.98s.03-.66.08-.98l.08-.51-.37-.36L3.6 8.56l1.22-2.11 2.17.62.5.14.4-.32c.53-.44 1.11-.77 1.72-.99l.5-.18.13-.51.54-2.21h2.44M14 2h-4l-.74 2.96c-.73.27-1.4.66-2 1.14l-2.92-.83-2 3.46 2.19 2.13c-.06.37-.09.75-.09 1.14s.03.77.09 1.14l-2.19 2.13 2 3.46 2.92-.83c.6.48 1.27.87 2 1.14L10 22h4l.74-2.96c.73-.27 1.4-.66 2-1.14l2.92.83 2-3.46-2.19-2.13c.06-.37.09-.75.09-1.14s-.03-.77-.09-1.14l2.19-2.13-2-3.46-2.92.83c-.6-.48-1.27-.87-2-1.14L14 2z"
          ></path>
        </svg>
        <span>Settnigs</span>
      </button>
    </div>
    <div class="report">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="m13.18 4 .24 1.2.16.8H19v7h-5.18l-.24-1.2-.16-.8H6V4h7.18M14 3H5v18h1v-9h6.6l.4 2h7V5h-5.6L14 3z"
          ></path>
        </svg>
        <span>Rebort History</span>
      </button>
    </div>
    <div class="help">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M15.36 9.96c0 1.09-.67 1.67-1.31 2.24-.53.47-1.03.9-1.16 1.6l-.04.2H11.1l.03-.28c.14-1.17.8-1.76 1.47-2.27.52-.4 1.01-.77 1.01-1.49 0-.51-.23-.97-.63-1.29-.4-.31-.92-.42-1.42-.29-.59.15-1.05.67-1.19 1.34l-.05.28H8.57l.06-.42c.2-1.4 1.15-2.53 2.42-2.87 1.05-.29 2.14-.08 2.98.57.85.64 1.33 1.62 1.33 2.68zM12 18c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-15c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"
          ></path>
        </svg>
        <span>Help</span>
      </button>
    </div>
    <div class="feedback">
      <button>
        <svg
          enable-background="new 0 0 24 24"
          height="24"
          viewBox="0 0 24 24"
          width="24"
          focusable="false"
        >
          <path
            d="M13 14h-2v-2h2v2zm0-9h-2v6h2V5zm6-2H5v16.59l3.29-3.29.3-.3H19V3m1-1v15H9l-5 5V2h16z"
          ></path>
        </svg>
        <span> Send feedback</span>
      </button>
    </div>
  </section>
  <section class="sec7">
    <div>
      <a href="#">About</a>
      <a href="#">press</a>
      <a href="#">CopyRight</a>
      <a href="#">Contact us</a>
      <a href="#">Creators</a>
      <a href="#">Advertise</a>
      <a href="#">Developers</a>
    </div>
    <div>
      <a href="#">Terms</a>
      <a href="#">Privacy</a>
      <a href="#">Policy & Safety</a>
      <a style="width: 100%; display: block" href="#"
        >How YouTube works</a
      >
      <a href="#">Test new features</a>
    </div>
    <div>
      <a href="#">© 2023 Google LLC </a>
    </div>
  </section>
</div>
</div>
<div class="nav-bar-background"></div>`;
const mSearch = `          <div class="m-search">
<div class="m-back">
  <button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="256"
      height="256"
      viewBox="0 0 256 256"
      xml:space="preserve"
    >
      <defs fill="#f1f1f1"></defs>
      <g
        style="
          stroke: #f1f1f1;
          stroke-width: 0;
          stroke-dasharray: #f1f1f1;
          stroke-linecap: butt;
          stroke-linejoin: miter;
          stroke-miterlimit: 10;
          fill: #f1f1f1;
          fill-rule: nonzero;
          opacity: 1;
        "
        transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
      >
        <path
          d="M 30.49 10.921 c 0.63 0.537 0.708 1.483 0.171 2.114 L 4.745 43.5 H 88.5 c 0.829 0 1.5 0.671 1.5 1.5 s -0.671 1.5 -1.5 1.5 H 4.745 l 25.916 30.465 c 0.536 0.63 0.461 1.577 -0.171 2.114 c -0.631 0.537 -1.577 0.46 -2.114 -0.17 L 0.357 45.971 c -0.014 -0.016 -0.019 -0.038 -0.032 -0.054 c -0.07 -0.09 -0.138 -0.182 -0.187 -0.288 c -0.012 -0.026 -0.016 -0.053 -0.026 -0.079 C 0.1 45.519 0.091 45.488 0.08 45.455 C 0.032 45.306 0 45.153 0 45 c 0 0 0 0 0 0 s 0 0 0 0 c 0 -0.153 0.032 -0.306 0.08 -0.455 c 0.01 -0.032 0.019 -0.063 0.032 -0.094 c 0.01 -0.026 0.015 -0.053 0.027 -0.079 c 0.049 -0.106 0.117 -0.198 0.187 -0.288 c 0.013 -0.017 0.018 -0.038 0.032 -0.054 l 28.019 -32.937 C 28.913 10.461 29.859 10.384 30.49 10.921 z"
          style="
            stroke: #f1f1f1;
            stroke-width: 1;
            stroke-dasharray: #f1f1f1;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-miterlimit: 10;
            fill: #f1f1f1;
            fill-rule: nonzero;
            opacity: 1;
          "
          transform=" matrix(1 0 0 1 0 0) "
          stroke-linecap="round"
        />
      </g>
    </svg>
  </button>
</div>
<form class="search-input" id="mSearchForm" action="search.html">
  <div class="text">
    <input id="mSearchInput" type="text" placeholder="Search" />
  </div>
  <div class="search-icon">
    <input id="mSearchSebmit" type="submit" value="" />
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      class="style-scope yt-icon"
      style="pointer-events: none; display: block"
    >
      <g class="style-scope yt-icon">
        <path
          d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
          class="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  </div>
</form>
<div class="voice-icon">
  <button>
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="xMidYMid meet"
      focusable="false"
      class="style-scope yt-icon"
      style="pointer-events: none; display: block"
    >
      <g class="style-scope yt-icon">
        <path
          d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
          class="style-scope yt-icon"
        ></path>
      </g>
    </svg>
  </button>
</div>
</div>`;
const upload = `                      <div class="createVideo">
<div class="headder">
  <div class="left"><p>Upload Video</p></div>
  <div class="right">
    <button>
      <svg viewBox="0 0 24 24">
        <g class="style-scope tp-yt-iron-icon">
          <path
            d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
          ></path>
        </g>
      </svg>
    </button>
    <button class="closeUpload">
      <svg viewBox="0 0 24 24" focusable="false">
        <g class="style-scope tp-yt-iron-icon">
          <path
            d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"
          ></path>
        </g>
      </svg>
    </button>
  </div>
  <div class="loading">
    <div></div>
  </div>
</div>
<div class="mid">
  <div class="uploadIcon">
    <div class="arrow"></div>
    <div class="box"></div>
    <div class="line"></div>
  </div>
  <div class="text">
    <p class="topText">Put here a video link or path</p>
    <p class="bottomText">
      Your videos will be private until you publish them.
    </p>
  </div>
  <div class="input">
    <textarea id="videoUploadLink"></textarea>
  </div>
  <div class="button">
    <button>Next</button>
  </div>
</div>
<div class="upCont">
  <div class="center">
    <div class="right">
      <div>
        <h3>Details</h3>
        <div class="input">
          <p>Title(requierd)</p>
          <textarea
            placeholder="Video Title"
            id="titleI"
            cols="10"
            rows="3"
          ></textarea>
        </div>
        <div class="input decription">
          <p>Decription</p>
          <textarea
            placeholder="Video detaild will appear in the video decription"
            id="DecriptionI"
            cols="30"
            rows="8"
          ></textarea>
        </div>
      </div>
      <div>
        <h3>thumbnail</h3>
        <div class="input">
          <p>put here a img link or path</p>
          <textarea
            placeholder="img link or path"
            id="thumbnailI"
            cols="30"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="left">
      <div class="cont">
        <div class="vid">
          <iframe src="videoplayer.html?video=User/Videos/Wide Nanami Walking.mp4"></iframe>
        </div>
        <div class="info">
          <p>video link / path</p>
          <a href="#">https://youtu.be/x_cI4UrlylA</a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <svg viewBox="0 0 24 24">
      <g class="style-scope tp-yt-iron-icon">
        <path
          d="M17,18v1H6V18ZM6.49,9l.71.71L11,5.91V16h1V5.91l3.8,3.81L16.51,9l-5-5Z"
          class="style-scope tp-yt-iron-icon"
        ></path>
      </g>
    </svg>
    <div class="left"><button>Upload</button></div>
  </div>
</div>
</div>`;
const bottomBarMobile = `        
<div class="mobile-bottom-bar-holder">
  <div class="home">
    <a href="home.html">\
      <button id="homeBtnMobile">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style="pointer-events: none; display: block"
        >
          <g class="style-scope yt-icon">
            <path
              d="M4,10V21h6V15h4v6h6V10L12,3Z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span>Home</span>
      </button>
    </a>
  </div>
  <div class="shorts">
    <a href="shorts.html">
      <button id="shortsBtnMobile">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style="pointer-events: none; display: block"
        >
          <g
            height="24"
            viewBox="0 0 24 24"
            width="24"
            class="style-scope yt-icon"
          >
            <path
              d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span>Shorts</span>
      </button>
    </a>
  </div>
  <div class="upload-button">
    <button class="upload-btn-mobile" id="UploadBtnMobile">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M17 13h-4v4h-2v-4H7v-2h4V7h2v4h4v2zM12 3c-4.96 0-9 4.04-9
      9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48
      10-10 10S2 17.52 2 12 6.48 2 12 2z"
        ></path>
      </svg>
    </button>
  </div>
  <div class="subs">
    <a href="subscriptions.html">
      <button id="subsBtnMobile">
        <svg
          viewBox="0 0 24 24"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          class="style-scope yt-icon"
          style="pointer-events: none; display: block"
        >
          <g class="style-scope yt-icon">
            <path
              d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
              class="style-scope yt-icon"
            ></path>
          </g>
        </svg>
        <span>Subscriptions</span>
      </button>
    </a>
  </div>
  <div class="you">
    <a href="library.html">
      <button id="loginBtnMobile">
        <img id="userImage" src="imgs/user.jpg" alt="" />
        <span>You</span>
      </button>
    </a>
  </div>
  </div>`
  const commentHtml = function commentf(
    chanenlImg,
    chanenlName,
    commentDate,
    commentValue,
    commentLikes,
    replysCount,
    display
  ) {
    return `
    <div class="main-comment">
    <div class="content">
      <div class="img">
        <a href="#">
          <img src="${chanenlImg}" alt="" />
        </a>
      </div>
      <div class="left">
        <div class="top">
          <div class="user-name">
            <p id="userName">${chanenlName}</p>
          </div>
          <div class="comment-date">
            <p id="commentDate">${timeSince(commentDate)}</p>
          </div>
        </div>
        <div class="comment-content">
          <p class="text" id="commentContent">
            ${commentValue}
          </p>
        </div>
        <div class="comment-interacte">
          <div class="like">
            <button check='${commentDate}' id="like-comment">
              <div class="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                  ></path>
                </svg>
              </div>
            </button>
            <span id="likesCount">${commentLikes}</span>
          </div>
          <div class="dis-like">
            <button check='${commentDate}' id="dislike-comment">
              <div class="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
                  ></path>
                </svg>
              </div>
            </button>
            <span style="display: none" id="dislikesCount">1</span>
          </div>
          <div class="reply">
            <button check='${commentDate}'>Reply</button>
          </div>
        </div>
        <div class="add-comment reply-section">
          <div class="chanenl-img">
            <img src="imgs/kaska.jpg" alt="chanenl-img" />
          </div>
          <form id="replyForm" action="#">
            <div class="type-comment">
              <div class="top">
                <div
                  check='${commentDate}'
                  class="input"
                  id="replyInput"
                  placeholder="Add a reply..."
                  contenteditable="true"
                ></div>
              </div>
            </div>
            <div class="bottom">
              <div class="comment-submit">
                <div class="cancel">
                  <button type='button' check='${commentDate}' class="contain-click" id="cancelReply">
                    Cancel
                  </button>
                </div>
                <div class="submit">
                  <button check='${commentDate}' id="submitReply" type="submit">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="option">
      <button check='${commentDate}' id="commnetReply">
        <div class="svg">
          <svg
            id="false"
            class="noclick"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            style="pointer-events: none"
          >
            <path
              id="false"
              d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
    </div>
    <div style="display: ${display};" class="show-hide-replys">
    <div class="show-hide-replys-btn">
      <button class='contain-click' check='${commentDate}'>
        <div class="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path d="M7 14l5-5 5 5z"></path>
          </svg>
        </div>
        <div class="text"><span id="replysCount">${replysCount}</span> replies</div>
      </button>
    </div>
    <div class="replys-comments-section">
    </div>
  </div>`;
  };
  const replyCommentHtml = function replyCommentf(
    chanenlImg,
    chanenlName,
    commentDate,
    commentValue,
    commentLikes,
  ) {
    return `
    <div class="content">
      <div class="img">
        <a href="#">
          <img src="${chanenlImg}" alt="" />
        </a>
      </div>
      <div class="left">
        <div class="top">
          <div class="user-name">
            <p id="userName">${chanenlName}</p>
          </div>
          <div class="comment-date">
            <p id="commentDate">${timeSince(commentDate)}</p>
          </div>
        </div>
        <div class="comment-content">
          <p class="text" id="commentContent">
            ${commentValue}
          </p>
        </div>
        <div class="comment-interacte">
          <div class="like">
            <button check='${commentDate}' id="like-comment">
              <div class="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                  ></path>
                </svg>
              </div>
            </button>
            <span id="likesCount">${commentLikes}</span>
          </div>
          <div class="dis-like">
            <button check='${commentDate}' id="dislike-comment">
              <div class="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
                  ></path>
                </svg>
              </div>
            </button>
            <span style="display: none" id="dislikesCount">1</span>
          </div>
          <div class="reply">
            <button check='${commentDate}'>Reply</button>
          </div>
        </div>
        <div class="add-comment reply-section">
          <div class="chanenl-img">
            <img src="imgs/kaska.jpg" alt="chanenl-img" />
          </div>
          <form id="replyForm" action="#">
            <div class="type-comment">
              <div class="top">
                <div
                  check='${commentDate}'
                  class="input"
                  id="replyInput"
                  placeholder="Add a reply..."
                  contenteditable="true"
                ></div>
              </div>
            </div>
            <div class="bottom">
              <div class="comment-submit">
                <div class="cancel">
                  <button check='${commentDate}' type='button' class="contain-click" id="cancelReply">
                    Cancel
                  </button>
                </div>
                <div class="submit">
                  <button check='${commentDate}' id="submitReply" type="submit">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="option">
      <button check='${commentDate}' id="commnetReply">
        <div class="svg">
          <svg
            id="false"
            class="noclick"
            enable-background="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            style="pointer-events: none"
          >
            <path
              id="false"
              d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  `;
  }
  const videoHTML = function videof(
    id,
    thumbnail,
    video,
    videoTime,
    ChannelImg,
    headder,
    channelName,
    date,
    views
  ) {
    return `
    <a href="watch.html?video=${id}">
    <div class="thumbnail">
      <div class="img">
        <img src="${thumbnail}" alt="" />
      </div>
      <div class="vid">
        <video muted src="${video}"></video>
      </div>
      <div class="time">
      <p class="currentTime">00:00</p>
      <p class="dash">/</p>
      <p class="allTime">${videoTime}</p>
    </div>
    <div id="false" class="timeline-container">
    <div id="false" class="timeline-holder">
      <div id="false" class="timeline">
        <div id="false" class="color-container">
          <div id="false" class="timelineCurrent"></div>
          <div id="false" class="timelineBufferd"></div>
          <div id="false" class="timelineGoing"></div>
        </div>
        <div id="false" class="thumb-indicaror"></div>
        <span id="going">00:00</span>
      </div>
    </div>
  </div>
      <div id="false" class="mute">
      <button tabindex='-1' id="false" class="unmute">
        <svg id="false" viewBox="0 0 36 36">
          <path id="false"
            d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z"
            fill="#fff"
          ></path>
          <path id="false"
            d="M 9.25,9 7.98,10.27 24.71,27 l 1.27,-1.27 Z"
            fill="#fff"
            class="pathMute"
          ></path>
        </svg>
        </button>
        <span id="false"></span>
        <button tabindex='-1' id="false">
        <svg id="false" class="ytp-subtitles-button-icon" viewBox="0 0 36 36">
        <path id="false"
          d="M11,11 C9.89,11 9,11.9 9,13 L9,23 C9,24.1 9.89,25 11,25 L25,25 C26.1,25 27,24.1 27,23 L27,13 C27,11.9 26.1,11 25,11 L11,11 Z M17,17 L15.5,17 L15.5,16.5 L13.5,16.5 L13.5,19.5 L15.5,19.5 L15.5,19 L17,19 L17,20 C17,20.55 16.55,21 16,21 L13,21 C12.45,21 12,20.55 12,20 L12,16 C12,15.45 12.45,15 13,15 L16,15 C16.55,15 17,15.45 17,16 L17,17 L17,17 Z M24,17 L22.5,17 L22.5,16.5 L20.5,16.5 L20.5,19.5 L22.5,19.5 L22.5,19 L24,19 L24,20 C24,20.55 23.55,21 23,21 L20,21 C19.45,21 19,20.55 19,20 L19,16 C19,15.45 19.45,15 20,15 L23,15 C23.55,15 24,15.45 24,16 L24,17 L24,17 Z"
          fill="#fff"
        ></path>
      </svg>
        </button>
    </div>
    </div>
    <div class="info">
      <div tabindex='0' class="channel-img"><img id="false" src="${ChannelImg}" alt="" /></div>
      <div class="content">
        <div class="headder"><p>${headder}</p></div>
        <div id="false" class="channelName">${channelName}</div>
        <div class="viewsDate">
          <div class="views"><span>${views}</span>&nbsp;views</div>
          <div></div>
          <div class="date">${date}</div>
        </div>
      </div>
      <div class="options-container">
      <div class="noclick">
        <button id="false" class="options noclick">
          <div id="false" class="noclick">
            <svg
              id="false"
              class="noclick"
              enable-background="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              style="pointer-events: none"
            >
              <path
                id="false"
                d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div id="false" class="options-menu">
        <div id="false" class="editVideo">
          <button id="false">
            <div class="svg-cont" id="false">
              <svg
                id="false"
                enable-background="new 0 0 24 24"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
              >
                <path
                  id="false"
                  d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
                ></path>
              </svg>
            </div>
            <div id="false">Edit</div>
          </button>
        </div>
        <div id="false" class="deleteVideo">
          <button id="false">
            <div class="svg-cont" id="false">
              <svg
                id="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                style="padding: 0 6px"
              >
                <path
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </div>
            <div id="false">Delete</div>
          </button>
        </div>
      </div>
    </div>
    </div>
    </a>
    `;
  };
  const shortHTML = function(id,src,likes,chanenl,headder,date,views) {
    return`
    <div class="short-video-conatiner">
      <div class="video">
        <video muted autoplay loop src="${src}"></video>
      </div>
      <div class="short-overlay">
        <div class="hover-interact">
          <div class="play-pause">
            <button id="playPause">
              <svg viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
              </svg>
            </button>
          </div>
          <div class="mute">
            <button id="mute">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
                <path
                  d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z">
                </path>
              </svg>
            </button>
          </div>
        </div>
        <div class="interact">
          <div class="info">
            <div class="headder">
              <div class="channel">
                <img src="${chanenl.image}" alt="" />
                <p>${chanenl.user}</p>
              </div>
              <div class="text">
                <p>${headder}</p>
              </div>
            </div>
          </div>
          <div class="controlls">
            <div class="like">
              <button id="like">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M25.7183 11.9977C26.3259 11.9977 26.9005 12.2739 27.28 12.7484L27.9877 13.633C28.51 14.2858 28.5711 15.1945 28.141 15.9114L26.9248 17.9383L27.6157 19.6654C28.0045 20.6375 27.8584 21.742 27.2303 22.5796L26.3333 23.7755V25.9977C26.3333 27.1023 25.4379 27.9977 24.3333 27.9977H11.6666C10.5621 27.9977 9.66663 27.1023 9.66663 25.9977V12.8266C9.66663 11.9929 9.92713 11.18 10.4117 10.5016L15.6633 3.14937C15.7999 2.95816 16.0512 2.88785 16.2671 2.98041L16.3383 3.01091C18.1725 3.797 19.1467 5.81473 18.6217 7.73996L17.4605 11.9977H25.7183ZM5 13.3285C3.89543 13.3285 3 14.224 3 15.3285V25.9952C3 27.0998 3.89543 27.9952 5 27.9952H7.66667V13.3285H5Z">
                  </path>
                </svg>
              </button>
            </div>
            <div class="dislike">
              <button id="dislike">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M5.28167 20.0001C4.6741 20.0001 4.09947 19.7239 3.71993 19.2495L3.01222 18.3648C2.48998 17.712 2.42886 16.8033 2.85897 16.0864L4.07513 14.0595L3.38429 12.3324C2.99545 11.3603 3.14153 10.2558 3.76972 9.41822L4.66667 8.22228L4.66667 6.00006C4.66667 4.89549 5.5621 4.00006 6.66667 4.00006L19.3333 4.00006C20.4379 4.00006 21.3333 4.89549 21.3333 6.00006L21.3333 19.1712C21.3333 20.0049 21.0728 20.8178 20.5883 21.4962L15.3367 28.8484C15.2001 29.0396 14.9488 29.1099 14.7328 29.0174L14.6617 28.9869C12.8275 28.2008 11.8532 26.1831 12.3783 24.2578L13.5395 20.0001L5.28167 20.0001ZM26 18.6693C27.1046 18.6693 28 17.7738 28 16.6693L28 6.0026C28 4.89803 27.1046 4.0026 26 4.0026L23.3333 4.0026L23.3333 18.6693L26 18.6693Z">
                  </path>
                </svg>
              </button>
            </div>
            <div class="comment">
              <button id="comment">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M29 5.66667L29.0116 27.4454C29.012 28.1818 28.4154 28.779 27.679 28.7794C27.3251 28.7796 26.9857 28.6391 26.7355 28.3889L22.6665 24.0001H5.66667C4.2 24.0001 3 22.8001 3 21.3334V5.66667C3 4.2 4.2 3 5.66667 3H26.3467C27.8133 3 29 4.2 29 5.66667ZM7.99984 10.5001C7.99984 9.67164 8.67141 9.00007 9.49984 9.00007H22.4998C23.3283 9.00007 23.9998 9.67164 23.9998 10.5001C23.9998 11.3285 23.3283 12.0001 22.4998 12.0001H9.49984C8.67141 12.0001 7.99984 11.3285 7.99984 10.5001ZM9.49984 15.0001C8.67141 15.0001 7.99984 15.6716 7.99984 16.5001C7.99984 17.3285 8.67141 18.0001 9.49984 18.0001H18.4998C19.3283 18.0001 19.9998 17.3285 19.9998 16.5001C19.9998 15.6716 19.3283 15.0001 18.4998 15.0001H9.49984Z">
                  </path>
                </svg>
              </button>
            </div>
            <div class="share">
              <button id="share">
                <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M17.7375 5.26556L28.6745 15.2624C29.1083 15.6589 29.1083 16.3422 28.6745 16.7387L17.7375 26.7356C17.0958 27.3222 16.0628 26.8669 16.0628 25.9975V21.6217C16.0628 21.6217 16.0627 21.6217 16.0626 21.6217C9.92564 21.6217 6.69114 23.9378 5.1615 25.5968C4.80726 25.981 3.97329 25.7343 4.00015 25.2125C4.22558 20.8321 5.86088 10.8892 16.0626 10.8892C16.0627 10.8892 16.0628 10.8892 16.0628 10.8892V6.00368C16.0628 5.13426 17.0958 4.67898 17.7375 5.26556Z">
                  </path>
                </svg>
              </button>
            </div>
            <div class="more">
              <button id="more">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                  <path
                    d="M7.5,12c0,0.83-0.67,1.5-1.5,1.5S4.5,12.83,4.5,12s0.67-1.5,1.5-1.5S7.5,11.17,7.5,12z M12,10.5c-0.83,0-1.5,0.67-1.5,1.5 s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S12.83,10.5,12,10.5z M18,10.5c-0.83,0-1.5,0.67-1.5,1.5s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5 S18.83,10.5,18,10.5z">
                  </path>
                </svg>
              </button>
            </div>
            <div class="sound">
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;">
                  <rect x="11" y="2" width="2" height="20" rx="1" fill="white" fill-opacity="0.3"></rect>
                  <rect x="15" y="6" width="2" height="12" rx="1" fill="white" fill-opacity="0.3"></rect>
                  <rect x="7" y="6" width="2" height="12" rx="1" fill="white" fill-opacity="0.3"></rect>
                  <rect x="3" y="10" width="2" height="4" rx="1" fill="white" fill-opacity="0.3"></rect>
                  <rect x="19" y="10" width="2" height="4" rx="1" fill="white" fill-opacity="0.3"></rect>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="timeline-space">
          <div class="timeline-abs">
            <div class="timeline-container" id="1">
              <div class="timeline-holder">
                <div tabindex="0" id="false" class="timeline">
                  <div id="false" class="color-container">
                    <div id="false" class="timelineCurrent"></div>
                    <div id="false" class="timelineBufferd"></div>
                    <div id="false" class="timelineGoing"></div>
                  </div>
                  <div id="false" class="thumb-indicaror"></div>
                  <span class="going">00:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="short-animation">
        <div class="pause">
          <svg viewBox="0 0 36 36">
            <path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path>
          </svg>
        </div>
        <div class="play">
          <svg viewBox="0 0 36 36">
            <path d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="comments-container">
      <div class="top">
        <div class="comments-conut">
          <p class="headder">Comments</p>
          <p class="comments-num">1</p>
        </div>
        <div class="comments-controll">
          <div class="sort">
            <button class="contain-click" id="sort">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                viewBox="0 0 24 24" width="24" focusable="false">
                <path
                d="M21 6H3V5h18v1zm-6 5H3v1h12v-1zm-6 6H3v1h6v-1z"></path>
              </svg>
            </button>
          </div>
          <div class="close">
            <button id="close">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24"
                viewBox="0 0 24 24" width="24" focusable="false">
                <path
                  d="m12.71 12 8.15 8.15-.71.71L12 12.71l-8.15 8.15-.71-.71L11.29 12 3.15 3.85l.71-.71L12 11.29l8.15-8.15.71.71L12.71 12z">
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="comments-inner"></div>
      <div class="submit-comment">
        <div class="add-comment">
          <div class="chanenl-img">
            <img src="imgs/kaska.jpg" alt="chanenl-img">
          </div>
          <form id="mainCommentForm" action="#">
            <div class="type-comment">
              <div class="top">
                <div class="input" id="mainCommentInput" placeholder="Add a comment..." contenteditable="true"></div>
              </div>
            </div>
            <div class="bottom">
              <div class="comment-submit">
                <div class="cancel">
                  <button class="contain-click" id="cancelComment">
                    Cancel
                  <div class="click"></div></button>
                </div>
                <div class="submit">
                  <button id="submitComment" type="submit">
                    Comment
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>`
  }
let webPage = document.querySelector('.web-page')

let nav = document.createElement("nav");
nav.innerHTML = topBarPc;

let rightDiv = document.createElement("div");
rightDiv.innerHTML = rightBarPc;
rightDiv.classList.add("right-nav");

let mSearchDiv = document.createElement("div");
mSearchDiv.classList.add("m-search-container");
mSearchDiv.innerHTML = mSearch;

let accountDiv = document.createElement("div");
accountDiv.classList.add("account");
accountDiv.innerHTML = account(user);

let notficationsDiv = document.createElement("div");
notficationsDiv.classList.add("notfications-container");
notficationsDiv.innerHTML = notifications;

let rightNavOpenDiv = document.createElement("div");
rightNavOpenDiv.classList.add("right-nav-open-container");
rightNavOpenDiv.innerHTML = rightNavPc;

let uploadDiv = document.createElement("div");
uploadDiv.classList.add("UploadCont");
uploadDiv.setAttribute("id", "UploadContClose");
uploadDiv.innerHTML = upload;

let bottomBarMobileDiv = document.createElement("div");

bottomBarMobileDiv.classList.add('mobile-bottom-bar')
bottomBarMobileDiv.innerHTML = bottomBarMobile
//loading the data depending on page and device

document.onload = LoadData();

//prevent scroll

function preventScroll(e) {
  e.preventDefault();
  e.stopPropagation();

  return false;
}
if (
  navigator.userAgent.match(/Android/i) ||
  navigator.userAgent.match(/iPhone/i)
) {
  document.body.classList.add('mobile')
} else {
}
function LoadData(e) {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/iPhone/i)
  ) {
    webPage.appendChild(bottomBarMobileDiv)
  } else {
  }
  webPage.appendChild(uploadDiv);
  // } else {
    if (location.href.search("watch") === -1) {
      webPage.prepend(rightDiv);
    }
  webPage.prepend(nav);
  // }
}

//ff
let bodyPosition

const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});
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
function FormatTime(time) {
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
function lockBody() {
  if (document.fullscreenElement == null && document.body.offsetHeight > window.innerHeight) {
    bodyPosition = window.scrollY
    document.body.style.top = `-${bodyPosition}px`
    document.body.classList.add("lock-scrollbar");
  }
}
function unLockBody(e) {
  document.body.classList.remove("lock-scrollbar");
  window.scrollTo(0,bodyPosition)
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
document.addEventListener("DOMContentLoaded", function() {
  buttonsBlur()
  if(document.querySelectorAll('input').length > 0) {
    for(let i = 0; i > document.querySelectorAll('input').length; i++) {
      document.querySelectorAll('input')[i].addEventListener('focusin' , () => {
        inputFocus = true
      })
      document.querySelectorAll('input')[i].addEventListener('focusout' , () => {
        inputFocus = false
      })
      document.querySelectorAll('.input')[i].addEventListener('focusin' , () => {
        inputFocus = true
      })
      document.querySelectorAll('.input')[i].addEventListener('focusout' , () => {
        inputFocus = false
      })
    }
  }
});

searchSubmitBtn.addEventListener("mouseleave", () => {
  setTimeout(() => {
    searchSubmitBtn.blur();
  }, 100);
});
let accPic = document.querySelector("nav .login img");
let accContainerValue = 0;

let loadingStatue = false
let inputFocus = false
if  (!window.localStorage.getItem('videos')) {
  window.localStorage.setItem('videos', JSON.stringify(videosArray))
}
if(!window.localStorage.getItem('ambientMode')) {
    window.localStorage.setItem('ambientMode', 'false')
}
//right nav open
let options = document.querySelector('.first .Options')
webPage.appendChild(rightNavOpenDiv);
let navBarBackGround = document.querySelector('.right-nav-open-container .nav-bar-background')
let rightNavOpenc = document.querySelector(".right-nav-open-container");
let rightNavOpenI = document.querySelector(".right-nav-open");
let rightNavOpenS = false;
let move = false
let moveTimeOut 
optionsButton.addEventListener("click", NavBarOpen);
navBarBackGround.addEventListener('click' ,NavBarClose)
closeRightNav.addEventListener('click' ,NavBarClose)
document.addEventListener('mousedown' , (e) => {
  if (e.offsetX === 0 && rightNavOpenS === false) {
    clearTimeout(moveTimeOut)
    move = true
    rightNavOpenI.style.transition = 0 + 's'
    document.body.classList.add('nav-grapping')
  }
})
document.addEventListener('mouseup' , (e) => {
  rightNavOpenI.style.transition = 0.3 + 's'
  if (move === true && e.offsetX >= rightNavOpenI.clientWidth / 2) {
    rightNavOpenI.style.left = null
    navBarBackGround.style.opacity = null
    NavBarOpen()
    move = false
  } else if (move === true && e.offsetX < rightNavOpenI.clientWidth / 2) {
    navBarBackGround.style.opacity = null
    rightNavOpenI.style.left = null
    move = false
    moveTimeOut = setTimeout(() => {
      document.body.classList.remove('nav-grapping')
    }, 300);
  }
})
document.addEventListener('mousemove' , (e) => {
  if (move === true) {
    rightNavOpenI.style.left = Math.min( e.offsetX - rightNavOpenI.clientWidth,0) + 'px'
    navBarBackGround.style.opacity = Math.min( e.offsetX / rightNavOpenI.clientWidth,1)
  };
})
function NavBarOpen() {
  if (rightNavOpenS == false) {
    rightNavOpenc.style.display = 'block'
    bodyPosition = window.scrollY
    rightNavOpenc.classList.add('open')
    document.body.classList.remove('nav-grapping')
    rightNavOpenS = true;
    document.body.classList.add('right-nav-true')
    closeRightNav.focus()
    if (document.fullscreenElement == null && document.body.offsetHeight > window.innerHeight) {
      // document.body.style.top = `-${bodyPosition}px`
      // document.body.classList.add("lock-scrollbar");
    }
  rightNavOpenc.style.display = null
  }
}
function NavBarClose() {
  if (rightNavOpenS == true) {
    rightNavOpenc.style.display = 'block'
    document.body.classList.remove("lock-scrollbar");
    rightNavOpenc.classList.remove('open')
    document.body.classList.remove('right-nav-true')
    window.scrollTo(0,bodyPosition)
    setTimeout(() => {
      rightNavOpenc.style.display = null
      rightNavOpenS = false;
    }, 300);
  }
}
function openCloseRightNav() {
  if (rightNavOpenS == false) {
    bodyPosition = window.scrollY
    rightNavOpenS = true;
    if (document.fullscreenElement == null && document.body.offsetHeight > window.innerHeight) {
      document.body.style.top = `-${bodyPosition}px`
      document.body.classList.add("lock-scrollbar");
    }
    rightNavOpenc.addEventListener("click", (e) => {
      if (
        e.target.getAttribute("class") == "right-nav-open-container" ||
        e.target.getAttribute("id") == "closeRightNav"
      ) {
        rightNavOpenI.style.left = "-270px";
        rightNavOpenc.style.opacity = "0";
        setTimeout(() => {
          rightNavOpenDiv.remove();
          rightNavOpenS = false;
          rightNavOpenc.style.opacity = "1";
        }, 300);
      }
    });
  }
}

//youtybe home

logoHome.addEventListener("click", () => {
  location.replace("home.html");
});

//search

searchForm.addEventListener("submit", searchSubmit);
function searchSubmit(e) {
  if (inputSearch.value.length == 0) {
    e.preventDefault();
    inputSearch.focus();
  }
}
let searchInput = document.getElementById("inputSearch");
let searchdiv = document.querySelector(".search");
searchInput.onfocus = function () {
  searchdiv.style.border = "1px solid rgb(89, 89, 89)";
};
searchInput.addEventListener("focusout", () => {
  searchdiv.style.border = "1px solid #272727";
});

//notifications

let NotfiacationActive =
  '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96	c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z" class="style-scope yt-icon"></path></g></svg>';
let Notfiacationidle =
  '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block;"><g class="style-scope yt-icon"><path d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z" class="style-scope yt-icon"></path></g></svg>';

notificationsBtn.addEventListener("click", () => {
  openCloseNotficition();
});
let notificationsS = 0;
function openCloseNotficition() {
  if (notificationsS == 0) {
    bodyPosition = window.scrollY
    notificationsS = 1;
    document.body.appendChild(notficationsDiv);
    notficationsDiv.addEventListener('wheel', (e) => {
      if(e.target.className === notficationsDiv.className) e.preventDefault()
    })
    if (document.fullscreenElement == null && document.body.offsetHeight > window.innerHeight) {
      document.body.style.top = `-${bodyPosition}px`
      document.body.classList.add("lock-scrollbar");
    }
    let notificationsI = document.querySelector(".open-notifications");
    let notificationsc = document.querySelector(".notfications-container");
    notificationsBtn.innerHTML = NotfiacationActive;
    notificationsc.addEventListener("click", (e) => {
      if (e.target.getAttribute("class") == "notfications-container") {
        if (window.innerWidth > 600) {
          notificationsI.style.animation = "notfisAnimClose .3s ease ";
        } else if (window.innerWidth <= 600) {
          notificationsI.style.animation = "notfisAnimCloseSmall .3s ease";
        }
        document.body.classList.remove("lock-scrollbar");
        window.scrollTo(0,bodyPosition)
        notificationsc.style.opacity = "0";
        notificationsBtn.innerHTML = Notfiacationidle;
        setTimeout(() => {
          notficationsDiv.remove();
          notificationsS = 0;
          if (window.innerWidth > 600) {
            notificationsI.style.animation = "notfisAnim .3s ease";
          } else if (window.innerWidth <= 600) {
            notificationsI.style.animation = "notfisAnimsmall .3s ease";
          }
          notificationsc.style.opacity = "1";
        }, 300);
      }
    });
  }
}

//account
document.querySelector('.third .login')
// document.body.appendChild(accountDiv);

loginBtn.addEventListener("click", () => {
  openCloseAccount();
});
let accountS = 0;
function openCloseAccount() {
  if (accountS == 0) {
    accountS = 1;
    bodyPosition = window.scrollY
    document.body.appendChild(accountDiv);
    accountDiv.addEventListener('wheel', (e) => {
      if(e.target.className === accountDiv.className) e.preventDefault()
    })
    if (document.fullscreenElement == null && document.body.offsetHeight > window.innerHeight) {
      document.body.style.top = `-${bodyPosition}px`
      document.body.classList.add("lock-scrollbar");
    }
    let accountc = document.querySelector(".account");
    accountc.addEventListener("click", (e) => {
      if (e.target.getAttribute("class") == "account") {
        document.body.classList.remove("lock-scrollbar");
        window.scrollTo(0,bodyPosition)
        accountc.style.opacity = "0";
        setTimeout(() => {
          accountDiv.remove();
          accountc.style.opacity = "1";
          accountS = 0;
        }, 300);
      }
    });
  }
}

//mSearch

let searchBtn = document.querySelector("nav .search-btn");
searchBtn.addEventListener("click", mSearchF);

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


for(let i = 0; i < document.querySelectorAll('#shortsBtn').length ;i++) {
  document.querySelectorAll('#shortsBtn')[i].addEventListener('click', (e) => {
    window.location.href = 'shorts.html'
  })
} 


function appendVideos(array, div, propertyPath, comparisonOperator, expectedValue) {
  for (let i = 0; i < array.length; i++) {
    if( propertyPath && comparisonOperator && expectedValue) {
      let propertyValue = propertyPath.split('.').reduce((o, k) => (o || {})[k], array[i]);
      let comparisonResult;
      switch (comparisonOperator) {
        case '==':
          comparisonResult = propertyValue == expectedValue;
          break;
        case '>=':
          comparisonResult = propertyValue >= expectedValue;
          break;
        case '<=':
          comparisonResult = propertyValue <= expectedValue;
          break;
        default:
          comparisonResult = false; 
      }
      if(comparisonResult) {
        let video = document.createElement("div");
        video.classList.add('video');
        video.setAttribute("id", `video${i}`);
        video.setAttribute("tabindex", '0');
        video.innerHTML = videoHTML(
          array[i].date,
          array[i].thumbnail,
          array[i].src,
          FormatTime(array[i].duration),
          array[i].channel.image,
          array[i].name,
          array[i].channel.name,
          timeSince(array[i].date),
          array[i].views
        );
        div.appendChild(video);
      }
    } else {
      let video = document.createElement("div");
      video.classList.add('video');
      video.setAttribute("id", `video${i}`);
      video.setAttribute("tabindex", '0');
      video.innerHTML = videoHTML(
        array[i].date,
        array[i].thumbnail,
        array[i].src,
        FormatTime(array[i].duration),
        array[i].channel.image,
        array[i].name,
        array[i].channel.name,
        timeSince(array[i].date),
        array[i].views
      );
      div.appendChild(video);
    }
  }
}
function appendShorts(array, div, propertyPath, comparisonOperator, expectedValue) {
  for (let i = 0; i < array.length; i++) {
    if( propertyPath && comparisonOperator && expectedValue) {
      let propertyValue = propertyPath.split('.').reduce((o, k) => (o || {})[k], array[i]);
      let comparisonResult;
      switch (comparisonOperator) {
        case '==':
          comparisonResult = propertyValue == expectedValue;
          break;
        case '>=':
          comparisonResult = propertyValue >= expectedValue;
          break;
        case '<=':
          comparisonResult = propertyValue <= expectedValue;
          break;
        default:
          comparisonResult = false; 
      }
      if(comparisonResult) {
        let short = document.createElement("div");
        short.classList.add('short');
        short.setAttribute("id", `short${i}`);
        short.setAttribute("tabindex", '0');
        short.innerHTML = shortHTML(
          array[i].date,
          array[i].src,
          array[i].likes,
          array[i].channel,
          array[i].name,
          array[i].date,
          array[i].views
        );
        div.appendChild(short);
      }
    } else {
      let short = document.createElement("div");
      short.classList.add('short');
      short.setAttribute("id", `short${i}`);
      short.setAttribute("tabindex", '0');
      short.innerHTML = shortHTML(
        array[i].date,
        array[i].src,
        array[i].likes,
        array[i].channel,
        array[i].name,
        array[i].date,
        array[i].views
      );
      div.appendChild(short);
    }
  }
}
function applyHScroll(div) {
  let container = div.querySelector('.h-scroll');
  let hContInner = container.querySelector('.c-scroll');
  let hContDivs = Array.from(container.querySelectorAll('.c-scroll .items > div'));
  let itemsCont = div.querySelector('.c-scroll .items');
  container.insertAdjacentHTML('afterbegin', lScrollBDiv);
  container.insertAdjacentHTML('afterbegin', rScrollBDiv);
  let lScrollB = container.querySelector('.l-scroll-b');
  let rScrollB = container.querySelector('.r-scroll-b');
  
  function prevDiv() {
    let hContInnerRect = hContInner.getBoundingClientRect();
    const divWidth = hContDivs[0].getBoundingClientRect().width + parseInt(getComputedStyle(hContDivs[0]).marginRight);
    let w = 1;
    while (divWidth * w <= hContInnerRect.width + parseInt(getComputedStyle(hContDivs[0]).marginRight)) {
      w++;
    }
    let scrollWidth = divWidth * (w - 1);
    lScrollB.classList.remove('animation')
    lScrollB.classList.add('animation')
    hContInner.scrollBy({
      top:0,
      left: -scrollWidth,
      behavior: "smooth",
    })
    hContInner.addEventListener('scrollend',(e)=> {
      checkButtons()
      lScrollB.classList.remove('animation')
    })
  }
  function nextDiv() {
    // console.log(itemsCont.);
    let hContInnerRect = hContInner.getBoundingClientRect();
    const divWidth = hContDivs[0].getBoundingClientRect().width + parseInt(getComputedStyle(hContDivs[0]).marginRight);
    let w = 1;
    while (divWidth * w <= hContInnerRect.width + parseInt(getComputedStyle(hContDivs[0]).marginRight)) {
      w++;
    }
    let scrollWidth = divWidth * (w - 1);
    lScrollB.classList.remove('animation')
    rScrollB.classList.add('animation')
    hContInner.scrollBy({
      top:0,
      left: scrollWidth,
      behavior: "smooth"
    })
    hContInner.addEventListener('scrollend',(e)=> {
      checkButtons()
      rScrollB.classList.remove('animation')
    })
  }
  function checkButtons(e) {
      if(hContInner.scrollLeft >= hContInner.scrollWidth - hContInner.clientWidth) {
        rScrollB.style.display = 'none'
      } else {
        rScrollB.style.display = 'flex'
      }
      if(hContInner.scrollLeft == 0) {
        lScrollB.style.display = 'none'
      } else {
        lScrollB.style.display = 'flex'
    }
  }
  window.addEventListener('resize',checkButtons)
  checkButtons()
  lScrollB.addEventListener('click', prevDiv);
  rScrollB.addEventListener('click', nextDiv);
}

document.querySelectorAll('#userImage').forEach(img => {
  img.src = user.image
});
  function scrollToX(div,distance, duration) {
    const container =div
    const startTime = performance.now();
    const initialX = container.scrollLeft;
  
    function step() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const scrollAmount = distance * progress;
      container.scrollBy(scrollAmount, 0);
  
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  