import Head from "next/head";
import { useEffect } from "react";
import {
  getFirestore,
  collectionGroup,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import styles from "../styles/Home.module.css";
import AppHero from "../components/AppHero";

export default function Home() {
  const [spaces] = useCollectionData(
    query(
      collectionGroup(getFirestore(), "spaces"),
      orderBy("createdAt", "desc"),
      limit(10)
    )
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

        {spaces ? (
          <pre>{JSON.stringify(spaces, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}
