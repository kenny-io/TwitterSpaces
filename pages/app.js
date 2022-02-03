import { getFirestore, collection } from "firebase/firestore";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuth } from "../contexts/auth";
import { HostHeader } from "../components/HostHeader";
import { SpaceCard } from "../components/SpaceCard";
import Head from "next/head";

export default function AppPage() {
  const { user, userData } = useAuth();
  const [spacesSnap, isSpacesLoading] = useCollection(
    collection(getFirestore(), `users/${user?.uid}/spaces`)
  );
  if (!userData || isSpacesLoading || !userData)
    return <div className="max-w-md mx-auto">Loading...</div>;

  return (
    <section className="text-gray-600 body-font font-grotesk">
      <Head>
        <title>Dashboard | {userData.username}</title>
        <meta
          name="description"
          content="List, manage, and organize your Twitter spaces conversations in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HostHeader host={userData}>
        <div className="flex space-x-5">
          <Link href="/app/spaces/new">
            <a className="inline-flex items-center px-3 py-2 mt-8 text-base text-white rounded-lg bg-twitterblue border-twitterblue focus:outline-none hover:bg-twitterblue_dark md:mt-0">
              Upload a new space
            </a>
          </Link>

          <Link href={`/${userData.username}`}>
            <a className="inline-flex items-center px-3 py-2 mt-8 text-base text-gray-800 border-2 rounded-lg border-twitterblue focus:outline-none hover:bg-gray-100 md:mt-0">
              Preview
            </a>
          </Link>
        </div>
      </HostHeader>

      <div className="container items-center px-5 mx-auto">
        <h1 className="mb-6 text-3xl font-medium text-gray-900 title-font sm:text-4xl font-mulish">
          Your spaces
        </h1>

        {spacesSnap.docs.length > 0 ? (
          <div className="flex flex-wrap -m-4">
            {spacesSnap.docs.map((spaceDoc) => {
              const space = spaceDoc.data();
              return (
                <SpaceCard
                  key={spaceDoc.id}
                  href={`/app/spaces/${spaceDoc.id}`}
                  space={space}
                ></SpaceCard>
              );
            })}
          </div>
        ) : (
          <p>You haven&apos;t uploaded your first space yet.</p>
        )}
      </div>

      <div className="mt-32" />
    </section>
  );
}
