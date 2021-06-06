(()=>{"use strict";function e(e,...t){const i=document.createElement(e);return t?(t.forEach((e=>i.classList.add(e))),i):i}const t=["header__home","header__menu","header__contact"];function i(t,i,n){const a=e("h2","title","hero__title");a.innerHTML=`<span class="first-letter">${i.charAt(0).toUpperCase()}</span>${i.slice(1)}`,t.appendChild(a);const o=e("h3","subtitle","hero__subtitle");o.textContent=n.toUpperCase(),t.appendChild(o)}const n=[{image:"images/award-0.png",title:"bakery of the year<br />2011 - 2012",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ullam dolores nisi explicabo alias. Deserunt commodi asperiores perspiciatis ipsum ducimus."},{image:"images/award-1.png",title:"cupcakes shop of the year<br />2012 - 2015",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut molestiae sed impedit assumenda nisi minima cumque nihil deserunt nulla."},{image:"images/award-0.png",title:"bakery of the month<br />2017 - 2018",text:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non ipsa enim ullam incidunt molestias sint ab deleniti laboriosam eveniet inventore?"},{image:"images/award-1.png",title:"bakery of the milennia<br />2019 - 2023",text:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa libero dolorum beatae qui suscipit, incidunt recusandae adipisci quos est. Iusto!"}],a=[{title:"Medialunas Saladas",price:2.5,image:"images/menu-0.png"},{title:"Churros con Dulce",price:8.99,image:"images/menu-1.png"},{title:"Pie de Manzana",price:4.95,image:"images/menu-2.png"},{title:"Pan de Leche",price:15.49,image:"images/menu-3.png"},{title:"Alfajores de Maicena",price:9.99,image:"images/menu-4.png"},{title:"Bomba de Crema",price:3.75,image:"images/menu-5.png"}],o=[{name:"Emily Wrong",job:"Baking Director"},{name:"Michael Doughtlas",job:"Creative Baker"},{name:"Maru Botana",job:"Senior Baker"},{name:"Red Empanada",job:"Baker Developer"}],s=[{cl:"about-us",title:"About Us",phone:"012-3465-234-7893",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consequatur non accusamus amet labore doloremque repellat dignissimos? Sapiente, omnis animi."},{cl:"contact-us",title:"Contact Us",phone:"012-6532-568-9746",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. A neque sint, dignissimos nam enim numquam debitis iure culpa illum nihil?"}];function d(...e){e.forEach((e=>e.classList.remove("selected")))}!function(){!function(){const i=e("header","header");document.body.append(i);const n=e("div","header__logo");i.appendChild(n);const a=e("img");a.src="images/logo-nav.png",n.appendChild(a);const o=i.appendChild(e("nav")).appendChild(e("ul"));t.forEach((t=>{const i=e("a",t);i.textContent=`${t.charAt(8).toUpperCase()}${t.slice(9)}`,o.appendChild(e("li")).appendChild(i)}))}(),function(){const t=e("section","home"),a=e("div","hero");document.body.appendChild(t).appendChild(a);const o=e("img","separator"),s=e("img","separator","rotate");o.src="images/separator.png",s.src="images/separator.png",a.appendChild(o),i(a,"welcome","to bready");const d=e("div","title-subtitle");t.appendChild(d),i(d,"discover","our awards"),a.appendChild(s);const c=e("div","awards");t.appendChild(c),n.forEach((t=>{const i=e("div","awards__card"),n=e("img","awards__img");n.src=t.image;const a=e("h3","awards__title");a.innerHTML=t.title;const o=e("p","awards__text");o.textContent=t.text,i.append(n,a,o),c.appendChild(i)}));const r=e("div","baker"),p=e("img","baker__img");p.src="images/baker.png";const l=e("div","baker__text"),m=e("p","baker__quote");m.textContent="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nostrum commodi non enim molestiae accusantium, deleniti dignissimos quas ad sint, in asperiores cupiditate quibusdam dolores id quod, placeat sed. Corporis reprehenderit eveniet nobis similique consequuntur eaque molestias incidunt iure unde!";const u=e("p","baker__info");u.textContent="Bready CEO";const g=e("img","baker__logo");g.src="images/logo.png",l.append(m,u,g),r.append(p,l),t.appendChild(r)}(),function(){const t=e("section","menu");document.body.appendChild(t);const n=e("div","title-subtitle");i(n,"crave","our menu");const o=e("div","menus");t.append(n,o),a.forEach((t=>{const i=e("div","menus__card"),n=e("div","menus__img"),a=e("img");a.src=t.image,n.appendChild(a);const s=e("div","menus__text"),d=e("div","menus__text-left"),c=e("h3","menus__title");c.textContent=t.title;const r=e("p","menus__description");r.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum neque ducimus deleniti vel voluptatum atque inventore, id nesciunt iste!",d.append(c,r);const p=e("div","menus__price");p.textContent=t.price,s.append(d,p),i.append(n,s),o.appendChild(i)}))}(),function(){const t=e("section","contact");document.body.appendChild(t);const n=e("div","title-subtitle");i(n,"reach","us");const a=e("div","contact-container");t.append(n,a);const s=e("div","map"),d=e("iframe");d.src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed",s.appendChild(d);const c=e("div","form"),r=e("input");r.type="text",r.placeholder="Enter your name";const p=e("input");p.type="email",p.placeholder="Enter your email";const l=e("textarea");l.cols=30,l.rows=10,l.placeholder="Message";const m=e("button");m.textContent="Send",c.append(r,p,l,m),a.append(s,c);const u=e("div","title-subtitle");i(u,"know","our bakers");const g=e("div","employees-container");t.append(u,g),o.forEach(((t,i)=>{const n=e("div","employee"),a=e("div","employee__graphics"),o=e("img","employee__img");o.src=`images/baker-${i}.jpg`;const s=e("div","employee__overlay");s.innerHTML='\n      <a href="#"><i class="fa fa-facebook"></i></a>\n      <a href="#"><i class="fa fa-twitter"></i></a>\n      <a href="#"><i class="fa fa-linkedin"></i></a>\n    ',a.append(o,s);const d=e("div","employee__info"),c=e("p","employee__name");c.textContent=t.name;const r=e("p","employee__job");r.textContent=t.job,d.append(c,r),n.append(a,d),g.appendChild(n)}))}(),function(){const t=e("footer"),i=e("div","container");s.forEach((t=>{const n=e("div",t.cl),a=e("h4");a.textContent=t.title;const o=e("p");o.textContent=t.text;const s=e("p","phone");s.textContent=t.phone,n.append(a,o,s),i.appendChild(n)}));const n=e("p","copyright");n.innerHTML=`Copyright ©${(new Date).getFullYear()}. Created by <a class="github" target="_blank" href="https://github.com/jpalvadev">jpalvadev</a>`,t.append(i,n),document.body.append(t)}();const c=document.querySelectorAll("section"),r=document.querySelector(".header__home"),p=document.querySelector(".header__menu"),l=document.querySelector(".header__contact");c[0].classList.add("selected"),r.classList.add("selected"),r.addEventListener("click",(function(){d(r,p,l,...c),r.classList.add("selected"),c[0].classList.add("selected")})),p.addEventListener("click",(function(){d(r,p,l,...c),p.classList.add("selected"),c[1].classList.add("selected")})),l.addEventListener("click",(function(){d(r,p,l,...c),l.classList.add("selected"),c[2].classList.add("selected")}))}()})();