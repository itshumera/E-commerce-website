const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const navList = document.querySelector(".nav-list");

openNav.addEventListener("click", function(){
  navList.classList.add("show");
});

closeNav.addEventListener("click", function(){
  navList.classList.remove("show");
});

const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;

window.addEventListener("scroll", function(){
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > navHeight){
    navBar.classList.add("fix-nav");
  }
  else{
    navBar.classList.remove("fix-nav");
  }
});

const mainImg = document.getElementById('main-img');

function largeImg(thumbItem){
  const thumbSrc = thumbItem.src;
  mainImg.src = thumbSrc;
}
