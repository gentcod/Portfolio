'use scrict'

const welcomeMessage = document.querySelector('.greeting')

const navigation = document.querySelector('.navigation')
const navLink = document.querySelectorAll('.navigation__link')
const navAbout = document.querySelector('.navigation__about')
const navContact = document.querySelector('.navigation__contact')
const navExplore = document.querySelector('.navigation__explore')

const header = document.querySelector('.header')

const sections = document.querySelectorAll('.section')
const sectionTop = document.querySelector('.section__top')
const sectionAbout = document.querySelector('.section__about')
const sectionContact = document.querySelector('.section__contact')
const sectionExplore = document.querySelector('.section__explore')


/////////////////////////////////////////////////
//To display appropriate greeting at appropraite time
const time = new Date()
const greeting = () => {
  if (time.getHours() < 12) {
    welcomeMessage.textContent = 'Hello, Good morning 🌦🌞';
  }

  else if (time.getHours() >= 12 && time.getHours() < 17) {
    welcomeMessage.textContent = 'Hello, Good afternoon 🌞';
  }

  else if (time.getHours() >= 17) {
    welcomeMessage.textContent = 'Hello, Good evening 🌙';
  }
}
greeting()

//Implementing smooth scrolling
navigation.addEventListener('click', function(e) {
  e.preventDefault()

  if (e.target.classList.contains('navigation__link')) {
    const sectionPosition = e.target.getAttribute('href')
    document.querySelector(sectionPosition).scrollIntoView({behavior: 'smooth'})
  }

  if (e.target.classList.contains('navigation__logo')) {
    const logo = e.target.closest('.navigation').querySelector('.navigation__logo')
    const sectionPosition = logo.getAttribute('href')
    document.querySelector(sectionPosition).scrollIntoView({behavior: 'smooth'})
  }
})

//Sticky navigation
const navHeight = navigation.getBoundingClientRect().height

const stickyNav = function(entries) {
  const [entry] = entries //To get the first entry
  if(!entry.isIntersecting) navigation.classList.add('sticky')
  else navigation.classList.remove('sticky')
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight - 40}px` //distance away from target
})
headerObserver.observe(sectionTop)

//Navigation select
// const navSelect = function(entries, observer) {
//   const [entry] = entries
//   // console.log(entry.target.classList)


  
//   if (entry.target.classList.contains('section__about') && entry.isIntersecting) navAbout.classList.add('navigation--neumorph')
//   else navAbout.classList.remove('section--neumorph')

//   // if (entry.target.classList.contains('section__contact') && entry.isIntersecting) navContact.classList.add('navigation--neumorph')
//   // else navContact.classList.remove('section--neumorph')

//   // if (entry.target.classList.contains('section__explore') && entry.isIntersecting) navExplore.classList.add('navigation--neumorph')
//   // else navExplore.classList.remove('section--neumorph')
// }

// const navLinkObserver = new IntersectionObserver(navSelect, {
//   root: null,
//   threshold: 0.5,
// })

// sections.forEach(function(section) {
//   navLinkObserver.observe(section)
// })

navLink.forEach(function(nav) {
  nav.classList.remove('navigation--neumorph')
})

// navLinkObserver.observe(sectionContact)
// navLinkObserver.observe(sectionExplore)
