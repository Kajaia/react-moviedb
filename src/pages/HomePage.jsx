import MovieList from "../components/movies/MovieList";
import Search from "../components/others/Search";

function HomePage() {
  return (
    <>
      <Search />
      <div className="container">
        <MovieList
          title="What's Popular"
          endpoint="popular"
          styles="d-flex movies-wrapper"
        />
      </div>
      <div className="bg-light-blue text-white">
        <div className="container">
          <MovieList
            title="Upcoming movies"
            endpoint="upcoming"
            styles="d-flex movies-wrapper"
          />
        </div>
      </div>
      <div className="container">
        <MovieList
          title="Top Rated"
          endpoint="top_rated"
          styles="d-flex movies-wrapper"
        />
      </div>
    </>
  );
}

export default HomePage;
