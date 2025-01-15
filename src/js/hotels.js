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
    alt: 'фото отеля Danubius Hotel Regents Park.',
    subtitle: 'London NW8 7JT England',
    title: 'Danubius Hotel Regents Park',
    price: '\$200 Per Night',
    rating: 4.5,
  },
  {
    img: `${path}public/assets/images/hotel-2.webp`,
    alt: 'фото отеля The Resident Soho.',
    subtitle: 'London NW8 7JT England',
    title: 'The Resident Soho',
    price: '\$200 Per Night',
    rating: 4.7,
  },
  {
    img: `${path}public/assets/images/hotel-3.webp`,
    alt: 'фото отеля London Bridge Hotel.',
    subtitle: 'London NW8 7JT England',
    title: 'London Bridge Hotel',
    price: '\$200 Per Night',
    rating: 5,
  },
  {
    img: `${path}public/assets/images/hotel-4.webp`,
    alt: 'фото отеля Premier Hotel.',
    subtitle: 'London NW8 7JT England',
    title: 'Premier Hotel',
    price: '\$200 Per Night',
    rating: 3.7,
  },
  {
    img: `${path}public/assets/images/hotel-5.webp`,
    alt: 'фото отеля Hilton.',
    subtitle: 'London NW8 7JT England',
    title: 'Hilton',
    price: '\$200 Per Night',
    rating: 4.8,
  },
  {
    img: `${path}public/assets/images/hotel-6.webp`,
    alt: 'фото отеля The Grand Hotel.',
    subtitle: 'London NW8 7JT England',
    title: 'The Grand Hotel',
    price: '\$200 Per Night',
    rating: 4.6,
  },
  {
    img: `${path}public/assets/images/hotel-7.webp`,
    alt: 'фото отеля Azimut Hotel.',
    subtitle: 'London NW8 7JT England',
    title: 'Azimut Hotel',
    price: '\$200 Per Night',
    rating: 3.3,
  },
  {
    img: `${path}public/assets/images/hotel-8.webp`,
    alt: 'фото отеля Ibis Soho.',
    subtitle: 'London NW8 7JT England',
    title: 'Ibis Soho',
    price: '\$200 Per Night',
    rating: 4.9,
  },
  {
    img: `${path}public/assets/images/hotel-9.webp`,
    alt: 'фото отеля Oz Hotel.',
    subtitle: 'London NW8 7JT England',
    title: 'Oz Hotel',
    price: '\$200 Per Night',
    rating: 2.8,
  },
  {
    img: `${path}public/assets/images/hotel-10.webp`,
    alt: 'фото отеля Radisson.',
    subtitle: 'London NW8 7JT England',
    title: 'Radisson',
    price: '\$200 Per Night',
    rating: 4.7,
  },
];