let index = 0;
const slides = document.getElementById("slides");

function nextSlide() {
  if (index < slides.children.length - 1) index++;
}

function prevSlide() {
  if (index > 0) index--;
}

function navigateInSlides(toLeft, toRight) {
  if (toLeft) prevSlide();
  if (toRight) nextSlide();
  selectSlide(index);
}

function selectSlide(index = 0) {
  for (let i = 0; i < slides.children.length; i++) {
    slides.children.item(i).classList.add("back");
  }
  slides.children.item(index).classList.remove("back");
  slides.children.item(index).classList.add("front");
}

function keyEvent(event) {
  navigateInSlides(event.key == "ArrowLeft", event.key == "ArrowRight");
}

function clickEvent(event) {
  const clicked = event.target.parentElement.parentElement.id;
  navigateInSlides(clicked == "left", clicked == "right");
}

function hudClickEvent(event) {
  navigateInSlides(
    event.target.id == "border-left",
    event.target.id == "border-right"
  );
}


const header = document.getElementById("header");

document.body.addEventListener("keydown", keyEvent);


document
  .querySelectorAll(".key")
  .forEach((el) => el.addEventListener("click", clickEvent));

const $borders = document.querySelector("#borders");
$borders.addEventListener("dblclick", hudClickEvent);

selectSlide(0);

function loadRemoteSlide(slide, file) {
  fetch(`/slides/${file}`)
    .then((response) => {
      if (response.ok) {
        return response.text();
      }
    })
    .then((txt) => {
      slide.innerHTML = txt;
    });
}

function loadRemoteSlides() {
  for (let i = 0; i < slides.children.length; i++) {
    const slide = slides.children.item(i);
    if (slide.dataset.filename) {
      let slideFile = `${slide.dataset.filename}.html`;
      loadRemoteSlide(slide, slideFile);
    }
  }
}

loadRemoteSlides();
