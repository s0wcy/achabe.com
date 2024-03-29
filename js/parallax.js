// Variables

const landing = document.querySelector("#landing");
const page = document.querySelector(".page--1");
let gravity = 0.35;
const pageWidth = window.innerWidth / gravity;
const pageHeight = window.innerHeight / gravity;

// Eventlistener

page.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / pageWidth;
  const mouseY = e.clientY / pageHeight;

  landing.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});