import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Almazur</title>
        <meta name="description" content="Sport for girls from 3 to 6 years" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Welcome to AlmaZur!!!</h1>

      <p className={styles.description}>Here will be our app</p>
    </div>
  );
}
