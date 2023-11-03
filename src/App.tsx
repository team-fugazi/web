// Auth0
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { Routes, Route, useNavigate } from "react-router-dom";

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
import Community from "./pages/community";
import ReportDetail from "./pages/report-detail";

function App() {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState | undefined) => {
    console.log(appState);
    console.log("hello");
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
        redirect_uri: "http://localhost:5173/",
        audience: "https://dev-r2bppovsrgoxsk4m.us.auth0.com/api/v2/",
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
        <Route path="/prep" element={<AuthLayoutComponent />} />
      </Routes>
    </Auth0Provider>
  );
}

export default App;
