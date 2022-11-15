import ErrorBoundary from "../components/others/ErrorBoundary";
import MovieList from "../components/movies/MovieList";
import Search from "../components/others/search/Search";
import Layout from "../components/layout";
import Head from "next/head";
import { getData } from "../services/ApiService";

export async function getStaticProps() {
  const popular = await getData("movie", "popular");
  const upcoming = await getData("movie", "upcoming");
  const topRated = await getData("movie", "top_rated");

  return {
    props: {
      popular: popular.data.results,
      upcoming: upcoming.data.results,
      topRated: topRated.data.results,
    },
  };
}

function Index({ popular, upcoming, topRated }) {
  return (
    <Layout>
      <Head>
        <title>
          Millions of movies, TV shows and people to discover. Explore now -
          MovieDB
        </title>
      </Head>
      <ErrorBoundary>
        <Search />
      </ErrorBoundary>
      <div className="container">
        <ErrorBoundary>
          <MovieList
            title="What's Popular"
            styles="d-flex movies-wrapper"
            category="movie"
            data={popular}
          />
        </ErrorBoundary>
      </div>
      <div className="bg-light-blue text-white">
        <div className="container">
          <ErrorBoundary>
            <MovieList
              title="Upcoming movies"
              styles="d-flex movies-wrapper"
              category="movie"
              data={upcoming}
            />
          </ErrorBoundary>
        </div>
      </div>
      <div className="container">
        <ErrorBoundary>
          <MovieList
            title="Top Rated"
            styles="d-flex movies-wrapper"
            category="movie"
            data={topRated}
          />
        </ErrorBoundary>
      </div>
    </Layout>
  );
}

export default Index;
