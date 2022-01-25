import { useAuth } from "../contexts/auth";
import Link from "next/link";
export default function SpacesList({ spaces, deleteSpace }) {
  const { user } = useAuth();
  // this is a mock data. The actual will be coming from the firebase database
  // It will be passed in as a prop to this component.
  const testData = [
    {
      id: 1,
      title: "The things they don't tell you about space",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      image:
        "https://res.cloudinary.com/kennyy/image/upload/v1642889007/c-d-x-PDX_a_82obo-unsplash_mwscen.jpg",
      createdAt: "2020-01-01",
      updatedAt: "2020-01-01",
      host: "John Doe",
      participantsCount: 10,
    },
  ];
  return (
    <section className="text-white mb-40">
      <div className="px-5 mx-auto">
        <div className="flex flex-wrap -m-4">
          {spaces.map((spaceDoc, i) => {
            const space = spaceDoc.data();
            return (
              <div key={i} className="p-4 sm:w-1/2 md:w-1/3">
                <div>
                  <Link href={`/app/spaces/${spaceDoc.id}`}>
                    <a>
                      <div className="border-2 border-zinc-300 p-6 rounded-xl">
                        <img
                          className="rounded-xl w-full object-cover object-center mb-6"
                          src={testData[0].image}
                          alt="content"
                        />
                        <h2 className="text-xl text-gray-900 font-bold mb-4 font-mulish">
                          {space.title}
                        </h2>
                        <h3 className="tracking-widest text-gray-500 text-xs font-grotesk">
                          Hosted by {user?.displayName} on{" "}
                          {testData[0].updatedAt}
                        </h3>
                        <p className="leading-relaxed text-gray-500 mt-6 font-grotesk">
                          {space.description}
                        </p>
                        <div className="p-2 w-full text-left">
                          <div className="">
                            <div className="">
                              <button>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-7 w-7 mt-3"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="#00ACEE"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </button>
                              <button
                                className="pl-3"
                                type="button"
                                onClick={(e) => {
                                  e.preventDefault();
                                  deleteSpace(spaceDoc.id);
                                }}
                              >
                                <svg
                                  className="h-7 w-7 mt-3"
                                  fill="none"
                                  stroke="#00ACEE"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
          )
        </div>
      </div>
    </section>
  );
}
