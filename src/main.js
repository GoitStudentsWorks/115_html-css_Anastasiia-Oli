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

//  ------------- active current section
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section'); // Секции, которые отслеживаются
  const navLinks = document.querySelectorAll('.header-nav__link'); // Ссылки в хедере

  function updateActiveLink() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop; // Положение секции сверху
      const sectionHeight = section.offsetHeight;

      // Проверяем, находится ли секция в видимой области
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute('id'); // Получаем ID секции
      }
    });

    // Обновляем классы ссылок
    navLinks.forEach(link => {
      link.classList.remove('scroll-a'); // Убираем активный класс у всех
      if (link.getAttribute('href').slice(1) === currentSection) {
        link.classList.add('scroll-a'); // Добавляем активный класс нужной ссылке
      }
    });
  }

  // Вызываем функцию при загрузке и скролле
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink(); // Чтобы сразу обновить классы при загрузке
});
