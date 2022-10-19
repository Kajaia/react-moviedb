import MovieDetails from "../components/movies/MovieDetails";
import ErrorBoundary from "../components/others/ErrorBoundary";
import { getMovieDetails, getMovieOtherData } from "../services/ApiService";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const details = await getMovieDetails(params.id);
  const credits = await getMovieOtherData(params.id, "credits");
  const images = await getMovieOtherData(params.id, "images");
  return {
    details: details.data,
    credits: credits.data.cast,
    images: images.data.backdrops,
  };
};

function MovieDetailsPage() {
  const data = useLoaderData();

  return (
    <ErrorBoundary>
      <MovieDetails data={data} />
    </ErrorBoundary>
  );
}

export default MovieDetailsPage;
