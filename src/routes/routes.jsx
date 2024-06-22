import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";

import BlogDetails from "../components/BlogDetails";
import { baseUrl } from "../config/config";
import Cancel from "../pages/Cancel";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import DogDetails from "../pages/DogDetails";
import Dogs from "../pages/Dogs";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Faq";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import Success from "../pages/Success";
import Thank from "../pages/Thank";
import AddDogs from "../pages/dashboard/AddDogs";
import AllDogs from "../pages/dashboard/AllDogs";
import AllOrders from "../pages/dashboard/AllOrders";
import ChangePassword from "../pages/dashboard/ChangePassword";
import Dashboard from "../pages/dashboard/Dashboard";
import DetailsDashboard from "../pages/dashboard/DogDetails";
import EditDogs from "../pages/dashboard/EditDogs";
import EditProfile from "../pages/dashboard/EditProfile";
import PrivateRoute from "./private/PrivateRoute";

const token = localStorage.getItem("token");

export const router = createBrowserRouter([
  // frontend routes
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch(`${baseUrl}/dog/getAll`),
      },
      {
        path: "/dogs",
        element: <Dogs />,
        loader: () => fetch(`${baseUrl}/dog/getAll`),
      },
      {
        path: "/dogs/:id",
        element: <DogDetails />,
        loader: ({ params }) =>
          fetch(`${baseUrl}/dog/getSingle?id=${params?.id}`),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/success",
        element: (
          <PrivateRoute>
            <Success />
          </PrivateRoute>
        ),
      },
      {
        path: "/cancel",
        element: (
          <PrivateRoute>
            <Cancel />
          </PrivateRoute>
        ),
      },
      //chekout route
      {
        path: "/chekout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${baseUrl}/dog/getSingle?id=${params?.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
      },
      {
        path: "/thank-you",
        element: (
          <PrivateRoute>
            <Thank />
          </PrivateRoute>
        ),
      },
    ],
  },
  // dashboard routes
  {
    path: "",
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-dogs",
        element: (
          <PrivateRoute>
            <AllDogs />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`${baseUrl}/dog/getAll`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
      },
      {
        path: "/dashboard/all-dogs/:id",
        element: (
          <PrivateRoute>
            <DetailsDashboard />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${baseUrl}/dog/getSingle?id=${params?.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
      },
      {
        path: "/dashboard/add-dogs",
        element: (
          <PrivateRoute>
            <AddDogs />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-dogs/edit/:id",
        element: (
          <PrivateRoute>
            <EditDogs />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${baseUrl}/dog/getSingle?id=${params?.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
      },
      {
        path: "/dashboard/profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${baseUrl}/user/userId?id=${params?.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
      },
      {
        path: "/dashboard/profile/change-password/:id",
        element: (
          <PrivateRoute>
            <ChangePassword />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${baseUrl}/user/userId?id=${params?.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
      },
      {
        path: "/dashboard/allOrders",
        element: (
          <PrivateRoute>
            <AllOrders />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`${baseUrl}/dog/order/getAll`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }),
      },
    ],
  },
]);
