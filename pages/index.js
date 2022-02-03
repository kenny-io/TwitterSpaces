import Head from "next/head";
import {
  getFirestore,
  collectionGroup,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import AppHero from "../components/AppHero";
import { SpaceCard } from "../components/SpaceCard";

const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

export default function Home() {
  const [spacesSnap, isLoading] = useCollection(
    query(
      collectionGroup(getFirestore(), "spaces"),
      orderBy("createdAt", "desc")
    )
  );

  return (
    <div className="container items-center px-5 mx-auto mb-8">
      <Head>
        <title>Home | Spaces</title>
        <meta
          name="description"
          content="List, manage, and organize your Twitter spaces conversations in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppHero />

        {isLoading ? (
          <p>Loading...</p>
        ) : spacesSnap.docs.length === 0 ? (
          <p>No spaces</p>
        ) : (
          <div className="flex flex-wrap -m-4">
            {spacesSnap.docs.map((spaceDoc) => {
              const space = spaceDoc.data();
              return (
                <SpaceCard
                  key={spaceDoc.id}
                  href={`/${space.username}/${spaceDoc.id}`}
                  space={space}
                >
                  <div>{truncate(space.description, 100)}</div>
                </SpaceCard>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
