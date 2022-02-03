import { useAuth } from "../contexts/auth";

export default function LogoutPage() {
  const { logout } = useAuth();
  return (
    <button
      type="button"
      onClick={logout}
      className="px-4 py-2 border border-black"
    >
      Logout
    </button>
  );
}
