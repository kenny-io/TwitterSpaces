import Head from "next/head";
import { app } from "../lib/firebase";
import { getFirestore, collection } from "firebase/firestore";
import { useCollectionDataOnce } from "react-firebase-hooks/firestore";
import styles from "../styles/Home.module.css";
import AppHero from "../components/AppHero";
import SpacesList from "../components/SpacesList";
export default function Home() {
  const [tests, isLoading] = useCollectionDataOnce(
    collection(getFirestore(app), "tests")
  );

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

      <main>
        <AppHero />
        <SpacesList />
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">TwitterSpaces!</a>
        </h1>
        {isLoading ? (
          <p>loading...</p>
        ) : (
          <pre>{JSON.stringify(tests, null, 4)}</pre>
        )} */}
      </main>
    </div>
  );
}
