// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// Global Components
import { Login } from "./auth/Login";

import { Home } from "./Home";
function App() {
	// Authentication
	const { isLoading, error, isAuthenticated, user } = useAuth0();

	if (isLoading) return <div>Loading...</div>;
	if (error) {
		console.log(error);
		console.log(user);
		return <div>Oops... {error.message}</div>;
	}

	return isAuthenticated ? (
		<Home></Home>
	) : (
		<section className="bg-gray-900 text-white">
			<div className="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
				<div className="mx-auto max-w-3xl text-center">
					<h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
						Detect AI generated text on Reddit
					</h1>
					<p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>
					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<a className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
							<Login />
						</a>
						<a className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default App;
