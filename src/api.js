import axios from 'axios';

const apiKey = import.meta.env.VITE_APIKEY;
const baseUrl = import.meta.env.VITE_BASEURL;
console.log(apiKey)
console.log(baseUrl)
export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  console.log(apiKey);
  console.log({ movieList: movie });
};

export const searchMovie = async () => {
  const search = await axios.get(q);
  return;
};
