import MovieList from "../components/movies/MovieList";
import ErrorBoundary from "../components/others/ErrorBoundary";
import Layout from "../components/layout";
import Head from "next/head";
import { getData } from "../services/ApiService";

export async function getStaticProps() {
  const popular = await getData("tv", "popular");

  return {
    props: {
      popular: popular.data.results,
    },
  };
}

function Tv({ popular }) {
  return (
    <Layout>
      <Head>
        <title>Popular TV Shows - MovieDB</title>
      </Head>
      <div className="container">
        <ErrorBoundary>
          <MovieList
            title="Popular TV Shows"
            styles="row justify-content-center"
            category="tv"
            data={popular}
          />
        </ErrorBoundary>
      </div>
    </Layout>
  );
}

export default Tv;
