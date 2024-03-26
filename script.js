const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.05,
});

function loading() {
  var tl = gsap.timeline();

  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "export.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.6,
      duration: 0.7,
      ease: "export.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1,#loader h3",
    {
      duration: 0.7,
      delay: 0.6,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    display: "none",
  });
  tl.to("#loader", {
    opacity: 0,
  });
}

loading();

var x = 0;
function searchBar() {
  x++;
  if (x % 2 == 1) {
    document.getElementById("search").style = "display: block";
  } else {
    document.getElementById("search").style = "display: none";
  }
}

var y = 0;
function subMenu() {
  y++;
  if (y % 2 == 1) {
    document.getElementById("sub-header").style = "display: block";
  } else {
    document.getElementById("sub-header").style = "display: none";
  }
}

// -----Swiper-------
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
