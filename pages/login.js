import { async } from "@firebase/util";
import { useAuth } from "../contexts/auth";

export default function LoginPage() {
  const { user, login, logout } = useAuth();
  return (
    <div>
      {user ? (
        <>
          <h1 classNameName="text-5xl font-bold font-heading text-gray-900 font-mulish">
            We should auto redirect to /app when user exists
          </h1>
          <pre>{JSON.stringify(user, null, 4)}</pre>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <section className="py-20 2xl:py-40 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                  <div className="max-w-md">
                    <span className="text-lg text-blue-500 font-bold font-grotesk">
                      Register
                    </span>
                    <h2 className="mt-8 mb-12 text-5xl font-bold font-heading text-gray-900 font-mulish">
                      Sooo, we are going to need you to login first
                    </h2>
                    <p className="text-lg text-gray-800 italic font-grotesk">
                      <span>
                        Not to worry tho, we are not doing the lengthy email and
                        password thingy.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="px-6 lg:px-20 py-12 lg:py-24 bg-slate-100 rounded-lg">
                    <form action="#">
                      <button
                        onClick={login}
                        className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200"
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
