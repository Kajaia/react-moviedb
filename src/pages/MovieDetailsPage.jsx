import MovieDetails from "../components/movies/MovieDetails";
import ErrorBoundary from "../components/ErrorBoundary";
import { getMovieDetails } from "../services/ApiService";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const res = await getMovieDetails(params.id);
  return res.data;
};

function MovieDetailsPage() {
  const movie = useLoaderData();

  return (
    <ErrorBoundary>
      <MovieDetails movie={movie} />
    </ErrorBoundary>
  );
}

export default MovieDetailsPage;
