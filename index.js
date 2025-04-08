const cart_btn = document.querySelector(".cart-pane");
const menu = document.querySelector(".main-options");
const slide = document.querySelectorAll(".slides img");
const slide_opt = document.querySelectorAll(".s-icon");
const outer_slider = document.querySelector(".outer-slider");
const inner_slider = document.querySelector(".inner-slider");
const counter = document.getElementById("counter");
const empty_cart = document.querySelector(".empty");
const item_cart = document.querySelector(".item");
const mediaQuery = window.matchMedia("(max-width:500px)");
const thumbnails = document.querySelectorAll(".thumbnail-item");
const hero_img = document.querySelector(".hero img");
let count = 0;
let slideindex = 0;
let slide_open = false;
let mobile = false;

function toggleCart() {
  cart_btn.classList.toggle("blank");
}
function Showmenu() {
  menu.classList.toggle("show");
}
function handleScreenChange(e) {
  if (e.matches) {
    mobile = true;
    displayOuter(false);
  } else {
    mobile = false;
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
  item.addEventListener("click", () => {
    slide_opt.forEach((ind) => ind.classList.remove("activate"));
    item.classList.add("activate");
    slideindex = i;
    showSlide(slideindex);
  });
});
document.addEventListener("click", (event) => {
  if (!inner_slider.contains(event.target) && slide_open) {
    displayOuter(true);
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && slide_open) {
    displayOuter(true);
  }
});
thumbnails.forEach((thumb, indexx) => {
  thumb.addEventListener("click", function () {
    thumbnails.forEach((t) => t.classList.remove("activate"));

    this.classList.add("activate");
    hero_img.src = `/images/image-product-${indexx + 1}.jpg`;
    displayOuter(false);
  });
});
function displayOuter(disp) {
  if (disp) {
    outer_slider.style.display = "none";
    slide_open = false;
  } else {
    outer_slider.style.display = "block";
    setTimeout(() => {
      if (!mobile) {
        slide_open = true;
      }
    }, 500);
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
