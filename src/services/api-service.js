import axios from 'axios';

const API_KEY = '12522641-80de9d05059a5e43399a2205e';
axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchImages = (query, currentPage) => {
  const url = `/?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return axios.get(url).then(response => response.data.hits);
};

export default fetchImages;
