import * as model from './model';

import navigationView from './views/navigationView';

const controlNavigation = () => {
   const callback = navigationView.stickyNav;
   const distance = navigationView._navHeight;
   const coord = navigationView._sectionTop;

   model.sectionObserver(callback, distance, coord);
};

const init = function() {
   navigationView.addHandler(controlNavigation);
};

init();