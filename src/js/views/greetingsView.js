import View from "./View";

class GreetingsView extends View {
   _parentEl = document.querySelector('.greeting');

   greeting () {
      const time = new Date();
      if (time.getHours() < 12) {
        this._parentEl.textContent = 'Hello, Good morning 🌦🌞';
      }
    
      else if (time.getHours() >= 12 && time.getHours() < 17) {
        this._parentEl.textContent = 'Hello, Good afternoon 🌞';
      }
    
      else if (time.getHours() >= 17) {
        this._parentEl.textContent = 'Hello, Good evening 🌙';
      }
   };
}