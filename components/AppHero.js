export default function AppHero() {
  return (
    <section className="">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center mb-20">
          <h1 className="font-mulish mb-8 text-5xl font-bold font-heading">
            Never miss interesting Twitter{" "}
            <span className="text-twitterblue">Space </span> <br />{" "}
            conversations again!
          </h1>
          <p className="lg:w-2/3 mx-auto text-gray-900 font-grotesk leading-relaxed">
            Do you have favorite Twitter Spaces hosts? Now they can uplaod their
            recorded space <br /> conversations here for you to catch up on.
            Listen at your own time.
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <input
              type="text"
              id="space-search"
              name="space-search"
              placeholder="Search for a space"
              className="w-full bg-gray-100 bg-opacity-50 rounded-full border border-gray-300 focus:border-twitterblue focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>
        <div>
          {/* <!-- create the half circle on the left side of the page  --> */}
          <div
            className="absolute top-24 -left-80  bg-twitterblue_light rounded-full  h-24 w-24"
            style={{ height: "550px", width: "550px" }}
          />
        </div>
      </div>
    </section>
  );
}
