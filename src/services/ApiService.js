import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const api_key = "7580044e2306d04aa11e9d8bc46c01d3";

const searchMovies = (query) =>
  instance.get("/search/movie", {
    params: { api_key, query },
  });

const getMovies = (endpoint) =>
  instance.get(`/movie/${endpoint}`, {
    params: { api_key },
  });

const getMovieDetails = (id) =>
  instance.get(`/movie/${id}`, {
    params: { api_key },
  });

const getMovieOtherData = (id, endpoint) =>
  instance.get(`/movie/${id}/${endpoint}`, {
    params: { api_key },
  });

export { searchMovies, getMovies, getMovieDetails, getMovieOtherData };
