export function createEl(el, ...classes) {
  const element = document.createElement(el);
  if (!classes) return element;
  classes.forEach((cl) => element.classList.add(cl));
  return element;
}
