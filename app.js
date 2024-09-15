"use strict";

const copyrightText = document.getElementById("copyright");
const currentYear = new Date().getFullYear();
const headerLogos = document.querySelectorAll(".header-logo");
const slideAnim = document.querySelectorAll(".fadeIn");
const navigation = document.querySelector('.navbar-collapse');
// const navigationHeight = navigation.offsetHeight;
const webNavigationHeight = 240;
const mobileNavigationHeight = 80;

// fix scroll padding issue


// dynamic year
copyrightText.innerText = `©${currentYear} LuxFruit Trading. All Rights Reserved.`;

// logo redirect hero section
headerLogos.forEach((logo) => {
  logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
});

// fade in animation
const fadeIn = () => {
  for (let i = 0; i < slideAnim.length; i++) {
    let slide = slideAnim[i];
    let distInView = slide.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  }
};

window.addEventListener("scroll", fadeIn);
fadeIn();

// scroll sticky on top
document.addEventListener('DOMContentLoaded', function(){
  if(screen.width < 767){
    document.documentElement.style.setProperty("--scroll-padding", mobileNavigationHeight + "px");
  }else{
    document.documentElement.style.setProperty("--scroll-padding", webNavigationHeight + "px");
  }

  window.addEventListener('scroll', function(){
    if(window.scrollY > 130){
      document.getElementById('sticky-navbar').classList.add('fixed-top');
      let navbarHeight = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbarHeight + 'px';
    } else {
      document.getElementById('sticky-navbar').classList.remove('fixed-top');
      document.body.style.paddingTop = '0';
    }
  })
})

// ipad auto close collapse menu
const navLinks = document.querySelectorAll('.nav-item');
const menuToggle = document.querySelector('.navbar-collapse');
const ipadWidthViewChecking = 1023;

if(screen.width < ipadWidthViewChecking){
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => { 
      menuToggle.classList.remove("show");
    })
  })
}  