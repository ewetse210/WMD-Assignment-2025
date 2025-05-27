let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlides() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === slideIndex) {
      slide.classList.add('active');
    }
  });
  slideIndex = (slideIndex + 1) % slides.length;
}

document.addEventListener('DOMContentLoaded', () => {
  showSlides();
  setInterval(showSlides, 4000);
});
