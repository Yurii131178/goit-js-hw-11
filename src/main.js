import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('.form-input');
const imagesList = document.querySelector('#images-list');
const btn = document.querySelector('.btn-submit');

let array;

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const usersRequest = event.target.elements.text.value.trim();
  

  if (!usersRequest) {
    iziToast.error({
      icon: 'null',
      messageSize: 20,
      message: 'Please enter your query!',
      messageColor: 'red',
      position: 'topRight'
    });
    clearGallery();
    return;
  }

  getImagesByQuery(usersRequest)
    .then(response => {
      array = response.data.hits;
      if (!array.length) {
        iziToast.error({
          icon: 'null',
          messageSize: 20,
          message: 'Sorry, there are no images matching your search query. Please try again!',
          messageColor: 'red',
          position: 'topRight'
        });
        clearGallery();
        return;
      }

      createGallery(array);
    })
    .catch(error => console.log(error.message));

  form.reset();
}