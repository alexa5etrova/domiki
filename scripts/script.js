let currentIndex = 0; // Переменная для хранения текущего индекса слайда
let autoPlayInterval; // Переменная для хранения интервала автопрокрутки

/**
 * Функция для смены слайдов
 * @param {number} index — индекс слайда, на который нужно перейти
 */
function goToSlide(index, house) {
  // Находим контейнер со слайдами
  const slides = document.querySelector(".slides" + house);

  // Определяем количество слайдов
  const slideCount = document.querySelectorAll(".slide" + house).length;

  if (index < 0) {
    index = slideCount - 1; // Если текущий слайд первый, переходим на последний
  } else if (index >= slideCount) {
    index = 0; // Если текущий слайд последний, переходим на первый
  }

  currentIndex = index; // Запоминаем текущий индекс
  slides.style.transform = `translateX(${-index * 100}%)`; // Смещаем контейнер слайдов
}

// Добавляем обработчик клика для кнопки «Назад»
document.addEventListener("click", (e) => {
  let house = e.target.value;
  if (e.target.className === "prev") {
    goToSlide(currentIndex - 1, house);
  }
  if (e.target.className === "next") {
    goToSlide(currentIndex + 1, house);
  }
});
