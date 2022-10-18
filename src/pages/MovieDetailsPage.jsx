import { useParams } from "react-router-dom";
import MovieDetails from "../components/movies/MovieDetails";
import ErrorBoundary from "../components/ErrorBoundary";

function MovieDetailsPage() {
  const params = useParams();

  return (
    <ErrorBoundary>
      <MovieDetails id={params.id} />
    </ErrorBoundary>
  );
}

export default MovieDetailsPage;
