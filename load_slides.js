() {
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
}();