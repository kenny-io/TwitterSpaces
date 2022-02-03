import Link from "next/link";

const DEFAULT_BANNER =
  "https://res.cloudinary.com/kennyy/image/upload/v1642889007/c-d-x-PDX_a_82obo-unsplash_mwscen.jpg";

export function SpaceCard({ href, space, children }) {
  return (
    <div className="p-4 sm:w-1/2 md:w-1/3">
      <Link href={href}>
        <a className="block p-6 border-2 border-zinc-300 rounded-xl">
          <img
            className="object-cover object-center w-full mb-6 rounded-xl"
            src={space.banner || DEFAULT_BANNER}
            alt="content"
          />
          <h2 className="mb-4 text-xl font-bold text-gray-900 font-mulish">
            {space.title}
          </h2>
          {children}
        </a>
      </Link>
    </div>
  );
}
