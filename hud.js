let index = 0;
const slides = document.getElementById("slides");


function selectSlide(index = 0) {
  for (let i = 0; i < slides.children.length; i++) {
    slides.children.item(i).classList.add("back");
  }
  slides.children.item(index).classList.remove("back");
  slides.children.item(index).classList.add("front");
}

function keyEvent(event) {
  if (event.key == "ArrowRight") {
    if (index < slides.children.length - 1) index++;
  }
  if (event.key == "ArrowLeft") {
    if (index > 0) index--;
  }
  selectSlide(index);
}

function clickEvent(event) {
  console.log(event);
  if (event.target.parentElement.parentElement.id == "right") {
    if (index < slides.children.length - 1) index++;
  }
  if (event.target.parentElement.parentElement.id == "left") {
    if (index > 0) index--;
  }
  selectSlide(index);
}

function hudClickEvent(event) {
  console.log(event);
  console.log(event.target);
  if (event.target.id == "border-right") {
    if (index < slides.children.length - 1) index++;
  }
  if (event.target.id == "border-left") {
    if (index > 0) index--;
  }
  selectSlide(index);
}

const header = document.getElementById("header");

document.body.addEventListener("keydown", keyEvent);
Array.from(document.body.getElementsByClassName("key")).forEach(el => el.addEventListener("click", clickEvent));


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
