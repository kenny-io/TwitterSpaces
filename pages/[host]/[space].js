import { useRouter } from "next/router";
import { useEffect } from "react";
import { useFetchHost, useHost } from "../../contexts/hosts";
import { AudioPlayer } from "../../components/AudioPlayer";

const SPACE_BANNER =
  "https://res.cloudinary.com/kennyy/image/upload/v1642889007/c-d-x-PDX_a_82obo-unsplash_mwscen.jpg";

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
    <section>
      <div className="container items-center px-5 mx-auto mt-24 mb-8">
        <span className="text-lg font-extrabold uppercase text-twitterblue_dark font-mulish">
          Spaces
        </span>
        <h2 className="mt-3 text-4xl font-bold text-gray-800 font-heading font-mulish">
          {space.title}
        </h2>
      </div>
      <div className="container flex flex-col items-center px-5 mx-auto md:flex-row">
        <div className="w-5/6 mb-10 lg:max-w-lg lg:w-full md:w-1/2 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={SPACE_BANNER}
          />
        </div>
        <div className="flex flex-col items-center text-center lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 md:items-start md:text-left">
          {/* <h1 className="mb-4 font-medium text-gray-800 title-font sm:text-4xl font-mulish">
            {space.title}
          </h1> */}
          <p className="mb-8 leading-relaxed font-grotesk ">
            {space.description}
          </p>

          <AudioPlayer
            src={`https://stream.mux.com/${space.playbackId}.m3u8?add_audio_only=true`}
            poster={`https://image.mux.com/${space.playbackId}/thumbnail.png`}
          />
          {/* <button className="inline-flex px-6 py-2 text-lg text-white border-0 rounded bg-twitterblue focus:outline-none hover:bg-twitterblue_dark font-grotesk">
            Listen to this space
          </button> */}
        </div>
      </div>
    </section>
  );
}
