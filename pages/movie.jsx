import MovieList from "../components/movies/MovieList";
import ErrorBoundary from "../components/others/ErrorBoundary";
import Layout from "../components/layout";
import Head from "next/head";
import { getData } from "../services/ApiService";

export async function getStaticProps() {
  const popular = await getData("movie", "popular");

  return {
    props: {
      popular: popular.data.results,
    },
  };
}

function Movie({ popular }) {
  return (
    <Layout>
      <Head>
        <title>Popular Movies - MovieDB</title>
      </Head>
      <div className="container">
        <ErrorBoundary>
          <MovieList
            title="Popular Movies"
            styles="row justify-content-center"
            category="movie"
            data={popular}
          />
        </ErrorBoundary>
      </div>
    </Layout>
  );
}

export default Movie;
