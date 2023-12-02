// Auth0
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Environment variables
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

// Pages
import Home from "@/pages/home";
import Reports from "@/pages/reports";
import AuthPage from "@/pages/auth";
import Moderator from "@/pages/moderator";

// Features
import { ProtectedRoute } from "./features/auth/ProtectedRoute";
import AuthLayoutComponent from "./features/layout/AuthLayout";
import Community from "./pages/community";
import ReportDetail from "./pages/report-detail";

// environment variables
const AUTH0_REDIRECT = import.meta.env.VITE_AUTH0_REDIRECT;
const AUTH_AUDIENCE = import.meta.env.VITE_AUTH0_AUDIENCE;

function App() {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState | undefined) => {
    console.log(appState);
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      cacheLocation={"localstorage"}
      useRefreshTokens={true}
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: AUTH0_REDIRECT,
        audience: AUTH_AUDIENCE,
      }}
    >
      <Routes>
        <Route path="/" element={<ProtectedRoute component={Home} />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route
          path="/reports"
          element={<ProtectedRoute component={Reports} />}
        />
        <Route
          path="/reports/:reportId"
          element={<ProtectedRoute component={ReportDetail} />}
        />
        <Route
          path="/community"
          element={<ProtectedRoute component={Community} />}
        />
        <Route
          path="/moderator"
          element={<ProtectedRoute component={Moderator} />}
        />
        <Route path="/prep" element={<AuthLayoutComponent />} />
        <Route path="/test" element={<p>Test</p>} />
      </Routes>

      {/** React Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Auth0Provider>
  );
}

export default App;
