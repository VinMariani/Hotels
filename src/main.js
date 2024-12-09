import '/public/styles/style.scss'
import { setupCounter } from './js/counter.js'
import { initTabs } from './js/tabs.js'
import { hotels } from "./js/hotels.js";
import { generateHotels } from './js/generate-hotels.js';
import { generateFacilities } from './js/generate-facilities.js';
import { facilities } from './js/facilities.js';
import { showHotels } from './js/show-hotels.js';

// import { displayAllCards } from './js/show-hotels.js';

const counter = document.querySelector('.counter');
if (counter) {
  setupCounter(counter);
};

setTimeout(() => generateHotels(hotels), 1000);
setTimeout(() => generateFacilities(facilities), 1000);
setTimeout(() => showHotels(), 1000);
// setTimeout(() => displayAllCards(), 1000);

const modalButtons = document.querySelectorAll('[data-js-open-modal]');
const overlay = document.querySelector('#overlay-modal'); 
const closeButtons = document.querySelectorAll('.js-open-modal-close');


modalButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const modalId = this.getAttribute('data-modal');
        const modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
        modalElem.classList.add('active');
        overlay.classList.add('active'); 
    })
})

closeButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
  })
})