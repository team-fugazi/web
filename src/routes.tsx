import { createBrowserRouter} from "react-router-dom";

// Pages
import Home from "./pages/home";
import Start from "./pages/start";

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
    path: "*", // Catch-all route for 404
    element: <>404</>,
  },
]);

export default Router;