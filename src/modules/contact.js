import { createEl } from './elCreator';
import { createTitleAndSub } from './titleAndSub';

const iframeSrc =
  'https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed';

const employees = [
  { name: 'Emily Wrong', job: 'Baking Director' },
  { name: 'Michael Doughtlas', job: 'Creative Baker' },
  { name: 'Maru Botana', job: 'Senior Baker' },
  { name: 'Red Empanada', job: 'Baker Developer' },
];

export function contact() {
  const contactSection = createEl('section', 'contact');
  document.body.appendChild(contactSection);
  const titleSubDiv = createEl('div', 'title-subtitle');
  createTitleAndSub(titleSubDiv, 'reach', 'us');

  // CONTACT
  const contactContainer = createEl('div', 'contact-container');
  contactSection.append(titleSubDiv, contactContainer);

  const mapContainer = createEl('div', 'map');
  const mapFrame = createEl('iframe');
  mapFrame.src = iframeSrc;

  mapContainer.appendChild(mapFrame);

  const formContainer = createEl('div', 'form');
  const inputText = createEl('input');
  inputText.type = 'text';
  inputText.placeholder = 'Enter your name';
  const inputEmail = createEl('input');
  inputEmail.type = 'email';
  inputEmail.placeholder = 'Enter your email';
  const textArea = createEl('textarea');
  textArea.cols = 30;
  textArea.rows = 10;
  textArea.placeholder = 'Message';
  const sendBtn = createEl('button');
  sendBtn.textContent = 'Send';

  formContainer.append(inputText, inputEmail, textArea, sendBtn);
  contactContainer.append(mapContainer, formContainer);

  // Title Two
  const titleSubDivTwo = createEl('div', 'title-subtitle');
  createTitleAndSub(titleSubDivTwo, 'know', 'our bakers');

  //EMPLOYEE Cards
  const employeeContainer = createEl('div', 'employees-container');
  contactSection.append(titleSubDivTwo, employeeContainer);

  employees.forEach((employee, i) => {
    const employeeCard = createEl('div', 'employee');
    const employeeGraphics = createEl('div', 'employee__graphics');
    const img = createEl('img', 'employee__img');
    img.src = `images/baker-${i}.jpg`;

    const employeeOverlay = createEl('div', 'employee__overlay');
    employeeOverlay.innerHTML = `
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-linkedin"></i></a>
    `;

    employeeGraphics.append(img, employeeOverlay);

    const employeeInfo = createEl('div', 'employee__info');
    const employeeName = createEl('p', 'employee__name');
    employeeName.textContent = employee.name;
    const employeeJob = createEl('p', 'employee__job');
    employeeJob.textContent = employee.job;

    employeeInfo.append(employeeName, employeeJob);

    employeeCard.append(employeeGraphics, employeeInfo);

    employeeContainer.appendChild(employeeCard);
  });
}
