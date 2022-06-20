import { useRouter } from "next/router";
import Head from "next/head";
import {
  getFirestore,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useDocument } from "react-firebase-hooks/firestore";
import { useAuth } from "../../../contexts/auth";
import { ImageUpload } from "../../../components/ImageUpload";
import Link from "next/link";
export default function AppSpacePage(props) {
  const router = useRouter();
  const { user, userData } = useAuth();
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
    router.push("/app");
  }

  async function deleteSpace(id) {
    await deleteDoc(
      doc(getFirestore(), `users/${user.uid}/spaces/${spaceDoc.id}`)
    );
    router.push("/app");
  }

  if (!space) return null;

  return (
    <section className="relative py-10 overflow-hidden bg-white 2xl:py-20">
      <Head>
        <title>Edit your space</title>
        <meta
          name="description"
          content="List, manage, and organize your Twitter spaces conversations in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container relative px-4 mx-auto">
        <Link href="/app">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </a>
        </Link>
        <div className="max-w-5xl mx-auto mt-8">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 ">
              <div className="px-6 py-12 rounded-lg lg:px-20 lg:py-24 bg-twitterblue_light">
                <form onSubmit={handleSubmit} className="font-grotesk">
                  <h3 className="mb-10 text-2xl font-bold text-gray-800 font-heading font-mulish">
                    Edit space
                  </h3>
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-lg">
                    <span className="inline-block py-2 pr-3 "></span>
                    <input
                      className="w-full py-4 pl-4 pr-6 placeholder-gray-400 font-semi-bold focus:outline-none"
                      type="text"
                      name="title"
                      defaultValue={space.title}
                    />
                  </div>
                  <div className="flex items-center pl-6 mb-3 bg-white rounded-lg">
                    <span className="inline-block py-2 pr-3 border-r border-gray-50"></span>
                    <textarea
                      className="w-full h-40 py-4 pl-4 pr-6 placeholder-gray-400 rounded-r-full font-semi-bold focus:outline-none"
                      type="text"
                      name="description"
                      defaultValue={space.description}
                    />
                  </div>

                  {/* <ImageUpload
                    userId={userData?.twitterUserId}
                    spaceId={newSpaceId}
                  /> */}

                  <button
                    type="submit"
                    className="w-full py-4 font-bold text-white transition duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="w-full py-4 mt-3 font-bold text-gray-800 transition duration-200 border-2 rounded-lg border-twitterblue hover:bg-red-700 hover:border-red-700 hover:text-white"
                    onClick={deleteSpace}
                  >
                    Delete
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
