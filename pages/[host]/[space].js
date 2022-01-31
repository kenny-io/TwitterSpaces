export default function SpacePage() {
  const SPACE_BANNER =
    "https://res.cloudinary.com/kennyy/image/upload/v1642889007/c-d-x-PDX_a_82obo-unsplash_mwscen.jpg";
  return (
    <section>
      <div className="container items-center px-5 mt-24 mb-8 mx-auto">
        <span class="text-lg text-twitterblue_dark font-extrabold font-mulish uppercase">
          Spaces
        </span>
        <h2 class="mt-3 text-4xl font-bold font-heading text-gray-800 font-mulish">
          Awesome title of the space
        </h2>
      </div>
      <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={SPACE_BANNER}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl mb-4 font-medium text-gray-800 font-mulish">
            Description
          </h1>
          <p class="mb-8 leading-relaxed font-grotesk ">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>

          <button class="inline-flex text-white bg-twitterblue border-0 py-2 px-6 focus:outline-none hover:bg-twitterblue_dark rounded text-lg font-grotesk">
            Listen to this space
          </button>
        </div>
      </div>
    </section>
    // <section class="relative py-20 2xl:py-40 bg-white overflow-hidden">
    //   <div class="relative container px-4 mx-auto">
    //     <div class="max-w-5xl mx-auto">
    //       <div class="flex flex-wrap items-center -mx-4">
    //         <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
    //           <div class="max-w-md">
    // <span class="text-lg text-blue-400 font-bold">Space</span>
    // <h2 class="mt-8 mb-12 text-2xl font-bold font-heading text-gray-500">
    //   Start creating a new template by selecting UI components
    // </h2>
    //             <img
    //               className="object-cover object-center w-full mb-6 rounded-xl"
    //               src={SPACE_BANNER}
    //               alt="content"
    //             />
    //             {/* <p class="text-lg text-gray-200">
    //               <span>The brown fox jumps over</span>
    //               <span class="text-white">the lazy dog.</span>
    //             </p> */}
    //           </div>
    //         </div>
    //         <div class="w-full lg:w-1/2 px-4">
    //           <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    //             <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
    //               Before they sold out
    //               <br class="hidden lg:inline-block" />
    //               readymade gluten
    //             </h1>
    //             <p class="mb-8 leading-relaxed">
    //               Copper mug try-hard pitchfork pour-over freegan heirloom
    //               neutra air plant cold-pressed tacos poke beard tote bag.
    //               Heirloom echo park mlkshk tote bag selvage hot chicken
    //               authentic tumeric truffaut hexagon try-hard chambray.
    //             </p>
    //             <div class="flex justify-center">
    //               <button class="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
    //                 Button
    //               </button>
    //               <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
    //                 Button
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
