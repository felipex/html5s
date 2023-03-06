let index = 0;
const slides = document.getElementById("slides");

function selectSlide(index = 0){
    
}

function keyEvent(event) {
  console.log(event);
  console.log(slides);
}

console.log(slides);
document.body.addEventListener("keydown", keyEvent);


