import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import EstatesDetails from "../components/EstatesDetails";
import UserProfile from "../pages/UserProfile";
import PrivateRoute from "../layouts/PrivateRoute";
import ContactUs from "../pages/ContactUs";
import UpdateProfile from "../pages/UpdateProfile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>,
            loader: () => fetch('/estates.json')
        },
        {
          path: "/estates/:id",
          element: <PrivateRoute>
            <EstatesDetails/>
          </PrivateRoute>,
          loader: () => fetch('/estates.json')
        },
        {
            path: "/about",
            element: <About/>,
        },
        {
            path: "/login",
            element: <Login/>,
        },
        {
            path: "/register",
            element: <Register/>,
        },
        {
            path: "/userProfile",
            element: <PrivateRoute>
              <UserProfile/>
            </PrivateRoute>,
        },
        {
            path: "/updateProfile",
            element: <PrivateRoute>
              <UpdateProfile/>
            </PrivateRoute>,
        },
        {
            path: "/contactUs",
            element:<PrivateRoute>
              <ContactUs/>
            </PrivateRoute>,
        },
        {
          path: "*",
          element: <NotFound/>,
        }
      ]
    },
  ]);

export default router;