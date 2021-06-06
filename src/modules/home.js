import { createEl } from './elCreator';
import { createTitleAndSub } from './titleAndSub';

const awards = [
  {
    image: 'images/award-0.png',
    title: 'bakery of the year<br />2011 - 2012',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam dolores nisi explicabo alias. Deserunt commodi asperiores perspiciatis ipsum ducimus.',
  },
  {
    image: 'images/award-1.png',
    title: 'cupcakes shop of the year<br />2012 - 2015',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut molestiae sed impedit assumenda nisi minima cumque nihil deserunt nulla.',
  },
  {
    image: 'images/award-0.png',
    title: 'bakery of the month<br />2017 - 2018',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ipsa enim ullam incidunt molestias sint ab deleniti laboriosam eveniet inventore?',
  },
  {
    image: 'images/award-1.png',
    title: 'bakery of the milennia<br />2019 - 2023',
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa libero dolorum beatae qui suscipit, incidunt recusandae adipisci quos est. Iusto!',
  },
];

export function home() {
  // HERO
  const homeSection = createEl('section', 'home');
  const heroDiv = createEl('div', 'hero');

  document.body.appendChild(homeSection).appendChild(heroDiv);

  const separator = createEl('img', 'separator');
  const separatorTwo = createEl('img', 'separator', 'rotate');
  separator.src = 'images/separator.png';
  separatorTwo.src = 'images/separator.png';
  heroDiv.appendChild(separator);

  createTitleAndSub(heroDiv, 'welcome', 'to bready');

  const titleSubDiv = createEl('div', 'title-subtitle');
  homeSection.appendChild(titleSubDiv);

  createTitleAndSub(titleSubDiv, 'discover', 'our awards');
  heroDiv.appendChild(separatorTwo);

  // AWARDS
  const awardsContainer = createEl('div', 'awards');
  homeSection.appendChild(awardsContainer);

  awards.forEach((award) => {
    const awardCard = createEl('div', 'awards__card');
    const img = createEl('img', 'awards__img');
    img.src = award.image;
    const h3 = createEl('h3', 'awards__title');
    h3.innerHTML = award.title;
    const p = createEl('p', 'awards__text');
    p.textContent = award.text;
    awardCard.append(img, h3, p);
    awardsContainer.appendChild(awardCard);
  });

  //BAKER
  const bakerContainer = createEl('div', 'baker');
  const bakerImg = createEl('img', 'baker__img');
  bakerImg.src = 'images/baker.png';
  const bakerTextContainer = createEl('div', 'baker__text');
  const bakerQuote = createEl('p', 'baker__quote');
  bakerQuote.textContent =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum commodi non enim molestiae accusantium, deleniti dignissimos quas ad sint, in asperiores cupiditate quibusdam dolores id quod, placeat sed. Corporis reprehenderit eveniet nobis similique consequuntur eaque molestias incidunt iure unde!';
  const bakerInfo = createEl('p', 'baker__info');
  bakerInfo.textContent = 'Bready CEO';
  const bakerLogo = createEl('img', 'baker__logo');
  bakerLogo.src = 'images/logo.png';

  bakerTextContainer.append(bakerQuote, bakerInfo, bakerLogo);
  bakerContainer.append(bakerImg, bakerTextContainer);
  homeSection.appendChild(bakerContainer);
}
