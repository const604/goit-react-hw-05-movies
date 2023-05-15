import axios from 'axios';

const KEY = '3ed884ed7da314ae568ec7776884f04a';

export const getTrendingMovies = (movie, day) => {
  const url = 'https://developers.themoviedb.org/3/trending/';
  const options = {
    params: {
      media_type: movie,
      time_window: day,
      key: KEY,
    },
  };
  return axios.get(url, options);
};

// export const getSearchMovies = query => {
//   const url = `https://developers.themoviedb.org/3/search/movie/`;
//   const options = {
//     params: {
//       query: query,
//       page: page,
//       key: KEY,
//     },
//   };
//   return axios.get(url, options);
// };

// export const getMovieDetails = id => {
//   const url = `https://developers.themoviedb.org/3/movie/`;
//   const options = {
//     params: {
//       movie_id: id,
//       key: KEY,
//     },
//   };
//   return axios.get(url, options);
// };

// export const getMovieCredits = id => {
//   const url = `https://developers.themoviedb.org/3/movie/`;
//   const options = {
//     params: {
//       movie_id: id,
//       credits,
//       key: KEY,
//     },
//   };
//   return axios.get(url, options);
// };

// export const getMovieReviews = id => {
//   const url = `https://developers.themoviedb.org/3/movie/`;
//   const options = {
//     params: {
//       movie_id: id,
//       reviews,
//       key: KEY,
//     },
//   };
//   return axios.get(url, options);
// };
