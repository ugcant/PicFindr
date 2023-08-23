
import axios from 'axios';

const apiKey = import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY;

const searchImages = async (value) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: apiKey,
    },
    params: {
      query: value,
      orientation: 'landscape',
      per_page: '9',
    },
  });
  return response.data.results;
};

export default searchImages;
