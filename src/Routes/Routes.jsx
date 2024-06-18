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
import UserComment from "../Pages/UserComment/UserComment";
import Gallery from "../Pages/Gallery/Gallery";
import AboutUs from "../Pages/AboutUs/AboutUs";
import UpdateBooking from "../Pages/UpdateBooking/UpdateBooking";
import AllGalleryItems from "../Pages/Gallery/AllGalleryItems";
import GalleryRooms from "../Pages/Gallery/GalleryRooms";
import GalleryResturant from "../Pages/Gallery/GalleryResturant";
import GalleryOthers from "../Pages/Gallery/GalleryOthers";

    
   
  

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
          loader:()=>fetch('https://stay-nest-server-side.vercel.app/roomsCount')
        },
        {
          path:'/RoomDetails/:id',
          element:<RoomDetail></RoomDetail>,
          loader:({params})=>fetch(`https://stay-nest-server-side.vercel.app/rooms/${params.id}`)
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
        },
        {
          path:'/user-comment/:id',
          element:<UserComment></UserComment>,
          loader:({params})=>fetch(`https://stay-nest-server-side.vercel.app/rooms/${params.id}`)
        },
        {
          path:'/gallery',
          element:<Gallery></Gallery>,
          children: [
            {
              path: '',
              element: <AllGalleryItems></AllGalleryItems>,
              loader:()=>fetch('https://stay-nest-server-side.vercel.app/rooms')
            },
            {
              path:'rooms',
              element:<GalleryRooms></GalleryRooms>
            },
            {
              path:'resturant',
              element:<GalleryResturant></GalleryResturant>
            },
            {
              path:'others',
              element:<GalleryOthers></GalleryOthers>
            }
          ],
        },
        {
          path:'/about-us',
          element:<AboutUs></AboutUs>,
          loader:()=>fetch('https://stay-nest-server-side.vercel.app/about-us')

        },
        {
          path: '/update-date/:id',
          element:<UpdateBooking></UpdateBooking>
          
        }
        
        
      ]
    },
  ]);
  

export default router;
