import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const api_key = "7580044e2306d04aa11e9d8bc46c01d3";

const searchData = (category, query) =>
  instance.get(`/search/${category}`, {
    params: { api_key, query },
  });

const getData = (category, endpoint) =>
  instance.get(`/${category}/${endpoint}`, {
    params: { api_key },
  });

const getDetails = (category, id) =>
  instance.get(`/${category}/${id}`, {
    params: { api_key },
  });

const getOtherData = (category, id, endpoint) =>
  instance.get(`/${category}/${id}/${endpoint}`, {
    params: { api_key },
  });

export { searchData, getData, getDetails, getOtherData };
