import Link from "next/link";
import { CloudinaryImage } from "../components/CloudinaryImage";
import { getImage } from "../lib/cloudinary";

export function SpaceCard({ href, space, children }) {
  return (
    <div className="p-4 sm:w-1/2 md:w-1/3">
      <Link href={href}>
        <a className="block border-2 border-zinc-100 rounded-xl">
          <CloudinaryImage
            img={getImage(space.heroId)}
            alt="content"
            className="mb-6 rounded-xl w-full aspect-[3/2]"
          />
          <div className="p-6">
            <h2 className="mb-4 text-xl font-bold text-gray-900 font-mulish">
              {space.title}
            </h2>
            {children}
          </div>
        </a>
      </Link>
    </div>
  );
}
