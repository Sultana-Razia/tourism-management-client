import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import NotFound from "../pages/NotFound/NotFound";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";
import TouristSpotDetails from "../pages/TouristSpotDetails/TouristSpotDetails";
import PrivateRoute from "./PrivateRoute";
import MyList from "../pages/MyList/MyList";
import UpdateTouristSpot from "../components/UpdateTouristSpot";
import Indonesia from "../components/Country/Indonesia";
import Malaysia from "../components/Country/Malaysia";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://tourism-management-server-flax.vercel.app/touristSpot')
            },
            {
                path: '/country/:country',
                element: <Indonesia></Indonesia>,
                loader: () => fetch('https://tourism-management-server-flax.vercel.app/touristSpot')
            },
            {
                path: '/malaysia',
                element: <Malaysia></Malaysia>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addTouristSpot',
                element: <PrivateRoute><AddTouristSpot></AddTouristSpot></PrivateRoute>
            },
            {
                path: '/updateTouristSpot/:id',
                element: <PrivateRoute><UpdateTouristSpot></UpdateTouristSpot></PrivateRoute>,
                loader: () => fetch(`https://tourism-management-server-flax.vercel.app/touristSpot`)
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>,
                loader: () => fetch('https://tourism-management-server-flax.vercel.app/touristSpot')
            },
            {
                path: '/touristSpot/:id',
                element: <PrivateRoute><TouristSpotDetails></TouristSpotDetails></PrivateRoute>,
                loader: () => fetch('https://tourism-management-server-flax.vercel.app/touristSpot')
            },
            {
                path: '/myList',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                // loader: () => fetch('https://tourism-management-server-flax.vercel.app/touristSpot')
            }
        ]
    },
]);


export default router;