import axios from 'axios';

const API_KEY = '49632917-f700970c30bc9937fd82e83ee';

export default function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios(`https://pixabay.com/api/?${params}`);
}
