// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line
const galleryEl = document.querySelector('.gallery');
const imageMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__link" href ="${original}" >
                    <img class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                        /></a>`;
  })
  .join('');

galleryEl.insertAdjacentHTML('beforeend', imageMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
