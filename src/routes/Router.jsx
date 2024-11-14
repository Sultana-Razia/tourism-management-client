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




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/touristSpot')
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
                loader: () => fetch(`http://localhost:5000/touristSpot`)
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>,
                loader: () => fetch('http://localhost:5000/touristSpot')
            },
            {
                path: '/touristSpot/:id',
                element: <PrivateRoute><TouristSpotDetails></TouristSpotDetails></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/touristSpot')
            },
            {
                path: '/myList',
                element: <PrivateRoute><MyList></MyList></PrivateRoute>,
                // loader: () => fetch('http://localhost:5000/touristSpot')
            }
        ]
    },
]);


export default router;