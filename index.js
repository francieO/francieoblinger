const scroll = document.querySelector(".scroll");

scroll.addEventListener("click", function () {
  event.preventDefault();
  const aboutSection = document.querySelector("#about");
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

const hamburger = document.querySelector(".hamburger");
const dropDown = document.querySelector(".hamburger-dropdown");
const close = document.querySelector(".close");

hamburger.addEventListener("click", function () {
  dropDown.classList.toggle("hide");
  hamburger.classList.toggle("hide");
  close.classList.toggle("hide");
});

close.addEventListener("click", function () {
  hamburger.classList.toggle("hide");
  close.classList.toggle("hide");
  dropDown.classList.toggle("hide");
});

window.addEventListener("resize", function () {
  if (window.innerWidth > 700) {
    dropDown.classList.add("hide");
  }
});
