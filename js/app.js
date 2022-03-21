const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
// for toggle menu and remove when you click in links
document.onclick = function (e) {
  if (e.target.id !== "nav" && e.target.id !== "toggle") {
    nav.classList.remove("nav--visible");
    // navToggle.classList.remove("active-bar");
  }
};
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
//when click on list of food show diffrent menu and add active on menu
let img = document.querySelectorAll(".img");
let checkActive = document.querySelectorAll(".list");

checkActive.forEach((e) => {
  e.addEventListener("click", () => {
    wichFood();
    let iLegth = img.length;
    for (let i = 0; i < iLegth; i++) {
      img[i].classList.remove("active");
    }
    if (e.dataset.dish === "breakfast") {
      breakfast.classList.add("active");
    } else if (e.dataset.dish === "lunch") {
      lunch.classList.add("active");
    } else if (e.dataset.dish === "dinner") {
      dinner.classList.add("active");
    } else if (e.dataset.dish === "dessert") {
      dessert.classList.add("active");
    } else if (e.dataset.dish === "shake") {
      shake.classList.add("active");
    } else {
      console.log("No " + e + " images");
    }
    e.classList.add("active");
  });
});

// for locatiom and make it show where location
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRpbHRoIiwiYSI6ImNsMHBlY2p4cTA2bHIzbHBldjE1OGVobDcifQ.aiKWDczCfdGyqLsb7e_oVg";
navigator.geolocation.getCurrentPosition(successCallback, errorLocation, {
  enableHighAccuracy: true,
});
function successCallback(Position) {
  console.log(Position);
  setMap([-8.003872, 31.624314]);
}
function errorLocation() {
  setMap([-8.003872, 31.624314]);
}
function setMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 15,
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);
  const marker = new mapboxgl.Marker()
    .setLngLat([-8.003872, 31.624314])
    .addTo(map);
}

let breakfast = document.getElementById("breakfast");
let lunch = document.getElementById("lunch");
let dinner = document.getElementById("dinner");
let shake = document.getElementById("shake");
let dessert = document.getElementById("dessert");
function wichFood() {
  checkActive.forEach((e) => {
    e.classList.remove("active");
  });
  const navItems = document.querySelectorAll(".items");
  navItems.forEach((nav) => {
    nav.addEventListener("click", () => {
      haveactive();
      nav.classList.add("active");
    });
  });
  function haveactive() {
    navItems.forEach((nav) => {
      nav.classList.remove("active");
    });
  }
}
//make image slide automatic
const slideImg = document.querySelectorAll(".img-wrapper .img-slide");
const delayImg = 5000;
let countImg = 0;

slideImg[countImg].style.opacity = 1;
setInterval(showImg, delayImg);

function showImg() {
  slideImg[countImg].style.zIndex = -2;
  const currentcount = countImg;
  setTimeout(() => {
    slideImg[currentcount].style.opacity = 0;
  }, 1000);
  countImg = (countImg + 1) % slideImg.length;
  slideImg[countImg].style.opacity = 1;
  slideImg[countImg].style.zIndex = -1;
}
//make content fade when it reach a certent point
const boxes = document.querySelectorAll(".fade");
const checkBoxes = () => {
  const triggerBottom = (window.innerHeight / 5) * 4;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};
checkBoxes();
window.addEventListener("scroll", checkBoxes);
// scrool to top with js
let upTuTop = document.getElementById("back-to-top");
window.onscroll = function () {
  this.scrollY >= 200
    ? upTuTop.classList.add("show")
    : upTuTop.classList.remove("show");
};
upTuTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
