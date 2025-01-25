const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');


export function getWindowWidth() {
  return window.innerWidth;
}

export function removeBurgerButton() {
    if (getWindowWidth() > 768) {
      nav.classList.remove('navigation--opened');
      navToggle.classList.remove('active');
    }
}