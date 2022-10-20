import React, { useEffect, useState } from "react";
import { searchData } from "../../../services/ApiService";
import SearchCategory from "./SearchCategory";

function Search() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (query)
      searchData("movie", query).then((res) => setMovies(res.data.results));

    return () => setMovies([]);
  }, [query]);

  const [shows, setShows] = useState([]);
  useEffect(() => {
    if (query)
      searchData("tv", query).then((res) => setShows(res.data.results));

    return () => setShows([]);
  }, [query]);

  let searchResults;

  if (movies.length || shows.length) {
    searchResults = (
      <div className="search-dropdown position-absolute bg-white rounded-3 w-100 mt-5 p-2 text-dark shadow row">
        {movies.length > 0 &&
          movies.map((movie) => (
            <SearchCategory key={movie.id} movie={movie} category="movie" />
          ))}
        {shows.length > 0 &&
          shows.map((show) => (
            <SearchCategory key={show.id} movie={show} category="tv" />
          ))}
      </div>
    );
  }

  return (
    <>
      <div className=" bg-light-blue text-white">
        <div className="container py-5">
          <h1 className="fw-bold mb-0">Welcome.</h1>
          <p className="lead">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
          <div className="mt-5 input-group">
            <input
              type="text"
              defaultValue={query}
              onChange={(e) => setQuery(e.target.value)}
              className="form-control rounded-pill border-0 py-2 px-3"
              placeholder="Search for a movie, tv show, person..."
            />
            {searchResults}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
