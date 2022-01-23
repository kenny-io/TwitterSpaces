export default function AppHeader() {
  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <div className="text-xl font-squid">
        <h3>
          <span className="text-twitterblue">S</span>paces
        </h3>
      </div>
      <div>
        <button className="inline-flex items-center border-2 border-twitterblue rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-100 text-base mt-4 md:mt-0">
          Upload your space
        </button>
      </div>
    </header>
  );
}
