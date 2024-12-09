import { generateHotels } from "./generate-hotels.js";
import { hotels } from "./hotels.js";

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

const viewHotelsButton = document.querySelector('.hotels__button');
// viewHotelsButton.addEventListener('click', displayAllCards); // -- работало


export function toggleText() {

    const viewHotelsButton = document.querySelector('.hotels__button');
    if (viewHotelsButton.textContent == "View all") {
        viewHotelsButton.textContent = "Hide all";
    } else {
     viewHotelsButton.textContent = "View all";
    };
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


