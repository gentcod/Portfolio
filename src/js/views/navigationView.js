import View from "./View";
import { STICKY_NAV_COLOR } from "../config";

class NavigationView extends View {
   _parentEl = document.querySelector('..navigation');
   _navLink = document.querySelectorAll('.navigation__link')
   _sectionPosition;
   _sectionTop = document.querySelector('.section__top')
   _navHeight = this._parentEl.getBoundingClientRect().height



   stickyNav (entries) {
      const [entry] = entries //To get the first entry
      if(!entry.isIntersecting) {
        this._parentEl.classList.add('sticky')
          _navLink.forEach(function(nav) {
            nav.style.color = STICKY_NAV_COLOR;
          // nav.classList.add('this._parentEl--neumorph')
          document.querySelector('.navigation__logo--name').style.color = STICKY_NAV_COLOR;
        })
    
      }
      else {
        this._parentEl.classList.remove('sticky')
        // nav.classList.remove('this._parentEl--neumorph')
      }
   }

   _scrollIntoView(view) {
      document.querySelector(view).scrollIntoView({behavior: 'smooth'})
   }

   addHandler(handler) {
      this._parentEl.addEventListener('click', function(e) {
         e.preventDefault()
       
         if (e.target.classList.contains('navigation__link')) {
            this._sectionPosition = e.target.getAttribute('href')
            this._scrollIntoView(this._sectionPosition)
         }
       
         if (e.target.classList.contains('navigation__logo')) {
           const logo = e.target.closest('.navigation').querySelector('.navigation__logo')
           this._sectionPosition = logo.getAttribute('href')
           this._scrollIntoView(this._sectionPosition)
         }
      })

      handler();
   }
};

export default new NavigationView