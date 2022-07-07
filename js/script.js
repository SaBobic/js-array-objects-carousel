// # ARRAY DI IMMAGINI

const images = [
  {
    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
    title: 'Svezia',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },

  {
    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Perù',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },

  {
    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
    title: 'Chile',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },
  {
    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
    title: 'Argentina',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },
  {
    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
    title: 'Colombia',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.',
  },
];

// Targhettizzo sin da subito quello che già so dovrò recuperare prima o poi

const mainGalleryElement = document.getElementById('main-gallery');
const mainThumbnailElement = document.getElementById('thumbnail-carousel-list');
const prevArrowElement = document.getElementById('prev-arrow');
const nextArrowElement = document.getElementById('next-arrow');

// # Milestone 1

// Creo la stringa delle figure e delle thumbnail per ciascun elemento dell'array e le mostro su schermo
let figureString = '';
let thumbnailString = '';

images.forEach(image => {
  figureString += getFigureString(image);
  thumbnailString += getThumbnailString(image);
});

mainGalleryElement.innerHTML = figureString;
mainThumbnailElement.innerHTML = thumbnailString;

// Mostro la prima immagine dell'array di figure al refresh della pagina
const figures = document.querySelectorAll('#carousel .gallery figure');
const thumbnails = document.querySelectorAll('#thumbnail-carousel-list img');
figures[0].classList.add('active');
thumbnails[0].classList.add('active');

// Faccio in modo di navigare tra le figure dell'array al click sulle frecce usando la variabile d'appoggio galleryIndex
let galleryIndex = 0;

nextArrowElement.addEventListener('click', () => {
  // Rimuovo la classe active alla figure che viene mostrata su schermo
  figures[galleryIndex].classList.remove('active');
  thumbnails[galleryIndex].classList.remove('active');
  // Aumento l'index di 1
  galleryIndex++;
  // # Milestone 2
  // Se l'index sfora in positivo la length dell'array, si riparte dalla prima figure
  if (galleryIndex >= figures.length) galleryIndex = 0;
  // Aggiungo la classe active alla figure successiva
  figures[galleryIndex].classList.add('active');
  thumbnails[galleryIndex].classList.add('active');
});

prevArrowElement.addEventListener('click', () => {
  // Rimuovo la classe active alla figure che viene mostrata su schermo
  figures[galleryIndex].classList.remove('active');
  thumbnails[galleryIndex].classList.remove('active');
  // Diminuisco l'index di 1
  galleryIndex--;
  // # Milestone 2
  // Se l'index va in negativo, si riparte dall'ultima figure
  if (galleryIndex < 0) galleryIndex = figures.length - 1;
  // Aggiungo la classe active alla figure precedente
  figures[galleryIndex].classList.add('active');
  thumbnails[galleryIndex].classList.add('active');
});
