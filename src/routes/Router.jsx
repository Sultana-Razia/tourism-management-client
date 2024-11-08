import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";
import NotFound from "../pages/NotFound/NotFound";
import AllTouristSpot from "../pages/AllTouristSpot/AllTouristSpot";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <NotFound></NotFound>,
        children: [
            {
                path: '/',
                element: <Home></Home>
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
                element: <AddTouristSpot></AddTouristSpot>
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>,
                loader: () => fetch('http://localhost:5000/touristSpot')
            },
        ]
    },
]);


export default router;