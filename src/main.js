import '/public/styles/style.scss'
import { setupCounter } from './js/counter.js'
import { initTabs } from './js/tabs.js'
import { hotels } from "./js/hotels.js";
import { generateHotels } from './js/generate-hotels.js';
import { generateFacilities } from './js/generate-facilities.js';
import { facilities } from './js/facilities.js';

const counter = document.querySelector('.counter');
if (counter) {
  setupCounter(counter);
};

setTimeout(() => generateHotels(hotels), 1000);
setTimeout(() => generateFacilities(facilities), 1000);
