import clsx from "clsx";
import Head from "next/head";
import { useState } from "react";
import {
  getFirestore,
  collectionGroup,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useFetchHost, useHost } from "../contexts/hosts";
import { SpaceCard } from "../components/SpaceCard";
import { AppHero } from "../components/AppHero";

const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
};

export default function Home() {
  const [spacesSnap, spacesIsLoading] = useCollection(
    query(
      collectionGroup(getFirestore(), "spaces"),
      orderBy("createdAt", "desc")
    )
  );

  const [keyword, setKeyword] = useState("");
  const { status, data: hostData } = useHost(keyword);
  const fetchHost = useFetchHost();

  function handleSearchSubmit(e) {
    e.preventDefault();
    const keyword = e.target.keyword.value;
    setKeyword(keyword);
    fetchHost(keyword);
  }

  const spaces = Boolean(keyword)
    ? hostData?.spaces || []
    : spacesSnap?.docs?.map((doc) => doc.data()) || [];

  if (spaces) console.log(spaces);

  const isLoading = keyword ? status === "loading" : spacesIsLoading;

  return (
    <div className="container items-center px-5 mx-auto mb-8">
      <Head>
        <title>Home | Spaces</title>
        <meta
          name="description"
          content="List, manage, and organize your Twitter spaces conversations in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppHero
          input={
            <form
              onSubmit={handleSearchSubmit}
              className="inline-flex w-full rounded border border-gray-300"
            >
              <input
                type="text"
                id="space-search"
                name="keyword"
                placeholder="Search by Twitter handle without (@)"
                className="w-full bg-slate-100 bg-opacity-50  focus:border-twitterblue focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button
                type="submit"
                className={clsx(
                  "w-1/12 pt-2 bg-twitterblue rounded border border-gray-300",
                  status === "loading" && "opacity-40"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 mx-auto text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          }
        />
        {isLoading ? (
          <p>Loading...</p>
        ) : spaces.length === 0 ? (
          <p>No spaces</p>
        ) : (
          <div className="flex flex-wrap -m-4">
            {spaces.map((space) => {
              return (
                <SpaceCard
                  key={space.id}
                  href={`/${space.username}/${space.id}`}
                  space={space}
                >
                  <div>{truncate(space.description, 100)}</div>
                </SpaceCard>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
