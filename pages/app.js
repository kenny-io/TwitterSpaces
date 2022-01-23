import { getFirestore, collection, doc, deleteDoc } from "firebase/firestore";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuth } from "../contexts/auth";

export default function AppPage() {
  const { user } = useAuth();
  const [spacesSnap, isLoading] = useCollection(
    collection(getFirestore(), `users/${user?.uid}/spaces`)
  );

  if (isLoading) return <div className="max-w-md mx-auto">Loading...</div>;

  if (!spacesSnap) {
    return (
      <div className="max-w-md mx-auto">
        <p>No spaces</p>
        <Link href="/app/spaces/new">Create new</Link>
      </div>
    );
  }

  function deleteSpace(id) {
    deleteDoc(doc(getFirestore(), `users/${user.uid}/spaces/${id}`));
  }

  return (
    <div className="max-w-md mx-auto">
      <p>Spaces:</p>
      <ul className="my-4">
        {spacesSnap.docs.map((spaceDoc) => {
          const space = spaceDoc.data();
          return (
            <li key={spaceDoc.id}>
              <Link href={`/app/spaces/${spaceDoc.id}`}>
                <a className="flex justify-between p-2 border">
                  <span>{space.title}</span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      deleteSpace(spaceDoc.id);
                    }}
                  >
                    Delete
                  </button>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <Link href="/app/spaces/new">New</Link>
    </div>
  );
}
