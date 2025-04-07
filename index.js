const cart_btn = document.querySelector(".cart-pane");
const menu = document.querySelector(".main-options");
const slide = document.querySelectorAll(".slides img");
const slide_opt = document.querySelectorAll(".s-icon");
const outer_slider = document.querySelector(".outer-slider");
const counter = document.getElementById("counter");
const empty_cart = document.querySelector(".empty");
const item_cart = document.querySelector(".item");
const mediaQuery = window.matchMedia("(max-width:500px)");
let count = 0;
let slideindex = 0;
function toggleCart() {
  cart_btn.classList.toggle("blank");
}
function Showmenu() {
  menu.classList.toggle("show");
}
function handleScreenChange(e) {
  if (e.matches) {
    displayOuter(false);
  } else {
    displayOuter(true);
  }
}
handleScreenChange(mediaQuery);
mediaQuery.addEventListener("change", handleScreenChange);
function cart_empty(empty) {
  if (empty) {
    empty_cart.style.display = "block";
    item_cart.style.display = "none";
  } else {
    empty_cart.style.display = "none";
    item_cart.style.display = "block";
  }
}
function counting(increase) {
  if (increase) {
    count++;
  } else {
    if (count <= 0) {
      count = 0;
    } else {
      count--;
    }
  }
  counter.textContent = count;
}
slide_opt.forEach((item, i) => {
  item.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.style.border = "2px solid orange";
    slideindex = i;
    showSlide(slideindex);
  });
});
function displayOuter(disp) {
  if (disp) {
    outer_slider.style.display = "none";
  } else {
    outer_slider.style.display = "block";
  }
}
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
  if (slide.length > 0) {
    slide[slideindex].style.display = "block";
  }
}
function showSlide(index) {
  if (index >= slide.length) {
    slideindex = 0;
  } else if (index < 0) {
    slideindex = slide.length - 1;
  }
  slide.forEach((slide) => {
    slide.style.display = "none";
  });
  slide[slideindex].style.display = "block";
}
function prevSlide() {
  slideindex--;
  showSlide(slideindex);
}
function nextSlide() {
  slideindex++;
  showSlide(slideindex);
}
