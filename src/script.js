new Swiper('.hero-swiper', {
    effect: 'fade',
    autoplay: {
      delay: 4000,
    },
    loop: true,
  });

  const swiper = new Swiper(".hero-swiper", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});