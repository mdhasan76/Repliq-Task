import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
    {
        path: "/*",
        element: <ErrorPage/>
    }
])