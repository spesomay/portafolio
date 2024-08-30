const rightBtn = document.querySelector("#scrolling-button-right");
const leftBtn = document.querySelector("#scrolling-button-left");

const content = document.querySelector(".scrolling-container");

rightBtn.addEventListener("click", () => {
  content.scrollLeft += 800;
});

leftBtn.addEventListener("click", () => {
  content.scrollLeft -= 800;
});

const rightBtn1 = document.querySelector("#scrolling-button-right");
const leftBtn1 = document.querySelector("#scrolling-button-left");

const content1 = document.querySelector(".scrolling-container");

rightBtn1.addEventListener("click", () => {
  content.scrollLeft += 800;
});

leftBtn1.addEventListener("click", () => {
  content.scrollLeft -= 800;
});