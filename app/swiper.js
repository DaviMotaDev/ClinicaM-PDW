const swiper = new Swiper('.swiper', {
    spaceBetween: 50,
    slidesPerView: 1,
    speed: 1000,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    }
  });