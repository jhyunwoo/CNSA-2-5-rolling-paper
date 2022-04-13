const r = document.getElementById("rollingPaper");
const g = document.getElementById("gallery");
const c = document.getElementById("connection");
const setR = document.getElementById("buttonRollingPaper");
const setG = document.getElementById("buttonGallery");
const setC = document.getElementById("buttonConnection");

setR.addEventListener("click", () => {
  window.scrollBy({
    top: r.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

setG.addEventListener("click", () => {
  window.scrollBy({
    top: g.getBoundingClientRect().top,
    behavior: "smooth",
  });
});

setC.addEventListener("click", () => {
  window.scrollBy({
    top: c.getBoundingClientRect().top,
    behavior: "smooth",
  });
});
