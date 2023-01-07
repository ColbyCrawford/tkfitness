const navMenu = document.querySelector('.navigation__links');
const navControl = document.querySelector('.nav-control');
const overlay = document.querySelector('.menu-overlay');
const site = document.querySelector('body');

navControl.addEventListener('click', () => {
    // navMenu.classList.toggle('active');
    navControl.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    site.classList.toggle('active');
})