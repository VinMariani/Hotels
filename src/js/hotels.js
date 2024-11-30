const checkPath = window.location.href;
const hasCatalog = checkPath.indexOf("pages") !== -1;

let path = '';

if (hasCatalog) {
  path = './../../'
} else {
  path = './'
}

export const hotels = [
  {
    img: `${path}public/assets/images/hotel-1.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'Danubius Hotel Regents Park',
    price: '\$200 Per Night',
    rating: 4.5,
  },
  {
    img: `${path}public/assets/images/hotel-2.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'The Resident Soho',
    price: '\$200 Per Night',
    rating: 4.7,
  },
  {
    img: `${path}public/assets/images/hotel-3.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'London Bridge Hotel',
    price: '\$200 Per Night',
    rating: 5,
  },
  {
    img: `${path}public/assets/images/hotel-4.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'Premier Hotel',
    price: '\$200 Per Night',
    rating: 3.7,
  },
  {
    img: `${path}public/assets/images/hotel-5.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'Hilton',
    price: '\$200 Per Night',
    rating: 4.8,
  },
  {
    img: `${path}public/assets/images/hotel-6.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'The Grand Hotel',
    price: '\$200 Per Night',
    rating: 4.6,
  },
  {
    img: `${path}public/assets/images/hotel-7.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'Azimut Hotel',
    price: '\$200 Per Night',
    rating: 3.3,
  },
  {
    img: `${path}public/assets/images/hotel-8.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'Ibis Soho',
    price: '\$200 Per Night',
    rating: 4.9,
  },
  {
    img: `${path}public/assets/images/hotel-9.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'Oz Hotel',
    price: '\$200 Per Night',
    rating: 2.8,
  },
  {
    img: `${path}public/assets/images/hotel-10.webp`,
    subtitle: 'London NW8 7JT England',
    title: 'Radisson',
    price: '\$200 Per Night',
    rating: 4.7,
  },
];