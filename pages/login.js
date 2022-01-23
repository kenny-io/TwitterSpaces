import { async } from "@firebase/util";
import { useAuth } from "../contexts/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LoginPage() {
  const { user, login, logout } = useAuth();

  const router = useRouter();

  return (
    <div>
      {user ? (
        <>
          <h1 className="text-5xl font-bold font-heading text-gray-900 font-mulish">
            We should auto redirect to /app when user exists
          </h1>
          <pre>{JSON.stringify(user, null, 4)}</pre>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <section class="py-20 2xl:py-40 bg-white overflow-hidden">
          <div class="container px-4 mx-auto">
            <div class="max-w-5xl mx-auto">
              <div class="flex flex-wrap items-center -mx-4">
                <div class="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                  <div class="max-w-md">
                    <span class="text-lg text-blue-500 font-bold font-grotesk">
                      Register
                    </span>
                    <h2 class="mt-8 mb-12 text-5xl font-bold font-heading text-gray-900 font-mulish">
                      Sooo, we're gonna need you to login first
                    </h2>
                    <p class="text-lg text-gray-800 italic font-grotesk">
                      <span>
                        Don't worry tho, we are not doing the lengthy email and
                        password thingy.
                      </span>
                      {/* <span class="text-white">the lazy dog.</span> */}
                    </p>
                  </div>
                </div>
                <div class="w-full lg:w-1/2 px-4">
                  <div class="px-6 lg:px-20 py-12 lg:py-24 bg-slate-100 rounded-lg">
                    <form action="#">
                      <button
                        onClick={login}
                        class="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200"
                      >
                        Login with Twitter
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
