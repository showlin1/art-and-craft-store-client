import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Page404 from "../NotFound/Page404";
import AddCraftItem from "../AddCraftItem/AddCraftItem";
import ViewDetails from "../ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/artAndCraft')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addCraftItem',
        element: <AddCraftItem></AddCraftItem>
      },
      {
        path: '/craft/:_id',
        element: <ViewDetails></ViewDetails>,
        loader: () => fetch('http://localhost:5000/artAndCraft')
      }
    ]
  },

]);

export default router;