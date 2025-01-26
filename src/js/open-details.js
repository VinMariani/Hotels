export function initAccordion() {
    document.querySelectorAll('.questions__question').forEach(summary => {
      summary.addEventListener('click', () => {
        const details = summary.parentElement;
        const isOpen = details.hasAttribute('open');
  
        // Закрыть все открытые элементы
        document.querySelectorAll('.questions__item[open]').forEach(openDetails => {
          if (openDetails !== details) {
            openDetails.removeAttribute('open');
          }
        });
  
        if (isOpen) {
          details.removeAttribute('open');
        } else {
          details.setAttribute('open', '');
        }
      });
    });
  }