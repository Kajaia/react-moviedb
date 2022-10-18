import ErrorBoundary from "../components/ErrorBoundary";
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
            endpoint="popular"
            styles="d-flex movies-wrapper"
          />
        </ErrorBoundary>
      </div>
      <div className="bg-light-blue text-white">
        <div className="container">
          <ErrorBoundary>
            <MovieList
              title="Upcoming movies"
              endpoint="upcoming"
              styles="d-flex movies-wrapper"
            />
          </ErrorBoundary>
        </div>
      </div>
      <div className="container">
        <ErrorBoundary>
          <MovieList
            title="Top Rated"
            endpoint="top_rated"
            styles="d-flex movies-wrapper"
          />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default HomePage;
