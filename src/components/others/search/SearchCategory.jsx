import { Link } from "react-router-dom";

function SearchCategory(props) {
  return (
    <div className="col-12">
      <Link
        to={`/${props.category}/${props.data.id}`}
        className="text-dark text-decoration-none"
      >
        <i
          className={`fas fa-${
            props.category === "movie"
              ? "film"
              : props.category === "tv"
              ? "tv"
              : "user"
          } fa-sm me-1`}
        ></i>
        {props.category === "movie"
          ? props.data.original_title
          : props.data.name}{" "}
      </Link>
      <small className="text-secondary">
        in{" "}
        {props.category === "movie"
          ? "Movies"
          : props.category === "tv"
          ? "TV"
          : "Persons"}
      </small>
      <hr className="my-1" />
    </div>
  );
}

export default SearchCategory;
