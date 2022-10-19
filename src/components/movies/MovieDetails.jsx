import MovieVote from "./MovieVote";

function MovieDetails({ movie }) {
  return (
    <div className="bg-light-blue text-white">
      <div className="container py-5">
        <div className="row">
          {movie.poster_path && (
            <div className="col-12 col-md-4 col-lg-3">
              <MovieVote vote={movie.vote_average} />
              <img
                width="100%"
                className="rounded-3"
                src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          )}
          <div className="col-12 col-md-8 col-lg-9">
            <h1 className="fs-2 fw-bold">{movie.title}</h1>
            <div className="mb-3">
              {movie.release_date && movie.release_date}
              {" • "}
              {movie.runtime && `${movie.runtime} min`}
            </div>
            {movie.tagline && <i className="text-secondary">{movie.tagline}</i>}
            {movie.overview && (
              <div className="mt-3">
                <h5 className="fw-bold">Overview</h5>
                <p>{movie.overview}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
