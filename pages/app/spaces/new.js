import Link from "next/link";
import { useRouter } from "next/router";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useAuth } from "../../../contexts/auth";
import { Upload } from "../../../components/Upload";

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
      assetId: e.currentTarget.assetId.value,
      playbackId: e.currentTarget.playbackId.value,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    router.push("/app");
  }

  return (
    <section className="relative py-20 overflow-hidden bg-white 2xl:py-40">
      <div className="container relative px-4 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 mb-16 lg:w-1/2 lg:mb-0">
              <div className="max-w-md">
                <h2 className="mt-8 mb-10 text-5xl font-bold text-gray-800 font-heading font-mulish">
                  The journey to sharing your space conversations with the world
                  starts here.
                </h2>
                <p className="mb-8 leading-relaxed text-gray-600 font-grotesk">
                  Get millions of people listening to your conversations in
                  minutes.
                </p>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="px-6 py-12 rounded-lg lg:px-20 lg:py-24 bg-twitterblue_light">
                <form onSubmit={handleSubmit} className="font-grotesk">
                  <h3 className="mb-10 text-2xl font-bold text-gray-800 font-heading">
                    Create a new space
                  </h3>
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-lg">
                    <span className="inline-block py-2 pr-3 "></span>
                    <input
                      className="w-full py-4 pl-4 pr-6 placeholder-gray-400 font-semi-bold focus:outline-none"
                      type="text"
                      name="title"
                      placeholder="The title of your space"
                    />
                  </div>
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-lg">
                    <span className="inline-block py-2 pr-3 border-r border-gray-50"></span>
                    <textarea
                      className="w-full h-40 py-4 pl-4 pr-6 placeholder-gray-400 rounded-r-full font-semi-bold focus:outline-none"
                      type="text"
                      name="description"
                      placeholder="Describe your space"
                    />
                  </div>
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-lg">
                    <span className="inline-block py-2 pr-3 "></span>
                    <input
                      className="w-full py-4 pl-4 pr-6 placeholder-gray-400 font-semi-bold focus:outline-none"
                      type="text"
                      name="image"
                      placeholder="Image URL for your poster"
                    />
                  </div>

                  <Upload />

                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    Create
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
