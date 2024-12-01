export function generateHotels(hotels) {
  const hotelsList = document.createElement('ul');
  
  hotels.forEach(hotel => {
    const hotelItem = document.createElement('li');
    const hotelImage = document.createElement('img');
    const hotelSubtitle = document.createElement('p');
    const hotelTitle = document.createElement('h2');
    const hotelPrice = document.createElement('span');
    const hotelRating = document.createElement('span');

    hotelImage.setAttribute('src', hotel.img);
    hotelImage.setAttribute('width', 300);
    hotelImage.setAttribute('class', 'hotels__img');
    hotelsList.setAttribute('class', 'hotels__list list-reset');
    hotelItem.setAttribute('class', 'hotels__card');
    hotelSubtitle.setAttribute('class', 'hotels__subtitle');
    hotelTitle.setAttribute('class', 'hotels__name');
    hotelPrice.setAttribute('class', 'hotels__price');



    hotelTitle.textContent = hotel.title;
    hotelSubtitle.textContent = hotel.subtitle;
    hotelPrice.textContent = hotel.price;
    hotelRating.textContent = hotel.rating;

    hotelsList.appendChild(hotelItem)

    hotelItem.appendChild(hotelImage)
    hotelItem.appendChild(hotelSubtitle)
    hotelItem.appendChild(hotelTitle)
    hotelItem.appendChild(hotelPrice)
    hotelItem.appendChild(hotelRating)

  });
  document.querySelector('.hotels__slider').appendChild(hotelsList)
}