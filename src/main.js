// Получаем элементы
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modal');

// Функция для открытия модального окна
function openModal() {
  modal.classList.add('is-open');
}

// Функция для закрытия модального окна
function closeModal() {
  modal.classList.remove('is-open');
}

// Добавляем обработчики событий
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Закрытие по клику вне модального окна
modal.addEventListener('click', event => {
  if (event.target === modal) {
    closeModal();
  }
});
