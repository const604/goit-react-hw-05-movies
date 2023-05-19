import axios from 'axios';

const KEY = '3ed884ed7da314ae568ec7776884f04a';

export const getTrendingMovies = () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day`;
  const options = {
    params: {
      api_key: KEY,
    },
  };
  return axios.get(url, options);
};

export const getSearchMovies = query => {
  const url = `https://api.themoviedb.org/3/search/movie`;
  const options = {
    params: {
      // page: page,
      api_key: KEY,
      query: query,
    },
  };
  return axios.get(url, options);
};

export const getMovieDetails = movie_id => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}`;
  const options = {
    params: {
      api_key: KEY,
    },
  };
  return axios.get(url, options);
};

export const getMovieCredits = movie_id => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/credits`;
  const options = {
    params: {
      api_key: KEY,
    },
  };
  return axios.get(url, options);
};

export const getMovieReviews = movie_id => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/reviews`;
  const options = {
    params: {
      api_key: KEY,
    },
  };
  return axios.get(url, options);
};
