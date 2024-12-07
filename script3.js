const galleryItems = document.querySelectorAll('.gallery-item img'); // Изменено для выбора img внутри gallery-item
const enlargedModal = document.createElement('div');
enlargedModal.classList.add('enlarged-modal');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.src;
    const img = document.createElement('img');
    img.src = imgSrc;
    img.classList.add('enlarged-modal-image');
    img.addEventListener('click', () => {
      document.body.removeChild(enlargedModal);
    });
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button'); //Добавлен класс для стилизации кнопки закрыть
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(enlargedModal);
    });
    enlargedModal.appendChild(img);
    enlargedModal.appendChild(closeButton);
    document.body.appendChild(enlargedModal);
    enlargedModal.style.display = 'flex'; // Показать модальное окно
  });
});
