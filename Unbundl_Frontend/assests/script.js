let slides = document.querySelectorAll(".image-slideshow__images--home");

let currentSlide = 0;
let autoSlide = setInterval(() => {
  changeSlide(0);
  currentSlide++;
}, 3000);

const changeSlide = (click) => {
  if (click == "previous") {
    --currentSlide;
    clearInterval(autoSlide);
  }
  if (click == "next") {
    currentSlide++;
    clearInterval(autoSlide);
  }

  if (currentSlide >= slides.length || currentSlide < 0) {
    currentSlide = 0;
  }

  if (currentSlide == 0) {
    document.querySelector(".image-slideshow__btn--prev").style.visibility =
      "hidden";
  } else {
    document.querySelector(".image-slideshow__btn--prev").style.visibility =
      "visible";
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style = "display:none";
  }
  slides[currentSlide].style = "display:block";
};
