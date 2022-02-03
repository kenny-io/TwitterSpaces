import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFetchHost, useHost } from "../contexts/hosts";
import { HostHeader } from "../components/HostHeader";
import { SpaceCard } from "../components/SpaceCard";
import Head from "next/head";

export default function HostPage(props) {
  const router = useRouter();
  const hostUsername = router.query.host;

  const { status, error, data } = useHost(router.query.host);
  const fetchHost = useFetchHost();

  useEffect(() => {
    if (data) return;
    fetchHost(hostUsername);
  }, [hostUsername, fetchHost, data]);

  if (error) return <p>{error.message}</p>;
  if (status === "done" && !data) return <p>No host</p>;
  if (status === "loading") return <p>Loading...</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{hostUsername} | Spaces</title>
        <meta
          name="description"
          content="List, manage, and organize your Twitter spaces conversations in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HostHeader host={data.host}>
        <a
          href={`https://twitter.com/${hostUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center py-2 mt-8 text-base rounded-lg text-twitterblue md:mt-0 font-grotesk"
        >
          Follow {data.host.name} on Twitter
        </a>
      </HostHeader>

      <section className="container items-center px-5 mx-auto">
        <h2 className="mb-6 text-3xl font-medium text-gray-900 title-font sm:text-4xl font-mulish">
          Spaces
        </h2>
        {data.spaces.length > 0 ? (
          <div className="flex flex-wrap -m-4">
            {data.spaces.map((space) => {
              return (
                <SpaceCard
                  key={space.id}
                  href={`/${hostUsername}/${space.id}`}
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
