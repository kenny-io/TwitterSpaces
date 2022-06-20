import { useMemo } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { getFirestore, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";
import { useAuth } from "../../../contexts/auth";
import { ImageUpload } from "../../../components/ImageUpload";
import { VideoUpload } from "../../../components/VideoUpload";
import { DEFAULT_SPACE_HERO_ID } from "../../../utils/constants";
import Link from "next/link";
const createSpaceId = customAlphabet(alphanumeric, 12);

export default function NewSpacePage() {
  const router = useRouter();
  const { user, userData } = useAuth();
  const newSpaceId = useMemo(() => createSpaceId(), []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!e.currentTarget.title.value) return;
    if (!e.currentTarget.audioId.value) return;

    const firestore = getFirestore();
    await setDoc(doc(firestore, `users/${user.uid}/spaces/${newSpaceId}`), {
      id: newSpaceId,
      uid: user.uid,
      username: userData.username,
      title: e.currentTarget.title.value,
      description: e.currentTarget.description.value,
      heroId: e.currentTarget.heroId?.value || DEFAULT_SPACE_HERO_ID,
      audioId: e.currentTarget.audioId.value,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    router.push("/app");
  }

  return (
    <section className="relative py-20 overflow-hidden bg-white 2xl:py-40">
      <Head>
        <title>Create new space</title>
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

                  <ImageUpload
                    userId={userData?.twitterUserId}
                    spaceId={newSpaceId}
                  />

                  <div className="mt-3" />

                  <VideoUpload
                    userId={userData?.twitterUserId}
                    spaceId={newSpaceId}
                  />

                  <div className="mt-6" />

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
