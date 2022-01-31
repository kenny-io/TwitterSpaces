import { createTwitterPhotoUrl } from "../utils/createTwitterPhotoUrl";

export function HostHeader({ host, children }) {
  return (
    <div className="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row">
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl font-mulish">
          {host.name}
        </h1>
        <h2 className="mb-8 text-sm tracking-widest text-gray-500 title-font font-grotesk">
          @{host.username}
        </h2>
        <p className="mb-8 leading-relaxed font-grotesk">{host.bio}</p>
        {children}
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <img
          src={createTwitterPhotoUrl(host.avatar)}
          format="webp"
          className="max-w-xs shadow-2xl md:max-w-lg rounded-xl opacity-95 hover:opacity-80 "
          sizes="sm:max-w-xs md:100vw lg:800px"
          alt="twitter profile image"
          width="305px"
          height="305px"
        />
      </div>
    </div>
  );
}
