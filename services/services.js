import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=865b22924f9cd1ecb7fbe6e4b05119c4';

// Get popular movies
export const getPopularMovies = async () => {
  const resp = await axios.get(apiUrl + '/movie/popular?' + apiKey);
  return resp.data.results;
};

// Get upcoming movies
export const getUpcomingMovies = async () => {
  const resp = await axios.get(apiUrl + '/movie/upcoming?' + apiKey);
  return resp.data.results;
};

// Get popular TV shows
export const getPopularTV = async () => {
  const resp = await axios.get(apiUrl + '/tv/popular?' + apiKey);
  return resp.data.results;
};

// Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    apiUrl + '/discover/movie?' + apiKey + '&with_genres=10751',
  );
  return resp.data.results;
};

// Get Documentary Movies
export const getDocumentaries = async () => {
  const resp = await axios.get(
    apiUrl + '/discover/movie?' + apiKey + '&with_genres=99',
  );
  return resp.data.results;
};

// Get Movie Details
export const getMovieDetail = async id => {
  const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
  return resp.data;
};

// Search movie and tv
export const searchMovieTv = async (query, type) => {
  const resp = await axios.get(
    `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
  );
  return resp.data.results;
};
