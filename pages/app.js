import { getFirestore, collection, doc, deleteDoc } from "firebase/firestore";
import Link from "next/link";
import { useCollection, useDocumentData } from "react-firebase-hooks/firestore";
import { useAuth } from "../contexts/auth";
import { HostHeader } from "../components/HostHeader";
import { SpaceCard } from "../components/SpaceCard";

export default function AppPage() {
  const { user } = useAuth();
  const firestore = getFirestore();
  const [userData, isUserLoading] = useDocumentData(
    doc(firestore, `users/${user?.uid}`)
  );
  const [spacesSnap, isSpacesLoading] = useCollection(
    collection(getFirestore(), `users/${user?.uid}/spaces`)
  );
  if (isUserLoading || isSpacesLoading || !userData)
    return <div className="max-w-md mx-auto">Loading...</div>;

  return (
    <section className="text-gray-600 body-font">
      <HostHeader host={userData}>
        <Link href="/app/spaces/new">
          <a className="inline-flex items-center px-3 py-2 mt-8 text-base text-white rounded-full bg-twitterblue border-twitterblue focus:outline-none hover:bg-twitterblue_dark md:mt-0">
            Upload a new space
          </a>
        </Link>
      </HostHeader>

      <div className="container items-center px-5 mx-auto">
        <h1 className="mb-6 text-3xl font-medium text-gray-900 title-font sm:text-4xl font-mulish">
          Your spaces
        </h1>
        {/* <SpacesList spaces={spacesSnap.docs} deleteSpace={deleteSpace} />) */}
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
