import { Link } from "react-router-dom";

function PersonMovies(props) {
  return (
    <div className="container">
      <h2 className="fw-bold mt-4 mb-3">{props.title}</h2>
      <div className="d-flex flex-column bg-white shadow-sm p-3 g-3">
        {props.data.length > 0 &&
          props.data.map((movie) => (
            <div key={movie.id} className="col-12">
              <div className="card rounded-3 bg-transparent border-0">
                <h3 className="fs-6">
                  {movie.release_date && `${movie.release_date} • `}
                  {movie.first_air_date && `${movie.first_air_date} • `}
                  <Link
                    to={`/${props.category}/${movie.id}`}
                    className="fw-bold text-decoration-none text-dark"
                  >
                    {props.category === "movie" ? movie.title : movie.name}
                  </Link>
                  {movie.character && (
                    <>
                      {" "}
                      as{" "}
                      <span className="text-secondary fw-bold">
                        {movie.character}
                      </span>
                    </>
                  )}
                </h3>
                {movie.title && <hr className="mx-0 mt-1" />}
                {movie.name && <hr className="mx-0 mt-1" />}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PersonMovies;
