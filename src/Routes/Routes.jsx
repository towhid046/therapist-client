import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import HomePage from "./../pages/HomePage/HomePage";
import LoginPage from "./../pages/LoginPage/LoginPage";
import RegistrationPage from "./../pages/RegistrationPage/RegistrationPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Services from "../pages/Services/Services";
import ProtectedRoute from "./ProtectedRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/services",
        element: (
          <ProtectedRoute>
            <Services />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routes;
