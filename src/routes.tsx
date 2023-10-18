import { createBrowserRouter } from "react-router-dom";

// Route Protection
import { ProtectedRoute } from "./features/auth/ProtectedRoute";

// Pages
import Home from "./pages/home";
import Reports from "./pages/reports";
import AuthPage from "./pages/auth";

const Router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthPage />,
  },
  {
    path: "/",
    element: <ProtectedRoute component={Home} />,
  },
  {
    path: "/reports",
    element: <ProtectedRoute component={Reports} />,
  },
  {
    path: "/reports/:id",
    element: <ProtectedRoute component={Reports} />,
  },
  {
    path: "*", // Catch-all route for 404
    element: <>404</>,
  },
]);

export default Router;
