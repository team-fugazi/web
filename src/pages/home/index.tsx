import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Global Components
// import { Logout } from "@/auth/Logout";
// import { Profile } from "@/auth/Profile";

// Features
import { Layout } from "../../features/layout";
import { BigStats } from "../../features/stats/components/BigStats";
import { InputTextArea } from "../..//features/detection/components/InputTextArea";
const Home = () => {
	const { isAuthenticated, user } = useAuth0();
	const [isOpen] = useState(false);

	return (
		<Layout>
			{isAuthenticated ? (
				<>
					<div>
						<div className="text-left mt-10 ml-5 text-lg font-bold">
							<div>Welcome to Fugazi, {user?.name}</div>
						</div>
						<div className="flex flex-col">
							<div className="m-5">
								<InputTextArea />
							</div>
							<div>
								<BigStats />
							</div>
						</div>
					</div>
				</>
			) : (
				<div>Not logged in</div>
			)}

			{isOpen && <>Open</>}
		</Layout>
	);
};

export default Home;
