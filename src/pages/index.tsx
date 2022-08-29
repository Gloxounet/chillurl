import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import ResultComponent from "../components/ResultComponent";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ChillUrl Short Url Maker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to ChillUrl</h1>

        <p className={styles.description}>Shorten your URLs now</p>

        <ResultComponent></ResultComponent>
      </main>
    </div>
  );
};

export default Home;
