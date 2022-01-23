import Link from "next/link";
import { useRouter } from "next/router";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useAuth } from "../../../contexts/auth";

export default function NewSpacePage() {
  const router = useRouter();
  const { user } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    const firestore = getFirestore();
    await addDoc(collection(firestore, `users/${user.uid}/spaces`), {
      uid: user.uid,
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    router.push("/app");
  }

  return (
    <div className="max-w-md mx-auto">
      <Link href="/app">Back to app</Link>
      <div>Create new space</div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Title
          <input
            name="title"
            type="text"
            className="px-2 py-0.5 border border-gray-600"
          />
        </label>
        <label className="flex flex-col">
          Description
          <input
            name="description"
            type="text"
            className="px-2 py-0.5 border border-gray-600"
          />
        </label>
        <button type="submit" className="border border-gray-600">
          Create
        </button>
      </form>
    </div>
  );
}
