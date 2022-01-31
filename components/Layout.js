import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />
      <main className="flex-1">{children}</main>
      <AppFooter />
    </div>
  );
}
