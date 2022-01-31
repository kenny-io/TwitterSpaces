import Link from "next/link";
import { useRouter } from "next/router";
import {
  getFirestore,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { useAuth } from "../../../contexts/auth";
import { AudioPlayer } from "../../../components/AudioPlayer";

export default function AppSpacePage(props) {
  const router = useRouter();
  const { user } = useAuth();
  const [spaceDoc] = useDocument(
    doc(getFirestore(), `users/${user?.uid}/spaces/${router.query.space}`)
  );

  if (!spaceDoc) {
    return (
      <div className="max-w-md mx-auto">
        <div>Loading...</div>
      </div>
    );
  }

  const space = spaceDoc.data();

  function handleSubmit(e) {
    e.preventDefault();
    const firestore = getFirestore();
    updateDoc(
      doc(firestore, `users/${user.uid}/spaces/${router.query.space}`),
      {
        title: e.currentTarget.title.value,
        description: e.currentTarget.description.value,
        updatedAt: serverTimestamp(),
      }
    );
  }

  async function deleteSpace(id) {
    await deleteDoc(
      doc(getFirestore(), `users/${user.uid}/spaces/${spaceDoc.id}`)
    );
    router.push("/app");
  }

  if (!space) return null;

  return (
    <div className="max-w-md mx-auto">
      <Link href="/app">Back to app</Link>
      <div>Space</div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Title
          <input
            name="title"
            type="text"
            defaultValue={space.title}
            className="px-2 py-0.5 border border-gray-600"
          />
        </label>
        <label className="flex flex-col">
          Description
          <input
            name="description"
            type="text"
            defaultValue={space.description}
            className="px-2 py-0.5 border border-gray-600"
          />
        </label>

        <AudioPlayer
          src={`https://stream.mux.com/${space.playbackId}.m3u8?add_audio_only=true`}
          poster={`https://image.mux.com/${space.playbackId}/thumbnail.png`}
        />
        <button type="submit" className="border border-gray-600">
          Save
        </button>
        <button
          type="button"
          className="border border-gray-600"
          onClick={deleteSpace}
        >
          Delete
        </button>
      </form>
    </div>
  );
}
