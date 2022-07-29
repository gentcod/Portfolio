'use scrict'

import { TIME_SEC } from "./config.js";

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

const hireMe = document.querySelector('.intro__btn--hire-me');
const LearnMore = document.querySelector('.intro__btn--learn-more');

const overlay = document.querySelector('.intro__overlay');
const intro = document.querySelector('.intro__container')
const mailIcon = document.querySelectorAll('.email');

const getIntouch = document.querySelector('.get-in-touch-form')


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
  if(!entry.isIntersecting) {
    navigation.classList.add('sticky')
      navLink.forEach(function(nav) {
      nav.classList.add('navigation--neumorph')
    })

  }
  else {
    navigation.classList.remove('sticky')
    nav.classList.remove('navigation--neumorph')
  }
}

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight - 40}px` //distance away from target
})
headerObserver.observe(sectionTop)

////////////////////////////////
//Hire me mail
const mailSubject = 'JOB OFFER';
const mailBody = 'Hello Oyefule, I would like to hire you'
const mailBodySocial = 'Hello Oyefule, I viewed your portfolio and would like to get in touch with you'


hireMe.addEventListener('click', () => [
  window.open(`mailto:drelanorgent@gmail.com?subject=${mailSubject}&body=${mailBody}`)
])

LearnMore.addEventListener('click', () => {
  window.open(`https://docs.google.com/document/d/e/2PACX-1vRHpypIpHmtHunuuvmPhv1ovLyWvkkL7ROxBRbo2e-PAFVzsejsm9nlcD4R5aTjlQ/pub`)
})

overlay.addEventListener('mouseover', function() {
  this.classList.add('hidden')
});

overlay.addEventListener('mouseout', function() {
  setTimeout(()=> {
    overlay.classList.remove('hidden');
  }, TIME_SEC * 1000)
})

mailIcon.forEach(icon => icon.addEventListener('click', () => {
  window.open(`mailto:drelanorgent@gmail.com?subject=${mailSubject}&body=${mailBodySocial}`)
}))

getIntouch.addEventListener('submit', function(e) {
  e.preventDefault();

  const formEmail = document.querySelector('.form-email').value;
  const formName = document.querySelector('.form-name').value;
  const formMsg = document.querySelector('.form-msg').value;
  const message = `Hello I'm ${formName}, ${formMsg}, contact me using ${formEmail}`

  window.open(`mailto:drelanorgent@gmail.com?subject=${mailSubject}&body=${message}`)
})

const sliderBtnLeft = document.querySelector('.slider-btn--left');
const sliderBtnRight = document.querySelector('.slider-btn--right');

//Explore section Slider
const slider = function() {

  const slides = document.querySelectorAll('.explore-website-feature-wrap');
  const slideText = document.querySelectorAll('.explore-website-feature-desc--text');
  const pagination = document.querySelector('.explore-website-feature-pagination');

  let curSlide = 0; //for click count and current slide index
  const maxSlide = slides.length 

  //Create dots for slider
  const createDots = function() {
    slides.forEach(function(_, i) {
      pagination.insertAdjacentHTML('beforeend', `<button class="explore-website-feature-pagination-nav" data-slide='${i}'></button>`)
    })
  }

  //Activate dot for slider
  const activateDot = function(slide) {
    document.querySelectorAll('.explore-website-feature-pagination-nav').forEach(dot => dot.classList.remove('explore-website-feature-pagination-nav-active'))
    document.querySelector(`.explore-website-feature-pagination-nav[data-slide='${slide}']`).classList.add('explore-website-feature-pagination-nav-active')
  }

  //Go to slide
  const gotoSlide = function(cur) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - cur)}%)`;
    })

    slideText.forEach((text, i) => {
      text.style.transform = `translateX(${100 * (i - cur)}%)`;
    })
  }

  //Next slide
  const nextSlide = function() {
    if (curSlide === maxSlide -1) {
      curSlide = 0; //To return to first slide
    }
    else curSlide++;

    gotoSlide(curSlide)
    activateDot(curSlide)
  }

  //Previous slide
  const prevSlide = function() {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    }
    else curSlide--;

    gotoSlide(curSlide)
    activateDot(curSlide)
  }

  //Set initial position of slides or initialize functions
  const init = function() {
    gotoSlide(0)
    createDots()
    activateDot(0)
  }
  init()

  sliderBtnRight.addEventListener('click', nextSlide)
  sliderBtnLeft.addEventListener('click', prevSlide)

  pagination.addEventListener('click', function(e) {
    e.preventDefault()
    
    if (e.target.classList.contains('explore-website-feature-pagination-nav')) {
      const {slide} = e.target.dataset //Destructuring
      gotoSlide(slide)
      activateDot(slide)
    }
  })
}

slider()


// // Navigation select
// const navSelect = function(entries, observer) {
//   const [entry] = entries
//   console.log(entry.target.classList)
//   console.log(!entry.target.classList.contains('section__about'))
//   console.log(entry.isIntersecting)
//   console.log(entry)
  
//   if (!entry.isIntersecting) navAbout.classList.remove('navigation--neumorph')
//   else navAbout.classList.add('navigation--neumorph')



//   // if (entry.target.classList.contains('section__contact') && entry.isIntersecting) navContact.classList.add('navigation--neumorph')
//   // else navContact.classList.remove('section--neumorph')

//   // if (entry.target.classList.contains('section__explore') && entry.isIntersecting) navExplore.classList.add('navigation--neumorph')
//   // else navExplore.classList.remove('section--neumorph')
// }

// const navLinkObserver = new IntersectionObserver(navSelect, {
//   root: null,
//   threshold: 0.5,
// })

// navLinkObserver.observe(sectionAbout)
// // sections.forEach(function(section) {
// // })

// // navLinkObserver.observe(sectionContact)
// // navLinkObserver.observe(sectionExplore)