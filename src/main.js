import '/public/styles/style.scss'
import { initSwipers } from './js/swiper.js';

const facilitis_list = document.querySelector('.facilities')
const hotels_list = document.querySelector('.hotels')
const modalButtons = document.querySelectorAll('[data-js-open-modal]');
const viewHotelsButton = document.querySelector('.hotels__button');
const burgerButton = document.querySelector('.navigation__toggle');


async function loadModules() {
  if (facilitis_list) {
    const {facilities} = await import('./js/facilities.js')
    const {generateFacilities} = await import('./js/generate-facilities.js');
    generateFacilities(facilities);
  }

  if (hotels_list) {
    const {hotels} = await import('./js/hotels.js');
    const {generateHotels} = await import('./js/generate-hotels.js');
    generateHotels(hotels);
  }

  if (modalButtons) {
    const {initModals} = await import('./js/initModals.js');
    initModals();
  }

  if (viewHotelsButton) {
    const {toggleText} = await import('./js/hotels-button-text-toggle.js');
    const {showHotels} = await import('./js/show-hotels.js');
    const {displayAllCards} = await import('./js/show-hotels.js');
    showHotels();
  }

  if (burgerButton) {
    const {showBurgerMenu} = await import('./js/show-burger-menu.js');
    const {removeBurgerButton} = await import('./js/remove-burger-button.js');
    const {getWindowWidth} = await import('./js/remove-burger-button.js');
    getWindowWidth();
    showBurgerMenu();
    removeBurgerButton();
  }
}



document.addEventListener('DOMContentLoaded', () => {
  initSwipers();
  loadModules();
});

