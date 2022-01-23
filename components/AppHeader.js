import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../contexts/auth";
export default function AppHeader() {
  const { login, user } = useAuth();
  const router = useRouter();
  return (
    <header className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
      <div className="text-xl font-squid">
        <h3>
          <Link href="/">
            <a>
              <span className="text-twitterblue">S</span>paces
            </a>
          </Link>
        </h3>
      </div>
      <div>
        {user ? (
          <Link href="/app">
            <a
              className="inline-flex items-center border-2 border-twitterblue 
          rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-100 text-base mt-4 md:mt-0"
            >
              Dashboard
            </a>
          </Link>
        ) : (
          <button
            onClick={login}
            className="inline-flex items-center border-2 border-twitterblue rounded-lg py-1 px-3 focus:outline-none hover:bg-gray-100 text-base mt-4 md:mt-0"
          ></button>
        )}
      </div>
    </header>
  );
}
