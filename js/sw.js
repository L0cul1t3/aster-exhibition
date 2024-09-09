const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  loop: true,
  speed: 400,
  effect: 'slide',
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});