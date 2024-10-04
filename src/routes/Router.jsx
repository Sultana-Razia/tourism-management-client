import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTouristSpot from "../pages/AddTouristSpot/AddTouristSpot";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement:
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
            }
        ]
    },
]);


export default router;