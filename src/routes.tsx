import { createBrowserRouter} from "react-router-dom";

// Pages
import Home from "./pages/home";
import Start from "./pages/start";
import Reports from "./pages/reports";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/auth",
    element: <Start/>,
  },
  {
    path: "/reports",
    element: <Reports/>,
  },
  {
    path: "/reports/:id",
    element: <Reports/>,
  },
  {
    path: "*", // Catch-all route for 404
    element: <>404</>,
  },
]);

export default Router;