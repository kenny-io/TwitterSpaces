import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFetchHost, useHost } from "../../contexts/hosts";
import { AudioPlayer } from "../../components/AudioPlayer";
import { CloudinaryImage } from "../../components/CloudinaryImage";
import { getImage, getVideo } from "../../lib/cloudinary";
import Link from "next/link";
export default function SpacePage() {
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

  const space = data.spaces.find((space) => space.id === router.query.space);
  if (!space) return <p>No space</p>;

  return (
    <section className="mb-16">
      <Head>
        <title>{space.title}</title>
        <meta
          name="description"
          content="List, manage, and organize your Twitter spaces conversations in one place"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container items-center px-5 mx-auto mt-24 mb-8">
        <Link href={"/" + hostUsername}>
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
        <span className="mt-8 text-lg font-extrabold uppercase text-twitterblue_dark font-mulish">
          Spaces
        </span>
        <h2 className="mt-3 text-4xl font-bold text-gray-800 font-heading font-mulish">
          {space.title}
        </h2>
      </div>
      <div className="container flex flex-col items-center px-5 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <CloudinaryImage img={getImage(space.heroId)} alt="hero" />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          <p className="mb-8 leading-relaxed font-grotesk ">
            {space.description}
          </p>
          <AudioPlayer id="player" video={getVideo(space.audioId)} />
        </div>
      </div>
    </section>
  );
}
