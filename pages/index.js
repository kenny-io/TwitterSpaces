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
  const allSpaces = [
    {
      id: 1,
      title: "The things they don't tell you about space",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image:
        "https://res.cloudinary.com/kennyy/image/upload/v1642889007/c-d-x-PDX_a_82obo-unsplash_mwscen.jpg",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      host: "John Doe",
      participantsCount: 10,
    },
    {
      id: 1,
      title: "The things they don't tell you about space",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image:
        "https://res.cloudinary.com/kennyy/image/upload/v1642889009/jukka-aalho-_t9c-kmMjl8-unsplash_nvaapp.jpg",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      host: "John Doe",
      participantsCount: 10,
    },
    {
      id: 1,
      title: "The things they don't tell you about space",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image:
        "https://res.cloudinary.com/kennyy/image/upload/v1642889013/austin-distel-Hg3BHX6U5jg-unsplash_sq27t5.jpg",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      host: "John Doe",
      participantsCount: 10,
    },
  ];
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
        {/* <SpacesList spaces={} /> */}
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
