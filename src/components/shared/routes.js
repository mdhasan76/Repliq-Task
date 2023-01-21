import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children: [
            {
                path: "/",
                element:<Home/>
            }
        ]
    },
    {
        path: "/*",
        element: <ErrorPage/>
    }
])