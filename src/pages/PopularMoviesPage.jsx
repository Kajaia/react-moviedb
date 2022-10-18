import MovieList from "../components/movies/MovieList";

function PopularMoviesPage() {
  return (
    <div className="container">
      <MovieList
        title="Popular Movies"
        endpoint="popular"
        styles="row justify-content-center"
      />
    </div>
  );
}

export default PopularMoviesPage;
