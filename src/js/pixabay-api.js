import axios from 'axios';

export { getImagesByQuery };

const API_KEY = '49723808-114337464bd6e566bb6cace9e';

async function getImagesByQuery(query, page = 1) {
  const { data } = await axios('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return data;
}
