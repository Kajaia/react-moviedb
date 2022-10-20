import ErrorBoundary from "../components/others/ErrorBoundary";
import { getDetails, getOtherData } from "../services/ApiService";
import { useLoaderData } from "react-router-dom";
import PersonDetails from "../components/persons/PersonDetails";

export const loader = async ({ request, params }) => {
  const { pathname } = new URL(request.url);
  const category = pathname.replace(/[0-9]/g, "").replaceAll("/", "");
  const details = await getDetails(category, params.id);
  const movies = await getOtherData(category, params.id, "movie_credits");
  const shows = await getOtherData(category, params.id, "tv_credits");
  const images = await getOtherData(category, params.id, "images");
  return {
    details: details.data,
    movies: movies.data.cast,
    shows: shows.data.cast,
    images: images.data.profiles,
  };
};

function PersonDetailsPage() {
  const data = useLoaderData();

  return (
    <ErrorBoundary>
      <PersonDetails data={data} />
    </ErrorBoundary>
  );
}

export default PersonDetailsPage;
