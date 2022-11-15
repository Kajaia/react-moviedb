import PersonList from "../components/persons/PersonList";
import Layout from "../components/layout";
import Head from "next/head";
import { getData } from "../services/ApiService";

export async function getStaticProps() {
  const popular = await getData("person", "popular");

  return {
    props: {
      popular: popular.data.results,
    },
  };
}

function Person({ popular }) {
  return (
    <Layout>
      <Head>
        <title>Popular People - MovieDB</title>
      </Head>
      <div className="container">
        <PersonList category="person" data={popular} title="Popular People" />
      </div>
    </Layout>
  );
}

export default Person;
