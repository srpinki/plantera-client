import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddPlant from "../Pages/AddPlant";
import PlantsDetails from "../Components/PlantsDetails";
import AllPlants from "../Pages/allPlants";
import AuthLayouts from "../AuthLayouts/AuthLayouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyPlants from "../Pages/MyPlants";
import Error from "../Pages/Error";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import Loading from "../Components/Loading/Loading";
import UpdatePlants from "../Pages/UpdatePlants";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('https://plant-area-server-side.vercel.app/plants'),
                Component: Home
            },
            {
                path: "/add-plant",
                element: <PrivateRoute><AddPlant></AddPlant></PrivateRoute>
            },
            {
                path: "/plants-details/:id",
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('https://plant-area-server-side.vercel.app/plants'),
                element: <PrivateRoute><PlantsDetails></PlantsDetails></PrivateRoute>  
            },
            {
                path: "/all-plants",
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('https://plant-area-server-side.vercel.app/plants'),
                Component: AllPlants
            }
        ]
    },
    {
        path: "/auth",
        Component: AuthLayouts,
        children: [
            {
                path: "/auth/login",
                Component: Login
            },
            {
                path: "/auth/register",
                Component: Register
            },
            {
                path: "/auth/my-plants",
                element: <PrivateRoute><MyPlants></MyPlants></PrivateRoute>
            },
            {
                path: "/auth/update-plants/:id",
                loader: () => fetch('https://plant-area-server-side.vercel.app/plants'),
                Component: UpdatePlants
            }
        ]
    },
      {
      path: "/*",
      Component: Error
    }
])
export default router;