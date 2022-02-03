import "../styles/globals.css";
import { AuthProvider } from "../contexts/auth";
import { HostsProvider } from "../contexts/hosts";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <HostsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </HostsProvider>
    </AuthProvider>
  );
}

export default MyApp;
