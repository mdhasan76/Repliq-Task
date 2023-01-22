import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Dashboard";
import Main from "../../layout/Main";
import Cart from "../../pages/cart/Cart";
import AdminDashboard from "../../pages/dashboard/AdminDashboard";
import AllCustomer from "../../pages/dashboard/AllCustomer";
import AllProducts from "../../pages/dashboard/AllProducts";
import Orders from "../../pages/dashboard/Orders";
import ProductsDtails from "../../pages/dashboard/ProductsDtails";
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
        path: "/dashboard",
        element: <Dashboard/>,
        children:[
            {
                path: "/dashboard",
                element: <Orders/>
            },
            {
                path: "/dashboard/orders",
                element: <Orders/>
            },
            {
                path:"/dashboard/selers",
                element: <AllCustomer/>
            },
            {
                path:"/dashboard/products",
                element: <AllProducts/>
            },
            {
                path:"/dashboard/products/:id",
                element: <ProductsDtails/>
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage/>
    }
])