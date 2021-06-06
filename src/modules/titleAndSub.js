import { createEl } from './elCreator';

export function createTitleAndSub(parentEl, title, subtitle) {
  const h2 = createEl('h2', 'title', 'hero__title');
  h2.innerHTML = `<span class="first-letter">${title
    .charAt(0)
    .toUpperCase()}</span>${title.slice(1)}`;
  parentEl.appendChild(h2);
  const h3 = createEl('h3', 'subtitle', 'hero__subtitle');
  h3.textContent = subtitle.toUpperCase();
  parentEl.appendChild(h3);
}
