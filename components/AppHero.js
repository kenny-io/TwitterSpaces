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
            Do you have favorite Twitter Spaces hosts? Now they can upload their
            recorded space conversations here for you to catch up on. Listen at
            your own time.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row lg:w-2/3 w-full mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="inline-flex w-full rounded border border-gray-300">
            <input
              ype="text"
              id="space-search"
              name="space-search"
              placeholder="Search for a space"
              className="w-full bg-slate-100 bg-opacity-50  focus:border-twitterblue focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <div className="w-1/12 pt-2 bg-twitterblue rounded border border-gray-300 ">
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
            </div>
          </div>
        </div>
        <div>
          <div
            className="absolute top-24 -left-80  bg-twitterblue_light rounded-full  h-24 w-24"
            style={{ height: "550px", width: "550px" }}
          />
        </div>
      </div>
    </section>
  );
}
