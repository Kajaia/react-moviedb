import MovieList from "../components/movies/MovieList";
import Search from "../components/others/Search";

function HomePage() {
  return (
    <>
      <Search />
      <div className="container">
        <MovieList title="What's Popular" endpoint="popular" />
      </div>
      <div className="bg-light-blue text-white">
        <div className="container">
          <MovieList title="Upcoming movies" endpoint="upcoming" />
        </div>
      </div>
      <div className="container">
        <MovieList title="Top Rated" endpoint="top_rated" />
      </div>
    </>
  );
}

export default HomePage;
