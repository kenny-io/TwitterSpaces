import { useState, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const HostsContext = createContext(null);

export function HostsProvider({ children }) {
  const [hosts, setHosts] = useState({});

  const setHost = useCallback((hostUsername, value) => {
    setHosts((hosts) => ({ ...hosts, [hostUsername]: value }));
  }, []);

  const fetchHost = useCallback(
    async (hostUsername) => {
      if (!hostUsername) return;
      setHost(hostUsername, { status: "loading", error: null, data: null });
      try {
        const hostQuerySnap = await getDocs(
          query(
            collection(getFirestore(), "users"),
            where("username", "==", hostUsername)
          )
        );
        if (hostQuerySnap.docs.length === 0) {
          setHost(hostUsername, { status: "done", error: null, data: null });
          return;
        }
        const hostDoc = hostQuerySnap.docs[0];
        const spacesSnap = await getDocs(
          collection(getFirestore(), `users/${hostDoc.id}/spaces`)
        );
        const spaces = spacesSnap.docs.map((spaceDoc) => spaceDoc.data());
        setHost(hostUsername, {
          status: "done",
          error: null,
          data: { id: hostDoc.id, host: hostDoc.data(), spaces },
        });
      } catch (error) {
        setHost(hostUsername, { status: "error", error: error, data: null });
      }
    },
    [setHost]
  );

  return (
    <HostsContext.Provider value={{ hosts, fetchHost }}>
      {children}
    </HostsContext.Provider>
  );
}

export const useFetchHost = () =>
  useContextSelector(HostsContext, (v) => v.fetchHost);

export const useHost = (hostUsername) =>
  useContextSelector(HostsContext, (v) => v.hosts[hostUsername] || {});
