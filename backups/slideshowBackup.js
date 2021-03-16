const slideshowSlide = document.querySelector('.slideshow-slide');
const slideshowImages = document.querySelectorAll('.slideshow-slide img');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let counter = 1;
const size = slideshowImages[0].clientWidth;

slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

next.addEventListener('click', (if (counter <= slideshowImages.length -1) return) => {
  slideshowSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prev.addEventListener('click', (if (counter >= 0) return) => {
  slideshowSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slideshowSlide.addEventListener('transitionend', () => {
  console.log(slideshowImages[counter - 1]);
  if (slideshowImages[counter].id === 'lastClone') {
    slideshowSlide.style.transition = "none";
    counter = slideshowImages.length - 2;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
  if (slideshowImages[counter].id === 'firstClone') {
    slideshowSlide.style.transition = "none";
    counter = slideshowImages.length - counter;
    slideshowSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});
