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
    // <div class="max-w-sm rounded overflow-hidden m-4 shadow-sm">
    //   <CloudinaryImage
    //     img={getImage(space.heroId)}
    //     alt="content"
    //     className="mb-6 rounded-xl w-full aspect-[3/2]"
    //   />
    //   <div class="px-6 py-4">
    //     <div class="font-bold text-xl mb-2"> {space.title} </div>
    //     <p class="text-gray-700 text-base">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    //       quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    //       nihil.
    //     </p>
    //   </div>
    // </div>
  );
}
