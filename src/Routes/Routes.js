import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import About from "../pages/About/About";
import ContactUs from "../pages/ContactUs/ContactUs";
import Home from "../pages/Home/Home/Home";
import Reviews from "../pages/Reviews/Reviews/Reviews";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/reviews',
                element: <Reviews />
            },
            {
                path:'/contact',
                element: <ContactUs />
            },
            {
                path:'/Login',
                element: <Login />
            },
            {
                path:'/signup',
                element: <SignUp />
            },
        ]
    }
])