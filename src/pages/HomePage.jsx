import ErrorBoundary from "../components/others/ErrorBoundary";
import MovieList from "../components/movies/MovieList";
import Search from "../components/others/Search";

function HomePage() {
  return (
    <>
      <ErrorBoundary>
        <Search />
      </ErrorBoundary>
      <div className="container">
        <ErrorBoundary>
          <MovieList
            title="What's Popular"
            styles="d-flex movies-wrapper"
            category="movie"
            endpoint="popular"
          />
        </ErrorBoundary>
      </div>
      <div className="bg-light-blue text-white">
        <div className="container">
          <ErrorBoundary>
            <MovieList
              title="Upcoming movies"
              styles="d-flex movies-wrapper"
              category="movie"
              endpoint="upcoming"
            />
          </ErrorBoundary>
        </div>
      </div>
      <div className="container">
        <ErrorBoundary>
          <MovieList
            title="Top Rated"
            styles="d-flex movies-wrapper"
            category="movie"
            endpoint="top_rated"
          />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default HomePage;
