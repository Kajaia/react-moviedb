import MovieDetails from "../components/movies/MovieDetails";
import ErrorBoundary from "../components/others/ErrorBoundary";
import { getDetails, getOtherData } from "../services/ApiService";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ params }) => {
  const details = await getDetails("movie", params.id);
  const credits = await getOtherData("movie", params.id, "credits");
  const images = await getOtherData("movie", params.id, "images");
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
