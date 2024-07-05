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
import UpdateArtAndCraft from "../UpdatePage/UpdateArtAndCraft";
import AllArtAndCraftItems from "../AllArtAndCraftItems/AllArtAndCraftItems";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://art-and-craft-store-server-five.vercel.app/artAndCraft')
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
        loader: () => fetch('https://art-and-craft-store-server-five.vercel.app/artAndCraft')
      },
      {
        path:'/myArtAndCraft',
        element:<PrivateRoute><MyArtAndCraftList></MyArtAndCraftList></PrivateRoute>,
        loader: () => fetch('https://art-and-craft-store-server-five.vercel.app/artAndCraft')
      },
      {
        path:'/updateArtAndCraft/:_id',
        element:<PrivateRoute><UpdateArtAndCraft></UpdateArtAndCraft></PrivateRoute>,
        loader: () => fetch('https://art-and-craft-store-server-five.vercel.app/artAndCraft')
      },
      {
        path:'/allArtAndCraftItems',
        element:<AllArtAndCraftItems></AllArtAndCraftItems>,
        loader: () => fetch('https://art-and-craft-store-server-five.vercel.app/artAndCraft')
      }
    ]
  },

]);

export default router;