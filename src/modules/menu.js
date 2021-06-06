import { createEl } from './elCreator';
import { createTitleAndSub } from './titleAndSub';

const menuDescription =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum neque ducimus deleniti vel voluptatum atque inventore, id nesciunt iste!';
const menus = [
  { title: 'Medialunas Saladas', price: 2.5, image: 'images/menu-0.png' },
  { title: 'Churros con Dulce', price: 8.99, image: 'images/menu-1.png' },
  { title: 'Pie de Manzana', price: 4.95, image: 'images/menu-2.png' },
  { title: 'Pan de Leche', price: 15.49, image: 'images/menu-3.png' },
  { title: 'Alfajores de Maicena', price: 9.99, image: 'images/menu-4.png' },
  { title: 'Bomba de Crema', price: 3.75, image: 'images/menu-5.png' },
];

export function menu() {
  const menuSection = createEl('section', 'menu');
  document.body.appendChild(menuSection);
  const titleSubDiv = createEl('div', 'title-subtitle');
  createTitleAndSub(titleSubDiv, 'crave', 'our menu');

  //MENUS
  const menuContainer = createEl('div', 'menus');
  menuSection.append(titleSubDiv, menuContainer);

  menus.forEach((menu) => {
    const menuCard = createEl('div', 'menus__card');
    const menuImgDiv = createEl('div', 'menus__img');
    const img = createEl('img');
    img.src = menu.image;
    menuImgDiv.appendChild(img);

    const menuText = createEl('div', 'menus__text');
    const menuTextLeft = createEl('div', 'menus__text-left');
    const h3 = createEl('h3', 'menus__title');
    h3.textContent = menu.title;
    const p = createEl('p', 'menus__description');
    p.textContent = menuDescription;

    menuTextLeft.append(h3, p);

    const menuPrice = createEl('div', 'menus__price');
    menuPrice.textContent = menu.price;

    menuText.append(menuTextLeft, menuPrice);
    menuCard.append(menuImgDiv, menuText);
    menuContainer.appendChild(menuCard);
  });
}
