export function generateFacilities(facilities) {
    const facilitiesList = document.createElement('ul');

    const wrapper = document.querySelector('.facilities__items-wrapper');

    // Если контейнер не найден, завершаем выполнение функции
    if (!wrapper) {
        return;
    }

    facilities.forEach(facility => {
        const facilityItem = document.createElement('li');
        const facilityImage = document.createElement('img');
        const facilityText = document.createElement('p');

        facilityImage.setAttribute('src', facility.img);
        facilityImage.setAttribute('width', 40);
        facilityItem.setAttribute('class', 'facilities__item');
        facilitiesList.setAttribute('class', 'facilities__list list-reset')

        facilityText.textContent = facility.title;

        facilitiesList.appendChild(facilityItem);

        facilityItem.appendChild(facilityImage);
        facilityItem.appendChild(facilityText);
    });

    document.querySelector('.facilities__items-wrapper').appendChild(facilitiesList)
}