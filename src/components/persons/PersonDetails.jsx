import MovieImages from "../movies/MovieImages";

function PersonDetails({ data }) {
  return (
    <>
      <div className="bg-light-blue text-white">
        <div className="container py-5">
          <div className="row g-4">
            {data.details.profile_path && (
              <div className="col-12 col-md-4 col-lg-3">
                <img
                  width="100%"
                  className="rounded-3"
                  src={`https://image.tmdb.org/t/p/w400${data.details.profile_path}`}
                  alt={data.details.name}
                />
              </div>
            )}
            <div className="col-12 col-md-8 col-lg-9">
              <h1 className="fs-2 fw-bold">{data.details.name}</h1>
              <div className="mb-3">
                {data.details.birthday && data.details.birthday}
                {" • "}
                {data.details.place_of_birth && data.details.place_of_birth}
              </div>
              {data.details.biography && (
                <div className="mt-3">
                  <h5 className="fw-bold">Biography</h5>
                  <p>{data.details.biography}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {data.images.length > 0 && <MovieImages images={data.images} />}
    </>
  );
}

export default PersonDetails;
