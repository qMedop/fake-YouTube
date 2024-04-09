window.addEventListener('load', () => {
  let containClick = document.querySelectorAll('.contain-click')
for(let i = 0; i < containClick.length; i++) {
  let clickDiv = document.createElement('div')
  clickDiv.classList.add('click')
  containClick[i].appendChild(clickDiv)
} 
for(let i = 0; i < containClick.length; i++) {
  containClick[i].addEventListener('pointerdown', (e) => {
    for(let l = 0; l < containClick[i].children.length; l++) {
      if(containClick[i].children[l].classList.contains('click')) {
        let clickX = containClick[i].getBoundingClientRect().left
        let clickY = containClick[i].getBoundingClientRect().top
        let divWidth =  containClick[i].getBoundingClientRect().width
        let divHeight =  containClick[i].getBoundingClientRect().height
        let mouseX = e.x
        let mouseY = e.y
        let divLeft =( mouseX - clickX) 
        let divTop = (mouseY - clickY) 
        let ripple = document.createElement('span')
        ripple.classList.add('ripple')
        ripple.style.top = divTop + 'px'
        ripple.style.left = divLeft + 'px'  
        if(divWidth >= divHeight) {
          divHeight = divWidth;
        } else {
          divWidth = divHeight; 
        }
        containClick[i].children[l].appendChild(ripple)
        setTimeout(() => {
                  ripple.style.width = divWidth + 'px'
                  ripple.style.height = divHeight + 'px'  
        }, 10);
        document.addEventListener('pointercancel', () => {
            ripple.style.opacity = 0
            setTimeout(() => {
              ripple.remove()
            }, 800);
        })
        document.addEventListener('pointerup', () => {
          ripple.style.opacity = 0
          setTimeout(() => {
            ripple.remove()
          }, 800);
      })
      }
    }
  })
}
})
let hScrolls = document.querySelectorAll('.h-scroll')
let lScrollBDiv = `<div class="scroll-b l-scroll-b">
<button>
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
</div>`
let rScrollBDiv = `<div class="scroll-b r-scroll-b">
<button>
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
</div>`
