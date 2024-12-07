export function showHotels() {
    const hotelsListPopular= document.querySelector('.hotels__list');
    const cardsPopular = hotelsListPopular.slice(0, 3);

    const hotelCardsContainer = document.querySelector('.hotels__slider');
    hotelCardsContainer.innerHTML = cardsPopular.push();
}

export function displayAllCards() {
    const hotelCardsContainer = document.querySelector('.hotels__slider');
    hotelCardsContainer.innerHTML = hotelCards.push();
}

document.querySelector('.hotels__button').addEventListener('click', displayAllCards);