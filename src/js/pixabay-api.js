import axios from 'axios';

const API_KEY = '49632917-f700970c30bc9937fd82e83ee';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  
  return axios.get(BASE_URL, { params })
    .then(response => response.data); 
}