import { useAuth0 } from "@auth0/auth0-react";
import { Logout } from "./auth/Logout";
import { Profile } from "./auth/Profile";
import { useState } from "react";
export const Home = () => {
	const { isAuthenticated, loginWithRedirect, user } = useAuth0();
	const [isOpen, setIsOpen] = useState(false);

	return <div>Welcome to Fugazi {user?.name}</div>;
};
