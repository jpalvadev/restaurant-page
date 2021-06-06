import { createEl } from './elCreator';

const menuBtns = ['header__home', 'header__menu', 'header__contact'];

export function nav() {
  const header = createEl('header', 'header');
  document.body.append(header);
  const headerLogo = createEl('div', 'header__logo');
  header.appendChild(headerLogo);
  const logo = createEl('img');
  logo.src = 'images/logo-nav.png';
  headerLogo.appendChild(logo);

  const ul = header.appendChild(createEl('nav')).appendChild(createEl('ul'));
  menuBtns.forEach((el) => {
    const a = createEl('a', el);
    a.textContent = `${el.charAt(8).toUpperCase()}${el.slice(9)}`;
    ul.appendChild(createEl('li')).appendChild(a);
  });
}
