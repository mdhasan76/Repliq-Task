import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Cart from "../../pages/cart/Cart";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Product from "../../pages/product/Product";
import Register from "../../pages/register/Register";
import ErrorPage from "../shared/ErrorPage";

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
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/product",
                element: <Product/>
            }
        ]
    },
    {
        path: "/*",
        element: <ErrorPage/>
    }
])