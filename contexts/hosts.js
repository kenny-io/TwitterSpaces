import { useState, useCallback } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { getHostDocByUsername } from "../utils/getHostDocByUsername";
import { getSpacesValueByHostId } from "../utils/getSpacesValueByHostId";

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
        const hostDoc = await getHostDocByUsername(hostUsername);
        if (!hostDoc) {
          setHost(hostUsername, { status: "done", error: null, data: null });
          return;
        }
        const spaces = await getSpacesValueByHostId(hostDoc.id);
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
