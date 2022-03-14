import NetlifyLogo from "./NetlifyLogo";
import Link from "next/link";

export default function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="py-20 2xl:py-40 bg-slate-100 font-grotesk">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 pb-24 mb-16 border-b border-gray-400">
          <div className="w-full lg:w-2/5 px-4 mb-16 lg:mb-0">
            <h3 className="text-xl font-squid ">
              <span className="text-twitterblue">S</span>paces
            </h3>
            <h2 className="max-w-sm mt-8 mb-6 text-3xl  font-bold font-heading font-mulish">
              Our sponsors
            </h2>
            <p className="mb-8 ">Thank you for making this possible.</p>
            <div className="py-4">
              <a
                className="inline-block mb-4 sm:mb-0 sm:mr-4 transition duration-200"
                href="https://www.netlify.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <NetlifyLogo />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-3/5 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                <ul className="text-lg">
                  <li className="mb-6">
                    <h3 className="text-xl font-mulish text-gray-800">
                      Project
                    </h3>
                  </li>
                  <li className="mb-6">
                    <a
                      className=" hover:text-gray-800"
                      href="https://github.com/kenny-io/TwitterSpaces"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16 lg:mb-0">
                <ul className="text-lg">
                  <li className="mb-6">
                    <h3 className="text-xl font-mulish text-gray-800">
                      Creators
                    </h3>
                  </li>
                  <li className="mb-6">
                    <a
                      className=" hover:text-gray-800"
                      href="https://www.twitter.com/kenny_io"
                    >
                      Kenny
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      className=" hover:text-gray-800"
                      href="https://twitter.com/alex__luong"
                    >
                      Alex
                    </a>
                  </li>
                  <li className="mb-6">
                    <a
                      className=" hover:text-gray-800"
                      href="https://www.twitter.com/urluchy"
                    >
                      Ursula
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-1/3 px-4">
                <ul className="text-lg">
                  <li className="mb-6">
                    <h3 className="text-xl text-gray-800 font-mulish">
                      Resources
                    </h3>
                  </li>
                  <li className="mb-6">
                    <a
                      className=" hover:text-gray-800"
                      href="https://github.com/kenny-io/TwitterSpaces/blob/main/README.md#contributing"
                    >
                      Collaborate
                    </a>
                  </li>
                  <li className="mb-6">
                    <Link href="/faq">
                      <a className=" hover:text-gray-800">FAQs</a>
                    </Link>
                  </li>
                  <li className="mb-6">
                    <a
                      className=" hover:text-gray-800"
                      href="https://github.com/kenny-io/TwitterSpaces/issues"
                    >
                      Talk to us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between">
          <p className="text-lg  md:mb-0">
            &copy; {currentYear} Spaces. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
