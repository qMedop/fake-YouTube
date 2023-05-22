let sugg = document.querySelector(".sugg")
let previous = document.querySelector(".back")
let next = document.querySelector(".next")
let test = 0


next.addEventListener('click', () => {
  sugg.scrollBy(
    {
      left: 2000,
      behavior: "smooth"
    }
  )
  previous.style.display = 'flex'
  next.style.display = 'none'
  if (window.innerWidth <= 520) {
    previous.style.display = 'none'
    next.style.display = 'none'
  }
})
previous.addEventListener('click', () => {
  sugg.scrollBy(
    {
      left: -2000,
      behavior: "smooth"
    }
  )
  previous.style.display = 'none'
  next.style.display = 'flex'
  if (window.innerWidth <= 520) {
    previous.style.display = 'none'
    next.style.display = 'none'
  }
})
