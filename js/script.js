// # Array di immagini

const images = [
  {
    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
    title: 'Svezia',
    description:
      "La Svezia, ufficialmente chiamata Regno di Svezia, è uno Stato membro dell'Unione Europea, situato nella penisola scandinava.",
  },

  {
    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Perù',
    description:
      "Il Perù, ufficialmente Repubblica del Perù, è uno Stato dell'America meridionale.",
  },

  {
    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
    title: 'Cile',
    description:
    "Il Cile è uno Stato situato nell'estremo sudovest del continente americano. Il suo nome ufficiale è Repubblica del Cile con capitale Santiago del Cile.",
  },
  {
    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Argentina',
    description:
    "L'Argentina, ufficialmente Repubblica Argentina, è una repubblica federale, situata nella parte meridionale del Sud America.",
  },
  {
    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
    title: 'Colombia',
    description:
    "La Colombia, formalmente Repubblica di Colombia , è uno Stato della regione nord-occidentale dell'America Meridionale, la cui superficie è di 1 141 748 km².",
  },
];


// # Targhettizzo gli elementi del DOM
const galleryElement = document.getElementById('gallery');
const thumbElement = document.getElementById('thumb');
const nextArrowElement = document.getElementById('next-arrow');
const prevArrowElement = document.getElementById('prev-arrow');
const playBtnElement = document.getElementById('play-button');
const pauseBtnElement = document.getElementById('pause-button');
const rightDirBtnElement = document.getElementById('right-direction-button');
const leftDirBtnElement = document.getElementById('left-direction-button');


// # Creo le stringhe HTML e le mostro su schermo

let galleryString = '';
let thumbString = '';

images.forEach((image, i) => {
  const {url, title, description} = image;

  galleryString += `
  <figure>
    <img src="${url}" alt="${title}">
    <figcaption>
        <h2>${title}</h2>
        <p>${description}</p>
    </figcaption>
  </figure>`;

  thumbString += `
  <figure data-index="${i}">
    <div>
      <img src="${url}" alt="${title}">
    </div>
    <figcaption>
      <h2>${title}</h2>
    </figcaption>
  </figure>`;
});

galleryElement.innerHTML = galleryString;
thumbElement.innerHTML = thumbString;

// # Animo lo slider

// Creo un index d'appoggio per determinare l'immagine da mostrare
let imagesDisplayIndex = 0;

// Creo array di figure e thumbnails e mostro le prime aggiungendo la classe .active
const figures = document.querySelectorAll('#gallery figure');
const thumbnails = document.querySelectorAll('#thumb figure');
figures[imagesDisplayIndex].classList.add('active');
thumbnails[imagesDisplayIndex].classList.add('active');

// Al click della freccia destra, l'index aumenta di 1 e viene mostrata l'immagine successiva
nextArrowElement.addEventListener('click', getNextFigure);

// Al click della freccia sinistra, l'index diminuisce di 1 e viene mostrata l'immagine precedente
prevArrowElement.addEventListener('click', getPrevFigure);

// # Al click sulla thumbnail, viene mostrata la figure

// Aggancio un event listener a ciascuna thumbnails
thumbnails.forEach(thumb => {
  const index = thumb.getAttribute('data-index');
  thumb.addEventListener('click', () => {
    figures[imagesDisplayIndex].classList.remove('active');
    thumbnails[imagesDisplayIndex].classList.remove('active');
    imagesDisplayIndex = index;
    figures[index].classList.add('active');
    thumb.classList.add('active');
  });
});

// # Autoplay all'apertura della pagina
let leftToRight = true;

let autoplay = setInterval(() => {
  if (leftToRight) getNextFigure();
  else getPrevFigure();
}, 2000);


pauseBtnElement.addEventListener('click', () => {
  playBtnElement.classList.remove('hidden');
  pauseBtnElement.classList.add('hidden');
  clearInterval(autoplay);
});

playBtnElement.addEventListener('click', () => {
  pauseBtnElement.classList.remove('hidden');
  playBtnElement.classList.add('hidden');
  autoplay = setInterval(() => {
  if (leftToRight) getNextFigure();
    else getPrevFigure();
  }, 2000);
});

// # Funzionamento/toggle dei pulsanti right/left

rightDirBtnElement.addEventListener('click', () => {
  leftToRight = true;
  leftDirBtnElement.classList.remove('hidden');
  rightDirBtnElement.classList.add('hidden');
});

leftDirBtnElement.addEventListener('click', () => {
  leftToRight = false;
  rightDirBtnElement.classList.remove('hidden');
  leftDirBtnElement.classList.add('hidden');
});