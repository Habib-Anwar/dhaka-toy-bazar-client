import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: "blog",
          element: <Blog></Blog>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>
        },
        {
          path: "addtoys",
          element: <AddToys></AddToys>,
          loader: () => fetch('https://dhaka-toy-bazar-server.vercel.app/bazar')
        },
        {
          path: "alltoys",
          element: <AllToys></AllToys>
        }
      ]
    },
  ]);

  export default router;