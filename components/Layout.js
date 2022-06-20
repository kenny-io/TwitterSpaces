import AppHeader from "./AppHeader";
// import AppFooter from "./AppDetail";
import PrimaryFooter from "./AppFooterPrimary";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const router = useRouter();
  const location = router.pathname;

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader location={location} />
      <main className="flex-1">{children}</main>
      <PrimaryFooter />
    </div>
  );
}
