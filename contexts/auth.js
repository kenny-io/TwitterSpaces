import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";
import { app } from "../lib/firebase";
import { useRouter } from "next/router";

export const AuthContext = createContext({
  user: null,
  userData: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const twitterProvider = new TwitterAuthProvider();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  const [userData] = useDocumentData(doc(firestore, `users/${user?.uid}`));

  function login() {
    signInWithRedirect(auth, twitterProvider);
    router.push("/app");
  }

  async function logout() {
    await signOut(auth);
    router.push("/");
  }

  useEffect(() => {
    return auth.onAuthStateChanged(async (firebaseUser) => {
      setUser(firebaseUser);
    });
  }, [auth]);

  useEffect(() => {
    getRedirectResult(auth)
      .then(async (result) => {
        if (!result) return;
        const credential = TwitterAuthProvider.credentialFromResult(result);
        fetch("/api/login", {
          method: "POST",
          headers: {
            Authorization: await result.user.getIdToken(),
          },
          body: JSON.stringify({
            accessToken: credential.accessToken,
            secret: credential.secret,
          }),
        });
      })
      .catch((error) => console.error(error));
  });

  return (
    <AuthContext.Provider value={{ user, userData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// accessToken: "1327289510-NS1B1L1D0Hpj25b24pNkxNEQiVAakBOqfgIOeno"
// pendingToken: null
// providerId: "twitter.com"
// secret: "3sEA2ppiD91DvwWo9yb3VzESd9uPXjLJsDws2hosrcwy3"
// signInMethod: "twitter.com"
