import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default function Layout({ children }) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
}
