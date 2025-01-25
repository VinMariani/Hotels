import '/public/styles/style.scss'
// import { setupCounter } from './js/counter.js'
// import { initTabs } from './js/tabs.js'
import { hotels } from "./js/hotels.js";
import { facilities } from './js/facilities.js';
import { showBurgerMenu } from './js/show-burger-menu.js';
import { removeBurgerButton } from './js/remove-burger-button.js';
import { initSwipers } from './js/swiper.js';


const facilitis_list = document.querySelector('.facilities')
const hotels_list = document.querySelector('.hotels')
const modalButtons = document.querySelectorAll('[data-js-open-modal]');
const hotelsButton = document.querySelector('.hotels__button');

// для чего этот код?
// const counter = document.querySelector('.counter');
// if (counter) {
//   setupCounter(counter);
// };

async function loadModules() {
  if (facilitis_list) {
    const {generateFacilities} = await import('./js/generate-facilities.js');
    generateFacilities(facilities);
  }

  if (hotels_list) {
    const {generateHotels} = await import('./js/generate-hotels.js');
    generateHotels(hotels);
  }

  if (modalButtons) {
    const {initModals} = await import('./js/initModals.js');
    initModals();
  }

  if (hotelsButton) {
    const {toggleText} = await import('./js/hotels-button-text-toggle.js');
    const {showHotels} = await import('./js/show-hotels.js');
    const {displayAllCards} = await import('./js/show-hotels.js');
    showHotels();
  }
}



document.addEventListener('DOMContentLoaded', () => {
  // initTabs();
  showBurgerMenu();
  removeBurgerButton();
  initSwipers();
  loadModules();
});

