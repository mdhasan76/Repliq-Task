import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../layout/Dashboard";
import Main from "../../layout/Main";
import Cart from "../../pages/cart/Cart";
import AddCustomer from "../../pages/dashboard/AddCustomer";
import AddProduct from "../../pages/dashboard/AddProduct";
import AllCustomer from "../../pages/dashboard/AllCustomer";
import AllProducts from "../../pages/dashboard/AllProducts";
import CustomerDtails from "../../pages/dashboard/CustomerDtails";
import OrderDetails from "../../pages/dashboard/OrderDetails";
import Orders from "../../pages/dashboard/Orders";
import ProductsDtails from "../../pages/dashboard/ProductsDtails";
import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import CustomerProDtails from "../../pages/product/CustomerProDtails";
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
            },
            {
                path: "/products/:id",
                loader: ({params}) => fetch(`${process.env.REACT_APP_URL}/products/${params.id}`),
                element: <CustomerProDtails/>
            },
            {
                path: "/users/:id",
                loader: ({params}) => fetch(`${process.env.REACT_APP_URL}/users/${params.id}`),
                element: <CustomerDtails/>
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
                path: "/dashboard/ordersdetails/:id",
                loader: ({params}) => fetch(`${process.env.REACT_APP_URL}/orders/${params.id}`),
                element: <OrderDetails/>
            },
            {
                path:"/dashboard/customers",
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
            {
                path:"/dashboard/addcustomer",
                element: <AddCustomer/> 
            },
            {
                path:"/dashboard/addproducts",
                element: <AddProduct/> 
            },
        ]
    },
    {
        path: "/*",
        element: <ErrorPage/>
    }
])