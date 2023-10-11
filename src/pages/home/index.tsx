import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Global Components
// import { Logout } from "@/auth/Logout";
// import { Profile } from "@/auth/Profile";

// Features
import { Layout } from "@/features/layout";

const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const [isOpen] = useState(false);

  return (
    <Layout>
      {isAuthenticated ? (
        <div>Welcome to Fugazi {user?.name}</div>
      ) : (
        <div>Not logged in</div>
      )}

      {isOpen && <>Open</>}
    </Layout>
  );
};

export default Home;
