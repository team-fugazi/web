// Auth0
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Environment variables
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

// Pages
import Home from "@/pages/home";
import Reports from "@/pages/reports";
import AuthPage from "@/pages/auth";

// Features
import { ProtectedRoute } from "./features/auth/ProtectedRoute";
import AuthLayoutComponent from "./features/layout/AuthLayout";

function App() {
  return (
    <BrowserRouter>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Routes>
          <Route path="/" element={<ProtectedRoute component={Home} />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/reports"
            element={<ProtectedRoute component={Reports} />}
          />
          <Route path="/test" element={<AuthLayoutComponent />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  );
}

export default App;
