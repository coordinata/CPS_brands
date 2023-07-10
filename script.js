const swiperBrand = new Swiper('.image-slider', {
  direction: 'horizontal',
  loop: 'true',
  breakpoints: {
    768: {
      enabled: false,
    },
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 'auto',
});

document.addEventListener('DOMContentLoaded', function () {
  const sliderSlides = document.querySelectorAll('.image-slider__slide');
  const toggleButton = document.querySelector('.brand-block__show-more-button');
  let isExpanded = false;

  let itemsToShow = 8; // Изначально отображаем 8 элементов
  let breakpoint768 = 6; // Количество элементов для ширины экрана от 768px до 1120px

  // Функция для показа нужного количества элементов
  function showItems() {
    for (let i = 0; i < sliderSlides.length; i++) {
      if (i < itemsToShow) {
        sliderSlides[i].classList.add('active');
      } else {
        sliderSlides[i].classList.remove('active');
      }
    }

    if (itemsToShow === sliderSlides.length) {
      toggleButton.textContent = 'Скрыть';
    } else {
      toggleButton.textContent = 'Показать все';
    }
  }

  // Показать элементы при загрузке страницы
  function initialize() {
    let screenWidth = window.innerWidth;

    if (screenWidth >= 1120) {
      itemsToShow = 8;
    } else if (screenWidth >= 768 && screenWidth < 1120) {
      itemsToShow = breakpoint768;
    } else {
      itemsToShow = 4;
    }

    showItems();
  }

  initialize();

  // Обработчик события изменения размера окна
  window.addEventListener('resize', function () {
    initialize();
  });

  toggleButton.addEventListener('click', function () {
    isExpanded = !isExpanded;

    if (isExpanded) {
      // Показать все элементы
      itemsToShow = sliderSlides.length;
      toggleButton.textContent = 'Скрыть';
    } else {
      // Показать нужное количество элементов в соответствии с шириной экрана
      let screenWidth = window.innerWidth;

      if (screenWidth >= 1120) {
        itemsToShow = 8;
      } else if (screenWidth >= 768 && screenWidth < 1120) {
        itemsToShow = breakpoint768;
      } else {
        itemsToShow = 4;
      }

      toggleButton.textContent = 'Показать все';
    }

    showItems();
  });
});