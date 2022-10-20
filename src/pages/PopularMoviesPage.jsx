import MovieList from "../components/movies/MovieList";
import ErrorBoundary from "../components/others/ErrorBoundary";

function PopularMoviesPage() {
  return (
    <div className="container">
      <ErrorBoundary>
        <MovieList
          title="Popular Movies"
          styles="row justify-content-center"
          category="movie"
          endpoint="popular"
        />
      </ErrorBoundary>
    </div>
  );
}

export default PopularMoviesPage;
