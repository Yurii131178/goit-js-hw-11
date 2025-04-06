import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = form.elements['text'].value.trim();
  
  if (!searchQuery) {
    iziToast.warning({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 2000,
        backgroundColor: 'tomato',
        image: './public/what.webp', 
        imageWidth: 60, 
        titleColor: '#fff',
        messageColor: '#fff',
        icon: 'icon-warning',
    });
    form.reset();
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      hideLoader();

      if (data.hits.length === 0) {
        iziToast.error({
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            timeout: 3000,
            backgroundColor: 'tomato',
            image: './public/what.webp', 
            imageWidth: 60, 
            titleColor: '#fff',
            messageColor: '#fff',
            icon: 'icon-warning',
        });

        form.reset();
        return;
      }

      createGallery(data.hits);
      form.reset();
    })
    .catch(error => {
      hideLoader();
      console.error(error);
      form.reset();
    });
});