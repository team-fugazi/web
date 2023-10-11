import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() =>
        logout({
          logoutParams: { returnTo: window.location.origin },
        })
      }
      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-4 py-2 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
      type="button"
    >
      <span className="text-sm font-medium">Logout</span>
    </button>
  );
};