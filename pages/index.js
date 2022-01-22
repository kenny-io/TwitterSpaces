import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TwitterSpaces</title>
        <meta
          name="description"
          content="List, manage, and organize your Twitter spaces conversations in one place"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">TwitterSpaces!</a>
        </h1>
      </main>
    </div>
  );
}
