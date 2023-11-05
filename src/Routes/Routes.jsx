import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetail from "../Pages/RoomDetails/RoomDetail";
    
   
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/Rooms',
          element:<Rooms></Rooms>,
          loader:()=>fetch('http://localhost:5000/rooms')
        },
        {
          path:'/RoomDetails/:id',
          element:<RoomDetail></RoomDetail>,
          loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
        }
      ]
    },
  ]);
  

export default router;