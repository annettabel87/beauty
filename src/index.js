import './style.scss';

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.navigation');
menuBtn.addEventListener('click', () => {
	menu.classList.toggle('active');
})

const mainMenuBtn = document.querySelector('.main-navigator__menu-btn');
const mainMenu = document.querySelector('.main-navigation__container');
mainMenuBtn.addEventListener('click', () => {
	mainMenu.classList.toggle('active');
})