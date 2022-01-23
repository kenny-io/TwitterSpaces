import { useAuth } from "../contexts/auth";

export default function LoginPage() {
  const { user, login, logout } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <pre>{JSON.stringify(user, null, 4)}</pre>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login with Twitter</button>
      )}
    </div>
  );
}
