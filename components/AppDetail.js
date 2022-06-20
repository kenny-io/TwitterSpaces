import NetlifyLogo from "./NetlifyLogo";
import CloudinaryLogo from "./CloudinaryLogo";

export default function AppDetail() {
  return (
    <section className="py-20 pb-0 px-4 mx-auto font-grotesk">
      <div className="">
        <div className="flex flex-wrap -mx-4 pb-24">
          <div className="w-full lg:w-2/5 px-4 mb-8 lg:mb-0">
            <h3 className="text-xl font-squid ">
              <span className="text-twitterblue">S</span>paces
            </h3>
            <h2 className="max-w-sm mt-8 mb-6 text-2xl font-heading font-mulish">
              Sponsors
            </h2>
            <p className="mb-4 ">Thank you for making this possible.</p>
            <div className="py-4">
              <a
                className="inline-block mb-4 sm:mb-0 sm:mr-4 transition duration-200"
                href="https://www.netlify.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <NetlifyLogo />
              </a>
              <a
                className="inline-block mb-4 sm:mb-0 sm:mr-4 transition duration-200"
                href="https://www.cloudinary.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <CloudinaryLogo />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
