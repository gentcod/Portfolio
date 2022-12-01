import View from "./View.js";
import { STICKY_NAV_COLOR } from "../config.js";

class NavigationView extends View {
   _parentEl = document.querySelector('.navigation');
   _navLink = document.querySelectorAll('.navigation__link')
   _sectionTop = document.querySelector('.section__top')
   _navHeight = this._parentEl.getBoundingClientRect().height



   stickyNav (entries) {
      const [entry] = entries;
      if(!entry.isIntersecting) {
         document.querySelector('.navigation').classList.add('sticky')
        
         document.querySelectorAll('.navigation__link').forEach(function(nav) {
            nav.style.color = STICKY_NAV_COLOR;
            document.querySelector('.navigation__logo--name').style.color = STICKY_NAV_COLOR;
         })
    
      }
      else {
         document.querySelector('.navigation').classList.remove('sticky');
      }
   }

   // _scrollIntoView(view = '.header') {
   //    document.querySelector(view).scrollIntoView({behavior: 'smooth'});
   // }

   addHandler(handler) {
      let sectionPosition;

      this._parentEl.addEventListener('click', function(e) {
         e.preventDefault();
       
         if (e.target.classList.contains('navigation__link')) {
            sectionPosition = e.target.getAttribute('href');
            document.querySelector(sectionPosition).scrollIntoView({behavior: 'smooth'});
         }
       
         if (e.target.classList.contains('navigation__logo')) {
           const logo = e.target.closest('.navigation').querySelector('.navigation__logo');
           sectionPosition = logo.getAttribute('href');
           document.querySelector(sectionPosition).scrollIntoView({behavior: 'smooth'});
         }
      });

      // this._scrollIntoView(sectionPosition);

      handler();
   }
};

export default new NavigationView;