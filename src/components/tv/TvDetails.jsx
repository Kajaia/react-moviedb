import { useState } from "react";
import Modal from "../../portals/Model";
import MovieCast from "../movies/MovieCast";
import MovieImages from "../movies/MovieImages";
import MovieVote from "../movies/MovieVote";

function TvDetails({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-light-blue text-white">
        <div className="container py-5">
          <div className="row g-4">
            {data?.details?.poster_path && (
              <div className="col-12 col-md-4 col-lg-3">
                <MovieVote vote={data?.details?.vote_average} />
                <img
                  width="100%"
                  className="rounded-3"
                  src={`https://image.tmdb.org/t/p/w400${data?.details?.poster_path}`}
                  alt={data?.details?.name}
                />
              </div>
            )}
            <div className="col-12 col-md-8 col-lg-9">
              <h1 className="fs-2 fw-bold">{data?.details?.name}</h1>
              <div className="mb-3">
                {data?.details?.release_date && data?.details?.release_date}
                {data?.details?.first_air_date && data?.details?.first_air_date}
                {" • "}
                {data?.details?.runtime && `${data?.details?.runtime} min`}
                {data?.details?.episode_run_time &&
                  `${data?.details?.episode_run_time[0]} min`}
              </div>
              {data?.details?.tagline && (
                <i className="text-secondary">{data?.details?.tagline}</i>
              )}
              {data?.details?.overview && (
                <div className="mt-3">
                  <h5 className="fw-bold">Overview</h5>
                  <p>{data?.details?.overview}</p>
                </div>
              )}
              {data?.videos?.length > 0 && (
                <div className="mt-4">
                  <button
                    onClick={() => setIsOpen(true)}
                    className="btn btn-warning rounded-3 py-2 px-4 shadow-sm text-blue"
                  >
                    <i className="fas fa-play me-2"></i>
                    Watch Trailer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {data?.credits?.length > 0 && <MovieCast credits={data?.credits} />}
      {data?.images?.length > 0 && <MovieImages images={data?.images} />}
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(false)}
        title={data?.details?.name}
      >
        <iframe
          width="100%"
          height="400px"
          src={`https://www.youtube.com/embed/${data?.videos[0]?.key}`}
          title={data?.details?.name}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Modal>
    </>
  );
}

export default TvDetails;
