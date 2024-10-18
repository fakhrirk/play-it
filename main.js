// Hide button scroll

const scrollButton = document.getElementById("scrollBtn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    scrollButton.classList.add("hidden");
  } else {
    scrollButton.classList.remove("hidden");
  }
});

// swiper script
const swiper = new swiper(".card-wrapper", {
  loop: false,
  spaceBetween: 100,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
