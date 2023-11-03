// WARN: This file is not in use. It is a test file for react-router-dom v6
import { createBrowserRouter } from "react-router-dom";

// Route Protection
// import { ProtectedRoute } from "./features/auth/ProtectedRoute";

// Pages
import Home from "./pages/home";
import Reports from "./pages/reports";
import ReportDetail from "./pages/report-detail";
import AuthPage from "./pages/auth";
import Community from "./pages/community";

const Router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/prep",
    element: <ReportDetail />,
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/",
    element: <Home />,
  }
]);

export default Router;
