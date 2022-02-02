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
import AppHero from "../components/AppHero";
import { SpaceCard } from "../components/SpaceCard";

export default function Home() {
  const [spaces] = useCollectionData(
    query(
      collectionGroup(getFirestore(), "spaces"),
      orderBy("createdAt", "desc"),
      limit(10)
    )
  );

  // create a function to truncate the description

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <div className="container items-center px-5 mx-auto mb-8">
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
          <div className="flex flex-wrap -m-4">
            {spaces.map((spaceDoc) => {
              return (
                <SpaceCard
                  key={spaceDoc.id}
                  href={`/spaces/${spaceDoc.id}`}
                  space={spaceDoc}
                >
                  <div>{truncate(spaceDoc.description, 100)}</div>
                </SpaceCard>
              );
            })}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </div>
  );
}
