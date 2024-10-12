const swiper = new Swiper('.card-wrapper', {
    loop: false,
    spaceBetween: 100,
  
    // pagination bullets
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      0: {
        slidesPerView:1
      },
      768: {
        slidesPerView:2
      },
      1024: {
        slidesPerView:3
      }
    }
  });