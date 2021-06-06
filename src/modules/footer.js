import { createEl } from './elCreator';

const footerData = [
  {
    cl: 'about-us',
    title: 'About Us',
    phone: '012-3465-234-7893',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequatur non accusamus amet labore doloremque repellat dignissimos? Sapiente, omnis animi.',
  },
  {
    cl: 'contact-us',
    title: 'Contact Us',
    phone: '012-6532-568-9746',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A neque sint, dignissimos nam enim numquam debitis iure culpa illum nihil?',
  },
];

export function footer() {
  const footer = createEl('footer');

  const footerContainer = createEl('div', 'container');

  footerData.forEach((data) => {
    const infoContainer = createEl('div', data.cl);
    const h4 = createEl('h4');
    h4.textContent = data.title;
    const text = createEl('p');
    text.textContent = data.text;
    const phone = createEl('p', 'phone');
    phone.textContent = data.phone;

    infoContainer.append(h4, text, phone);

    footerContainer.appendChild(infoContainer);
  });

  const copyright = createEl('p', 'copyright');
  copyright.innerHTML = `Copyright ©${new Date().getFullYear()}. Created by <a class="github" target="_blank" href="https://github.com/jpalvadev">jpalvadev</a>`;

  footer.append(footerContainer, copyright);
  document.body.append(footer);
}
