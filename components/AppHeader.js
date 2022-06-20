import Link from "next/link";
import { useAuth } from "../contexts/auth";
import Button from "./Button";
export default function AppHeader({ location }) {
  const { login, user, logout } = useAuth();

  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <div className="text-3xl font-squid">
        <h3>
          <Link href="/">
            <a>
              <span className="text-twitterblue">S</span>paces
            </a>
          </Link>
        </h3>
      </div>
      <div className="px-4">
        <Link href="/faq">
          <a
            className="inline-flex underline m-4
          rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-100 text-base mt-4 md:mt-0"
          >
            FAQ
          </a>
        </Link>
        {user && location === "/app" ? (
          <Button title="Logout" click={logout} />
        ) : location !== "/app" && user ? (
          <Link href="/app">
            <a
              className="inline-flex items-center border-2 border-twitterblue
          rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-100 text-base mt-4 md:mt-0"
            >
              Dashboard
            </a>
          </Link>
        ) : (
          <Button title="Upload a recording" click={login} />
        )}
      </div>
    </header>
  );
}
