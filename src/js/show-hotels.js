import { generateHotels } from "./generate-hotels.js";
import { hotels } from "./hotels.js";

export function showHotels() {
    const hotelsList = document.getElementById('hotel-list')
    const hotelsListPopular = document.querySelectorAll('.hotels__card');
    const hotelCardsContainer = document.querySelector('.hotels__slider');
    console.log(hotelsListPopular)

    const cardsPopular = hotels.slice(0, 3);
    console.log(cardsPopular)
    hotelsList.remove();
    generateHotels(cardsPopular);
}

export function displayAllCards() {
    const hotelsList = document.getElementById('hotel-list')
    hotelsList.remove();
    generateHotels(hotels);
 }

document.querySelector('.hotels__button').addEventListener('click', displayAllCards);