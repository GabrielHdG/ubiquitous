addEventListener("load", () => {
  let index = 0;
  const slides = document.querySelectorAll(".slideWrap");
  const classHide = "slideHidden",
    count = slides.length;

  nextSlide();
  function nextSlide() {
    slides[index++ % count].classList.add(classHide);
    slides[index % count].classList.remove(classHide);
    setTimeout(nextSlide, 3000);
    stop();
  }
});
