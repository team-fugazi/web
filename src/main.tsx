import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {Home} from "./Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

// Auth0
import { Auth0Provider } from "@auth0/auth0-react";

// Environment variables
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

const router = createBrowserRouter([
	{
		path: "/",
		element: <App></App>,
	},
	{
		path: "/home",
		element: <Home></Home>,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<RouterProvider router={router} />
		</Auth0Provider>
	</React.StrictMode>
);
