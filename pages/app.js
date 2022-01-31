import { getFirestore, collection, doc, deleteDoc } from "firebase/firestore";
import Link from "next/link";
import { useCollection, useDocumentData } from "react-firebase-hooks/firestore";
import { useAuth } from "../contexts/auth";
import SpacesList from "../components/SpacesList";

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
        <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
          <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl font-mulish">
              {user?.displayName}
            </h1>
            <h2 className="mb-8 text-sm tracking-widest text-gray-500 title-font font-grotesk">
              @kenny_io
              {/* {user?.username}  */}
            </h2>
            <p className="mb-8 leading-relaxed font-grotesk">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud
            </p>
            <Link href="/app/spaces/new">
              <a className="inline-flex items-center px-3 py-2 mt-8 text-base text-white rounded-full bg-twitterblue border-twitterblue focus:outline-none hover:bg-twitterblue_dark md:mt-0">
                Upload a new space
              </a>
            </Link>
            {/* <button onClick={logout} className="px-3 py-3">
              Logout
            </button> */}
          </div>
          <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
            <img
              src={createPhotoUrl(user?.photoURL)}
              format="webp"
              className="max-w-xs shadow-2xl md:max-w-lg rounded-xl opacity-95 hover:opacity-80 "
              sizes="sm:max-w-xs md:100vw lg:800px"
              alt="twitter profile image"
              width="305px"
              height="305px"
            />
          </div>
        </div>
        <div className="container flex flex-col items-center px-5 mx-auto md:flex-row">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl font-mulish">
            Your spaces
          </h1>
        </div>
      </section>
    );
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
        <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
          <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl font-mulish">
            {userData.name}
          </h1>
          <h2 className="mb-8 text-sm tracking-widest text-gray-500 title-font font-grotesk">
            @{userData.username}
          </h2>
          <p className="mb-8 leading-relaxed font-grotesk">{userData.bio}</p>
          <Link href="/app/spaces/new">
            <a className="inline-flex items-center px-3 py-2 mt-8 text-base text-white rounded-full bg-twitterblue border-twitterblue focus:outline-none hover:bg-twitterblue_dark md:mt-0">
              Upload a new space
            </a>
          </Link>
        </div>
        <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
          <img
            src={createPhotoUrl(user?.photoURL)}
            format="webp"
            className="max-w-xs shadow-2xl md:max-w-lg rounded-xl opacity-95 hover:opacity-80 "
            sizes="sm:max-w-xs md:100vw lg:800px"
            alt="twitter profile image"
            width="305px"
            height="305px"
          />
        </div>
      </div>
      <div className="container items-center px-5 mx-auto">
        <h1 className="mb-6 text-3xl font-medium text-gray-900 title-font sm:text-4xl font-mulish">
          Your spaces
        </h1>
        <SpacesList spaces={spacesSnap.docs} deleteSpace={deleteSpace} />)
      </div>
    </section>
  );
}
