const ratingContainer = document.querySelector('.rating');
const rating = parseInt(ratingContainer.getAttribute('data-rating'), 10);
const totalStars = 5;

export function showStars(ratingContainer) {
    const rating = parseInt(ratingContainer.getAttribute('data-rating'), 10);
    const totalStars = 5;
  
    for (let i = 1; i <= totalStars; i++) {
      const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      star.setAttribute('width', '19');
      star.setAttribute('height', '19');
      star.setAttribute('viewBox', '0 0 19 19');
  
      const useElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');
      useElement.setAttribute('href', '#star');
      useElement.setAttribute('fill', i <= rating ? '#F95F5F' : '#E5E5E5');
  
      star.appendChild(useElement);
      ratingContainer.appendChild(star);
    }
  }