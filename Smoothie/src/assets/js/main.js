const goTop = document.querySelector(".fix-btn");
let openModalBtn = document.getElementById("modalOpen");
let modal = document.querySelector('.modal');
let closeModalBtn = document.querySelector(".modal-close")

let burgerBtn = document.getElementById("burger");
let menu = document.querySelector(".header__top");


// BurgerMenu

function openMenu() {  
  burgerBtn.addEventListener('click', toggleBurger);
  burgerBtn.addEventListener('click', toggleMenu);
  
}

function toggleBurger() {
  burgerBtn.classList.toggle("header__burger--close");
}

function toggleMenu() {
  menu.classList.toggle("header__top--active");
}

function removeMenuAndClose() {
  menu.classList.remove("header__top--active");
  burgerBtn.classList.remove("header__burger--close");
}

openMenu();



// slowly anchors

let anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    removeMenuAndClose();
    event.preventDefault();
    let blockID = anchor.getAttribute('href');
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}



// goTop scroll

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    goTop.style.display = 'flex'
  } else {
    goTop.style.display = 'none'
  }
});



// modal window

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'flex'
})

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none'
})

window.addEventListener('click', function(event)  {
  if(event.target === modal) {    
    modal.style.display = 'none'
  }
})

// simple slider

let offset = 0;

const sliderLine = document.querySelector('.reviews__line');
const sliderRight = document.querySelector('.reviews__arrow-right');
const sliderLeft = document.querySelector('.reviews__arrow-left');

sliderRight.addEventListener('click', function() {
  offset = offset + 725;
  if (offset > 2175) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px'
})

sliderLeft.addEventListener('click', function() {
  offset = offset - 725;
  if(offset < 0) {
    offset = 2175;
  }
  sliderLine.style.left = -offset + 'px'
})