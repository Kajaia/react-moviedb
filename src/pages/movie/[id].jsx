import MovieDetails from "../../components/movies/MovieDetails";
import ErrorBoundary from "../../components/others/ErrorBoundary";
import { getDetails, getOtherData } from "../../services/ApiService";
import { useLoaderData } from "react-router-dom";
import Layout from "../../components/layout";

export const loader = async ({ request, params }) => {
  const { pathname } = new URL(request.url);
  const category = pathname.replace(/[0-9]/g, "").replaceAll("/", "");
  const details = await getDetails(category, params.id);
  const credits = await getOtherData(category, params.id, "credits");
  const images = await getOtherData(category, params.id, "images");
  const videos = await getOtherData(category, params.id, "videos");
  return {
    details: details.data,
    credits: credits.data.cast,
    images: images.data.backdrops,
    videos: videos.data.results,
  };
};

function MovieDetails() {
  const data = useLoaderData();

  return (
    <Layout>
      <ErrorBoundary>
        <MovieDetails data={data} />
      </ErrorBoundary>
    </Layout>
  );
}

export default MovieDetails;
