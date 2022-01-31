export default function SpacePage() {
  const SPACE_BANNER =
    "https://res.cloudinary.com/kennyy/image/upload/v1642889007/c-d-x-PDX_a_82obo-unsplash_mwscen.jpg";
  return (
    <section>
      <div className="container items-center px-5 mt-24 mb-8 mx-auto">
        <span className="text-lg text-twitterblue_dark font-extrabold font-mulish uppercase">
          Spaces
        </span>
        <h2 className="mt-3 text-4xl font-bold font-heading text-gray-800 font-mulish">
          Awesome title of the space
        </h2>
      </div>
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={SPACE_BANNER}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl mb-4 font-medium text-gray-800 font-mulish">
            Description
          </h1>
          <p className="mb-8 leading-relaxed font-grotesk ">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>

          <button className="inline-flex text-white bg-twitterblue border-0 py-2 px-6 focus:outline-none hover:bg-twitterblue_dark rounded text-lg font-grotesk">
            Listen to this space
          </button>
        </div>
      </div>
    </section>
  );
}
