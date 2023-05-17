let searchInput = document.getElementById("input-search")
let searchdiv = document.querySelector(".search")

searchInput.onfocus = function() {
  searchdiv.style.border = "1px solid #1c62b9"
  console.log("g");
}
searchInput.addEventListener ('focusout', () => {
  searchdiv.style.border = "1px solid #272727"
  console.log('s');
})

let sugg = document.querySelector(".sugg")
let previous = document.querySelector(".back")
let next = document.querySelector(".next")
let test = 0

setInterval(() => {
  if(window.innerWidth <= 520) {
    previous.style.display = 'none'
    next.style.display = 'none'
  }

}, 1000);

next.addEventListener('click' , () => {
  sugg.scrollBy(
    {
      left: 2000,
      behavior: "smooth"
    }
  )
  previous.style.display = 'flex'
  next.style.display = 'none'
  if(window.innerWidth <= 520) {
    previous.style.display = 'none'
    next.style.display = 'none'
  }
})
previous.addEventListener('click' , () => {
  sugg.scrollBy(
    {
      left: -2000,
      behavior: "smooth"
    }
  )
  previous.style.display = 'none'
  next.style.display = 'flex'
  if(window.innerWidth <= 520) {
    previous.style.display = 'none'
    next.style.display = 'none'
  }
})