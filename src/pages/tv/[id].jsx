import TvDetails from "../../components/tv/TvDetails";
import ErrorBoundary from "../../components/others/ErrorBoundary";
import { getData, getDetails, getOtherData } from "../../services/ApiService";
import Layout from "../../components/layout";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await getData("tv", "popular");
  const shows = res.data.results;

  const paths = shows.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const details = await getDetails("tv", params.id);
  const credits = await getOtherData("tv", params.id, "credits");
  const images = await getOtherData("tv", params.id, "images");
  const videos = await getOtherData("tv", params.id, "videos");

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
        <title>{props?.details?.name} - MovieDB</title>
      </Head>
      <ErrorBoundary>
        <TvDetails data={props} />
      </ErrorBoundary>
    </Layout>
  );
}

export default MovieInfo;
