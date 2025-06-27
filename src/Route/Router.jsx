import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import AddPlant from "../Pages/AddPlant";
import PlantsDetails from "../Components/PlantsDetails";
import AllPlants from "../Pages/allPlants";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyPlants from "../Pages/MyPlants";
import Error from "../Pages/Error";
import PrivateRoute from "../AuthProvider/PrivateRoute";
import Loading from "../Components/Loading/Loading";
import UpdatePlants from "../Pages/UpdatePlants";
import AuthLayouts from "../Layouts/AuthLayouts/AuthLayouts";
import WateringGuide from "../Pages/WateringGuide ";
import FertilizingGuide from "../Pages/FertilizingGuide";
import SeasonalCare from "../Pages/SeasonalCare";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsOfService from "../Pages/TermsOfService";
import DashboardLayout from "../Layouts/AuthLayouts/DashboardLayout";
import DashBoardOverview from "../Layouts/AuthLayouts/DashBoardOverview";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("https://plant-area-server-side.vercel.app/plants"),
        Component: Home,
      },
      {
        path: "/add-plant",
        element: (
          <PrivateRoute>
            <AddPlant></AddPlant>
          </PrivateRoute>
        ),
      },
      {
        path: "/plants-details/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("https://plant-area-server-side.vercel.app/plants"),
        element: (
          <PrivateRoute>
            <PlantsDetails></PlantsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/all-plants",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("https://plant-area-server-side.vercel.app/plants"),
        Component: AllPlants,
      },
      {
        path: "/watering-guide",
        Component: WateringGuide,
      },
      {
        path: "/fertilizing-tips",
        Component: FertilizingGuide,
      },
      {
        path: "/seasonal-care",
        Component: SeasonalCare,
      },
      {
        path: "/privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "/terms-services",
        Component: TermsOfService,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayouts,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "dashboard",
        Component: DashboardLayout,
        children: [
          {
            path: 'overview',
            element: <PrivateRoute><DashBoardOverview></DashBoardOverview></PrivateRoute>
          },
          {
            path: "add-plant",
            element: (
              <PrivateRoute>
                <AddPlant></AddPlant>
              </PrivateRoute>
            ),
          },
          {
            path: "my-plants",
            element: (
              <PrivateRoute>
                <MyPlants></MyPlants>
              </PrivateRoute>
            ),
          },
          {
            path: "update-plants/:id",
            loader: () =>
              fetch("https://plant-area-server-side.vercel.app/plants"),
            Component: UpdatePlants,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
export default router;
