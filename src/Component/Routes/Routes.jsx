import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Page404 from "../NotFound/Page404";
import AddCraftItem from "../AddCraftItem/AddCraftItem";
import ViewDetails from "../ViewDetails/ViewDetails";
import PrivateRoute from "./PrivateRoute";
import MyArtAndCraftList from "../MyArtAndCraftList/MyArtAndCraftList";

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
        element: <PrivateRoute><AddCraftItem></AddCraftItem></PrivateRoute>
      },
      {
        path: '/craft/:_id',
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/artAndCraft')
      },
      {
        path:'/myArtAndCraft',
        element:<PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/artAndCraft')
      }
    ]
  },

]);

export default router;