import axios from 'axios';

// const apiKey = import.meta.env.REACT_APP_APIKEY;
// const baseUrl = import.meta.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  console.log(apiKey);
  console.log({ movieList: movie });
};

export const searchMovie = async () => {
  const search = await axios.get(q);
  return;
};
