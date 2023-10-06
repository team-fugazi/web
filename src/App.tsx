import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";

// Global Components
import { Login } from "./auth/Login";
import { Logout } from "./auth/Logout";
import { Profile } from "./auth/Profile";

function App() {
  const [count, setCount] = useState(0);

  // Authentication
  const { isLoading, error, isAuthenticated, user } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
    console.log(user);
    return <div>Oops... {error.message}</div>;
  }

  return (
    <>
      <div className="bg-blue-900">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {isAuthenticated && <Profile />}

      {isAuthenticated ? <Logout /> : <Login />}
    </>
  );
}

export default App;
