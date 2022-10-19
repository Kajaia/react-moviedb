import MovieCast from "./MovieCast";
import MovieImages from "./MovieImages";
import MovieVote from "./MovieVote";

function MovieDetails({ data }) {
  return (
    <>
      <div className="bg-light-blue text-white">
        <div className="container py-5">
          <div className="row g-4">
            {data.details.poster_path && (
              <div className="col-12 col-md-4 col-lg-3">
                <MovieVote vote={data.details.vote_average} />
                <img
                  width="100%"
                  className="rounded-3"
                  src={`https://image.tmdb.org/t/p/w400${data.details.poster_path}`}
                  alt={data.details.title}
                />
              </div>
            )}
            <div className="col-12 col-md-8 col-lg-9">
              <h1 className="fs-2 fw-bold">{data.details.title}</h1>
              <div className="mb-3">
                {data.details.release_date && data.details.release_date}
                {" • "}
                {data.details.runtime && `${data.details.runtime} min`}
              </div>
              {data.details.tagline && (
                <i className="text-secondary">{data.details.tagline}</i>
              )}
              {data.details.overview && (
                <div className="mt-3">
                  <h5 className="fw-bold">Overview</h5>
                  <p>{data.details.overview}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <MovieCast credits={data.credits} />
      <MovieImages images={data.images} />
    </>
  );
}

export default MovieDetails;
