import {createBrowserRouter} from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Pages/Home/Home";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetail from "../Pages/RoomDetails/RoomDetail";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../SharedComponent/PrivateRoute";
import MyBookings from "../Pages/MyBookings/MyBookings";
    
   
  

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
          loader:()=>fetch('http://localhost:5000/roomsCount')
        },
        {
          path:'/RoomDetails/:id',
          element:<PrivateRoute><RoomDetail></RoomDetail></PrivateRoute>,
          loader:({params})=>fetch(`http://localhost:5000/rooms/${params.id}`)
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'/my-bookings',
          element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>
        }
      ]
    },
  ]);
  

export default router;