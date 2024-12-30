function getWindowWidth() {
  return window.innerWidth;
}

export function removeBurgerButton() {
    if (getWindowWidth() > 768) {
      nav.classList.remove('navigation--opened');
      navToggle.classList.remove('active');
    }
}