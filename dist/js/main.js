
AOS.init();

let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  speed: 2000,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
  }
});

let day = document.querySelector('.footer__date');
let year = new Date();
day.innerHTML = year.getFullYear();