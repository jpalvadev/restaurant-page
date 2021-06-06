import './scss/main.scss';

import { nav } from './modules/nav';
import { home } from './modules/home';
import { menu } from './modules/menu';
import { contact } from './modules/contact';
import { footer } from './modules/footer';

function removeSelected(...allSections) {
  allSections.forEach((section) => section.classList.remove('selected'));
}

function init() {
  nav();
  home();
  menu();
  contact();
  footer();

  const allSections = document.querySelectorAll('section');
  const homeBtn = document.querySelector('.header__home');
  const menuBtn = document.querySelector('.header__menu');
  const contactBtn = document.querySelector('.header__contact');

  allSections[0].classList.add('selected');
  homeBtn.classList.add('selected');

  homeBtn.addEventListener('click', function () {
    removeSelected(homeBtn, menuBtn, contactBtn, ...allSections);
    homeBtn.classList.add('selected');
    allSections[0].classList.add('selected');
  });
  menuBtn.addEventListener('click', function () {
    removeSelected(homeBtn, menuBtn, contactBtn, ...allSections);
    menuBtn.classList.add('selected');
    allSections[1].classList.add('selected');
  });
  contactBtn.addEventListener('click', function () {
    removeSelected(homeBtn, menuBtn, contactBtn, ...allSections);
    contactBtn.classList.add('selected');
    allSections[2].classList.add('selected');
  });
}

init();
