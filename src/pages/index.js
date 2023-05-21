import Head from "next/head";
import requests from "../../utils/requests";
import { Header } from "../components/Main/Header";
import { Nav } from "../components/Main/Nav";
import { Results } from "../components/Main/Results";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu</title>
      </Head>

      <Header />

      <Nav />

      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
