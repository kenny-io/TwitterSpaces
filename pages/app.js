import { getFirestore, collection, doc, deleteDoc } from "firebase/firestore";
import Link from "next/link";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuth } from "../contexts/auth";
import SpacesList from "../components/SpacesList";

export default function AppPage() {
  const { user, logout } = useAuth();
  const [spacesSnap, isLoading] = useCollection(
    collection(getFirestore(), `users/${user?.uid}/spaces`)
  );
  if (isLoading) return <div className="max-w-md mx-auto">Loading...</div>;

  function createPhotoUrl(TwitterPhotoUrl) {
    let URL = TwitterPhotoUrl.replace("_normal", "");
    return URL;
  }

  function deleteSpace(id) {
    deleteDoc(doc(getFirestore(), `users/${user.uid}/spaces/${id}`));
  }

  if (!spacesSnap) {
    return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-mulish text-gray-900">
              {user?.displayName}
            </h1>
            <h2 className="text-sm title-font text-gray-500 tracking-widest mb-8 font-grotesk">
              @kenny_io
              {/* {user?.username}  */}
            </h2>
            <p class="mb-8 leading-relaxed font-grotesk">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <Link href="/app/spaces/new">
              <a
                className="inline-flex items-center  bg-twitterblue border-twitterblue
           rounded-full py-2 px-3 focus:outline-none hover:bg-twitterblue_dark text-base mt-8 md:mt-0 text-white"
              >
                Upload a new space
              </a>
            </Link>
            {/* <button onClick={logout} className="px-3 py-3">
              Logout
            </button> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={createPhotoUrl(user?.photoURL)}
              format="webp"
              className="max-w-xs md:max-w-lg rounded-xl shadow-2xl opacity-95 hover:opacity-80 "
              sizes="sm:max-w-xs md:100vw lg:800px"
              alt="twitter profile image"
              width="305px"
              height="305px"
            />
          </div>
        </div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-mulish text-gray-900">
            Your spaces
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-mulish text-gray-900">
            {user?.displayName}
          </h1>
          <h2 className="text-sm title-font text-gray-500 tracking-widest mb-8 font-grotesk">
            @kenny_io
            {/* {user?.username}  */}
          </h2>
          <p class="mb-8 leading-relaxed font-grotesk">
            Snr. DX at @Netlify. Always open to chat about #Jamstack, #VueJS
            #Nuxtjs and #Frontend things. http://kenny.engineer
          </p>
          <Link href="/app/spaces/new">
            <a
              className="inline-flex items-center  bg-twitterblue border-twitterblue
           rounded-full py-2 px-3 focus:outline-none hover:bg-twitterblue_dark text-base mt-8 md:mt-0 text-white"
            >
              Upload a new space
            </a>
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            src={createPhotoUrl(user?.photoURL)}
            format="webp"
            className="max-w-xs md:max-w-lg rounded-xl shadow-2xl opacity-95 hover:opacity-80 "
            sizes="sm:max-w-xs md:100vw lg:800px"
            alt="twitter profile image"
            width="305px"
            height="305px"
          />
        </div>
      </div>
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-mulish text-gray-900">
          Your spaces
        </h1>
      </div>
      <SpacesList spaces={spacesSnap.docs} deleteSpace={deleteSpace} />)
    </section>
  );
}
