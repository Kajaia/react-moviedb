import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const api_key = "7580044e2306d04aa11e9d8bc46c01d3";

function searchMovies(query) {
  return instance.get("/search/movie", {
    params: { api_key: api_key, query: query },
  });
}

function getMovies(endpoint) {
  return instance.get(`/movie/${endpoint}`, {
    params: { api_key: api_key },
  });
}

export { searchMovies, getMovies };
