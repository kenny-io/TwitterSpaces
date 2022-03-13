export function AppHero({ input }) {
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
          {input}
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
