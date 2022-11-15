import MovieDetails from "../../components/movies/MovieDetails";
import ErrorBoundary from "../../components/others/ErrorBoundary";
import { getData, getDetails, getOtherData } from "../../services/ApiService";
import Layout from "../../components/layout";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await getData("movie", "popular");
  const movies = res.data.results;

  const paths = movies.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const details = await getDetails("movie", params.id);
  const credits = await getOtherData("movie", params.id, "credits");
  const images = await getOtherData("movie", params.id, "images");
  const videos = await getOtherData("movie", params.id, "videos");

  return {
    props: {
      details: details.data,
      credits: credits.data.cast,
      images: images.data.backdrops,
      videos: videos.data.results,
    },
  };
};

function MovieInfo(props) {
  return (
    <Layout>
      <Head>
        <title>{props?.details?.title} - MovieDB</title>
      </Head>
      <ErrorBoundary>
        <MovieDetails data={props} />
      </ErrorBoundary>
    </Layout>
  );
}

export default MovieInfo;
