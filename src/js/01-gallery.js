import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryDivEl = document.querySelector(`.gallery`);

galleryDivEl.innerHTML = galleryItems.map(({ preview, original, description }) => {
        return `
          <li>
            <a class="gallery__item" href="${original}">
                 <img class="gallery__image" src=${preview} alt=${description}/>
            </a>
          </li>
        `
            ;
}).join(``);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
});

