let index = 0;
const slides = document.getElementById("slides");

function selectSlide(index = 0){
  for (let i = 0; i < slides.children.length; i++) {
    slides.children.item(i).classList.add("back");
  }
  slides.children.item(index).classList.remove("back");
  slides.children.item(index).classList.add("front");
}

function keyEvent(event) {
  if (event.key == "ArrowRight") {
    index++;
  }
  if (event.key == "ArrowLeft") {
    index--;
  }
  selectSlide(index);
}

console.log(slides.style.left);
document.body.addEventListener("keydown", keyEvent);
selectSlide(0);

