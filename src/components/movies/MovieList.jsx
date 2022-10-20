import { format } from "date-fns";
import { Link } from "react-router-dom";
import useGetData from "../../hooks/useGetData";
import LoadingSpinner from "../layout/LoadingSpinner";
import MovieVote from "./MovieVote";

function MovieList(props) {
  const movies = useGetData(props.category, props.endpoint);

  return (
    <>
      <h2 className="fw-bold mt-4 mb-3">{props.title}</h2>
      <div
        className={`${
          movies.length > 0 ? props.styles : "d-flex justify-content-center"
        } mb-4 g-4`}
      >
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="col-6 col-md-3 col-lg-2">
              <div className="card rounded-3 bg-transparent border-0">
                <MovieVote vote={movie.vote_average} />
                <img
                  className="rounded-3"
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={
                    props.category === "movie"
                      ? movie.title
                      : movie.original_name
                  }
                  loading="lazy"
                />
                <Link
                  to={`/${props.category === "movie" ? "movie" : "tv"}/${
                    movie.id
                  }`}
                  className="stretched-link"
                ></Link>
                <div className="mt-2 mx-3">
                  <h6 className="fw-bold mb-0">
                    {props.category === "movie"
                      ? movie.title
                      : movie.original_name}
                  </h6>
                  <small className="text-secondary">
                    {format(
                      new Date(
                        props.category === "movie"
                          ? movie.release_date
                          : movie.first_air_date
                      ),
                      "LLL d, Y"
                    )}
                  </small>
                </div>
              </div>
            </div>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </>
  );
}

export default MovieList;
