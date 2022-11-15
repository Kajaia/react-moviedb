import ErrorBoundary from "../../components/others/ErrorBoundary";
import { getData, getDetails, getOtherData } from "../../services/ApiService";
import PersonDetails from "../../components/persons/PersonDetails";
import Layout from "../../components/layout";

export async function getStaticPaths() {
  const res = await getData("person", "popular");
  const persons = res.data.results;

  const paths = persons.map((person) => ({
    params: {
      id: person.id.toString(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const details = await getDetails("person", params.id);
  const movies = await getOtherData("person", params.id, "movie_credits");
  const shows = await getOtherData("person", params.id, "tv_credits");
  const images = await getOtherData("person", params.id, "images");

  return {
    props: {
      details: details.data,
      movies: movies.data.cast,
      shows: shows.data.cast,
      images: images.data.profiles,
    },
  };
}

function PersonInfo(props) {
  return (
    <Layout>
      <ErrorBoundary>
        <PersonDetails data={props} />
      </ErrorBoundary>
    </Layout>
  );
}

export default PersonInfo;
