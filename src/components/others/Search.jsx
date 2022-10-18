import React, { useEffect, useState } from "react";
import { searchMovies } from "../../services/ApiService";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query) {
      searchMovies(query).then((res) => {
        setMovies(res.data.results);
      });
    }
    return () => {
      setMovies([]);
    };
  }, [query]);

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
            {movies.length > 0 && (
              <div className="search-dropdown position-absolute bg-white rounded-3 w-100 mt-5 p-3 text-dark shadow">
                {movies.map((movie) => (
                  <React.Fragment key={movie.id}>
                    <i className="fas fa-film fa-sm me-1"></i>
                    {movie.original_title}{" "}
                    <small className="text-secondary">in Movies</small>
                    <hr className="my-1" />
                  </React.Fragment>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
