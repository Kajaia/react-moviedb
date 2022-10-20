import MovieList from "../components/movies/MovieList";
import ErrorBoundary from "../components/others/ErrorBoundary";

function PopularShowsPage() {
  return (
    <div className="container">
      <ErrorBoundary>
        <MovieList
          title="Popular TV Shows"
          styles="row justify-content-center"
          category="tv"
          endpoint="popular"
        />
      </ErrorBoundary>
    </div>
  );
}

export default PopularShowsPage;
