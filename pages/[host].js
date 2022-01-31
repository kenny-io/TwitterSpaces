import { useRouter } from "next/router";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { getFirestore, query, collection, where } from "firebase/firestore";
import { HostHeader } from "../components/HostHeader";
import { SpaceCard } from "../components/SpaceCard";

export default function HostPage(props) {
  const router = useRouter();
  const hostUsername = router.query.host;

  const [hostQuerySnap, isLoading] = useCollection(
    query(
      collection(getFirestore(), "users"),
      where("username", "==", hostUsername || "")
    )
  );
  const hostDoc = hostQuerySnap?.docs?.[0];
  const host = hostDoc?.data();
  const [spacesSnap, isSpacesLoading] = useCollection(
    collection(getFirestore(), `users/${hostDoc?.id}/spaces`)
  );

  if (isLoading) return <p>Loading...</p>;
  if (!host) return <p>{router.query.host} is not a host</p>;

  return (
    <>
      <HostHeader host={host}>
        <a
          href={`https://twitter.com/${hostUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 mt-8 text-base text-white rounded-full bg-twitterblue border-twitterblue focus:outline-none hover:bg-twitterblue_dark md:mt-0"
        >
          Follow {host.name} on Twitter
        </a>
      </HostHeader>

      <section className="container items-center px-5 mx-auto">
        <h2 className="mb-6 text-3xl font-medium text-gray-900 title-font sm:text-4xl font-mulish">
          Spaces
        </h2>
        {isSpacesLoading ? (
          <p>Loading...</p>
        ) : spacesSnap.docs.length > 0 ? (
          <div className="flex flex-wrap -m-4">
            {spacesSnap.docs.map((spaceDoc) => {
              const space = spaceDoc.data();
              return (
                <SpaceCard
                  key={spaceDoc.id}
                  href={`/spaces/${spaceDoc.id}`}
                  space={space}
                ></SpaceCard>
              );
            })}
          </div>
        ) : (
          <p>You haven&apos;t uploaded your first space yet.</p>
        )}
      </section>

      <div className="mt-32" />
    </>
  );
}
