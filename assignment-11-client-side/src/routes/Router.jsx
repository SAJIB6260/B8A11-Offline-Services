import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Registation from "../pages/Registation";
import AllServices from "../pages/AllServices";
import MyServices from "../pages/MyServices";
import AddServices from "../pages/AddServices";
import MyBookings from "../pages/MyBookings";
import MyPendingWorks from "../pages/MyPendingWorks";
import ServiceDetails from "../pages/ServiceDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivateRouter from "./PrivateRouter";
import UpdateService from "../pages/UpdateService";
import ContactUs from "../components/ContactUs";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://assignment-11-server-side-five.vercel.app/allService')
            },
            {
                path: "/allService",
                element: <AllServices></AllServices>,
                loader: () => fetch('https://assignment-11-server-side-five.vercel.app/allService')
            },
            {
                path: "/allService/:id",
                element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`https://assignment-11-server-side-five.vercel.app/allService/${params.id}`)
            },
            {
                path: "/myServices/provider/:email",
                element: <PrivateRouter><MyServices></MyServices></PrivateRouter>,
                loader: ({ params }) => fetch(`https://assignment-11-server-side-five.vercel.app/allService/provider/${params.email}`)
            },
            {
                path: "/addServices",
                element: <PrivateRouter><AddServices></AddServices></PrivateRouter>,
            },
            {
                path: "/myBookings",
                element: <PrivateRouter><MyBookings></MyBookings></PrivateRouter>,
            },
            {
                path: "/myPendingWorks",
                element: <MyPendingWorks></MyPendingWorks>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/registation",
                element: <Registation></Registation>
            },
            {
                path: "/updateService/:id",
                element: <PrivateRouter><UpdateService></UpdateService></PrivateRouter>,
                loader: ({ params }) => fetch(`https://assignment-11-server-side-five.vercel.app/allService/${params.id}`)
            },
            {
                path: "/ContactUs",
                element: <ContactUs></ContactUs>
            }
        ]
    }
])

export default Router;