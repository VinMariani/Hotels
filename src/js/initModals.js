export function initModals() {
  const modalButtons = document.querySelectorAll('[data-js-open-modal]');
  const overlay = document.querySelector('#overlay-modal');
  const closeButtons = document.querySelectorAll('.js-modal-close');

  // Открытие модального окна
  modalButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const modalId = this.getAttribute('data-modal');
      const modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

      modalElem.classList.add('active');
      overlay.classList.add('active');
    });
  });

  // Закрытие по крестику
  closeButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      const parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  // Закрытие по кнопке Esc
  document.body.addEventListener('keyup', function(event) {
    const key = event.key;

    if (key == 'Escape') {
      document.querySelector('.modal.active').classList.remove('active');
      document.querySelector('.overlay.active').classList.remove('active');
    }
  }, false);

  // Закрытие по клику на подложку
  overlay.addEventListener('click', function() {
    document.querySelector('.modal.active').classList.remove('active');
    this.classList.remove('active');
  });
}

