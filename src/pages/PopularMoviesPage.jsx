import MovieList from "../components/movies/MovieList";
import ErrorBoundary from "../components/others/ErrorBoundary";

function PopularMoviesPage() {
  return (
    <div className="container">
      <ErrorBoundary>
        <MovieList
          title="Popular Movies"
          endpoint="popular"
          styles="row justify-content-center"
        />
      </ErrorBoundary>
    </div>
  );
}

export default PopularMoviesPage;
