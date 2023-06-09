let index = 0;
const slides = document.getElementById("slides");

function nextSlide(event = null) {
  if (index < slides.children.length - 1) index++;
  showSlide(index);
}

function prevSlide(event = null) {
  if (index > 0) index--;
  showSlide(index);
}

function navigateInSlides(toLeft, toRight) {
  if (toLeft) prevSlide();
  if (toRight) nextSlide();
}

function showSlide(index = 0) {
  for (let i = 0; i < slides.children.length; i++) {
    slides.children.item(i).classList.add("back");
  }
  slides.children.item(index).classList.remove("back");
  slides.children.item(index).classList.add("front");
}

function keyEvent(event) {
  navigateInSlides(event.key == "ArrowLeft", event.key == "ArrowRight");
}


document.body.addEventListener("keydown", keyEvent);

// Show the first slide.
showSlide(0);
