import { generateHotels } from "./generate-hotels.js";
import { hotels } from "./hotels.js";
import { toggleText } from "./hotels-button-text-toggle.js";

const viewHotelsButton = document.querySelector('.hotels__button');

export function showHotels() {
    const hotelsList = document.getElementById('hotel-list')
    const hotelsListPopular = document.querySelectorAll('.hotels__card');
    const hotelCardsContainer = document.querySelector('.hotels__slider');
    const cardsPopular = hotels.slice(0, 3);

    hotelsList.remove();
    generateHotels(cardsPopular);
}

export function displayAllCards() {
    const hotelsList = document.getElementById('hotel-list');

    hotelsList.remove();
    generateHotels(hotels);
 }

 export function hideAllCards() {
    const hotelsList = document.getElementById('hotel-list')
    const hotelsListPopular = document.querySelectorAll('.hotels__card');
    const cardsPopular = hotels.slice(0, 3);

    hotelsList.remove();
    generateHotels(cardsPopular);
 }


viewHotelsButton.addEventListener('click', function() {
    viewHotelsButton.classList.toggle('hotels__button--active');
    if (viewHotelsButton.classList.contains('hotels__button--active')) {
        displayAllCards();
        toggleText();
    } else {
        hideAllCards();
        toggleText();
    }
})