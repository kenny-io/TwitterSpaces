import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  signOut,
  signInWithRedirect,
  getRedirectResult,
  TwitterAuthProvider,
} from "firebase/auth";
import { app } from "../lib/firebase";

export const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

const twitterProvider = new TwitterAuthProvider();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  function login() {
    signInWithRedirect(auth, twitterProvider);
  }

  async function logout() {
    await signOut(auth);
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
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// accessToken: "1327289510-NS1B1L1D0Hpj25b24pNkxNEQiVAakBOqfgIOeno"
// pendingToken: null
// providerId: "twitter.com"
// secret: "3sEA2ppiD91DvwWo9yb3VzESd9uPXjLJsDws2hosrcwy3"
// signInMethod: "twitter.com"
