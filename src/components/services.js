import axios from 'axios';

export const fetchImages = (query, page) => {
  const apiKey = '37409826-b0d240e7599af91354a714518';
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then(({ data }) => data);
};