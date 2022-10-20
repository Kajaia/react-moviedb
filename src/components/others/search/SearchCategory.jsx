import { Link } from "react-router-dom";

function SearchCategory(props) {
  return (
    <div className="col-12">
      <Link
        to={`/${props.category}/${props.movie.id}`}
        className="text-dark text-decoration-none"
      >
        <i
          className={`fas fa-${
            props.category === "movie" ? "film" : "tv"
          } fa-sm me-1`}
        ></i>
        {props.category === "movie"
          ? props.movie.original_title
          : props.movie.name}{" "}
      </Link>
      <small className="text-secondary">
        in {props.category === "movie" ? "Movies" : "TV"}
      </small>
      <hr className="my-1" />
    </div>
  );
}

export default SearchCategory;
