
const menuBtn = document.querySelector('.icons__menu')
const nav = document.querySelector('.nav')
const loginBtn = document.querySelector('.icons__login')
const login = document.querySelector('.login')
const searchBtn = document.querySelector('.icons__search')
const searchForm = document.querySelector('.search')
const info = document.querySelector('.info')
const infoBtn = document.querySelector('.icons__info')
const closeIcon = document.querySelectorAll('.close__icon')

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active')
})

loginBtn.addEventListener('click', () => {
  login.classList.toggle('show')
  nav.classList.remove('active')
})

searchBtn.addEventListener('click', () => {
  searchForm.classList.toggle('show')
  nav.classList.remove('active')
})

infoBtn.addEventListener('click', () => {
  info.classList.toggle('show')
  nav.classList.remove('active')
})

closeIcon.forEach(icon => {
  icon.addEventListener('click', () => {
    searchForm.classList.remove('show')
    login.classList.remove('show')
    info.classList.remove('show')
  })
})

window.addEventListener('click', (e) => {
  if (e.target == login || e.target == searchForm || e.target == info) {
    searchForm.classList.remove('show')
    login.classList.remove('show')
    info.classList.remove('show')
  }
})

//------ Home slider
var swiper = new Swiper(".home_slider", {
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//------- Review slider
var swiper = new Swiper(".reviews_slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});
//------- Blogs slider
var swiper = new Swiper(".blogs__slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//------- Logo slider
var swiper = new Swiper(".logo__slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    991: {
      slidesPerView: 5,
    },
  },
});

//--------- counter
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".counter");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 120) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      el.textContent = goal + '+'
      clearInterval(count);
    }
  }, 3000 / goal);
}


