import { format } from "date-fns";
import { Link } from "react-router-dom";
import useGetMovies from "../../hooks/useGetMovies";
import MovieVote from "./MovieVote";

const image_url = "https://image.tmdb.org/t/p/w300";

function MovieList(props) {
  const movies = useGetMovies(props.endpoint);

  return (
    <>
      <h2 className="fw-bold mt-4 mb-3">{props.title}</h2>
      <div className={`${props.styles} mb-4`}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <div key={movie.id} className="col-6 col-md-3 col-lg-2">
              <div className="card rounded-3 bg-transparent border-0">
                <MovieVote vote={movie.vote_average} />
                <img
                  className="rounded-3"
                  src={`${image_url}${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                />
                <Link
                  to={`/movie/${movie.id}`}
                  className="stretched-link"
                ></Link>
                <div className="mt-2 mx-3">
                  <h6 className="fw-bold mb-0">{movie.title}</h6>
                  <small className="text-secondary">
                    {format(new Date(movie.release_date), "LLL d, Y")}
                  </small>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default MovieList;
