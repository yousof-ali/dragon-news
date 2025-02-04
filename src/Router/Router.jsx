
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from '../Pages/Home/Home'
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Details from "../Pages/Details/Details";
import Privaterouter from "./Privaterouter";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch('news.json')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/details/:id',
          element:<Privaterouter><Details></Details></Privaterouter>,
          loader:()=>fetch('news.json')
        }
      ]
    },
  ]);

export default router;