import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/public/Register";
import Login from "../pages/public/Login";
import ForgotPassword from "../pages/public/ForgotPassword";
import Home from "../pages/public/Home";
import Product from "../pages/public/Product";
// import DetailProduct from "../pages/public/DetailProduct";
// import CheckoutProduct from "../pages/user/CheckoutProduct";
// import HistoryOrder from "../pages/user/HistoryOrder";
// import DetailOrder from "../pages/user/DetailOrder";
import Profile from "../pages/users/Profile";
// import { NotFound } from "../pages/public/NotFound";

import GuestGuard from "../guards/GuestGuard";
import AuthGuard from "../guards/AuthGuard";
import Layout from "../components/Layout";
import AdminGuard from "../guards/AdminGuard";
import Dashboard from "../pages/admin/Dashboard";
import AdminLayout from "../layouts/AdminLayout"; // arrange this in the future, change the architecture if needed
// import Products from "../pages/admin/Products";
// import Orders from "../pages/admin/Orders";
import Users from "../pages/admin/Users";

import UnderDev from "../components/UnderDev"; //please replace all UnderDev with actual component when ready
import FAQ_page from "../pages/public/FAQ_page";
import AboutUs from "../components/AboutUs";



const router = createBrowserRouter([
  {
    path: "/register",
    element: (
      <GuestGuard>
        <Register />
      </GuestGuard>
    ),
  },
    {
    path: "/FAQs",
    element: (
    
        <FAQ_page/>
     
    ),
  },
    {
    path: "/about",
    element: (
      
        <AboutUs />
      
    ),
  },
  {
    path: "/login",
    element: (
      <GuestGuard>
        <Login />
      </GuestGuard>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <GuestGuard>
        <ForgotPassword />
      </GuestGuard>
    ),
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/detail-product/:uuid",
        element:  <UnderDev name="Detail Product" />,
      },
      {
        path: "/checkout-product",
        element: (
          <AuthGuard>
            <UnderDev name="Checkout Product" /> 
          </AuthGuard>
        ),
      },
      {
        path: "/history-order",
        element: (
          <AuthGuard>
            <UnderDev name="History Order" />
          </AuthGuard>
        ),
      },
      {
        path: "/detail-order/:uuid",
        element: (
          <AuthGuard>
            <UnderDev name="Detail Order" />
          </AuthGuard>
        ),
      },
      {
        path: "/profile",
        element: (
          <AuthGuard>
            <Profile />
          </AuthGuard>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: (
          <AdminGuard>
            <Dashboard />
          </AdminGuard>
        ),
      },
      {
        path: "products",
        element: (
          <AdminGuard>
            <UnderDev name="Admin Products" />
          </AdminGuard>
        ),
      },
      {
        path: "orders",
        element: (
          <AdminGuard>
            <UnderDev name="Admin Orders" />
          </AdminGuard>
        ),
      },
      {
        path: "users",
        element: (
          <AdminGuard>
            <Users />
          </AdminGuard>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <UnderDev name="Not Found" />
  },
]);

export default router;