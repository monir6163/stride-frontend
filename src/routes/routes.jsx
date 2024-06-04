import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";

import Contact from "../pages/Contact";
import DogDetails from "../pages/DogDetails";
import Dogs from "../pages/Dogs";
import ErrorPage from "../pages/ErrorPage";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AddDogs from "../pages/dashboard/AddDogs";
import AllDogs from "../pages/dashboard/AllDogs";
import Dashboard from "../pages/dashboard/Dashboard";
import DetailsDashboard from "../pages/dashboard/DogDetails";
import EditDogs from "../pages/dashboard/EditDogs";
import EditProfile from "../pages/dashboard/EditProfile";
import PrivateRoute from "./private/PrivateRoute";

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
        loader: () =>
          fetch("https://stride-backend-kappa.vercel.app/api/v1/dog/getAll"),
      },
      {
        path: "/dogs",
        element: <Dogs />,
        loader: () =>
          fetch("https://stride-backend-kappa.vercel.app/api/v1/dog/getAll"),
      },
      {
        path: "/dogs/:id",
        element: <DogDetails />,
        loader: ({ params }) =>
          fetch(
            `https://stride-backend-kappa.vercel.app/api/v1/dog/getSingle?id=${params?.id}`
          ),
      },
      {
        path: "/faq",
        element: <Faq />,
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
          fetch("https://stride-backend-kappa.vercel.app/api/v1/dog/getAll", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
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
          fetch(
            `https://stride-backend-kappa.vercel.app/api/v1/dog/getSingle?id=${params?.id}`
          ),
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
          fetch(
            `https://stride-backend-kappa.vercel.app/api/v1/dog/getSingle?id=${params?.id}`
          ),
      },
      {
        path: "/dashboard/profile/edit/:id",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://stride-backend-kappa.vercel.app/api/v1/user/userId?id=${params?.id}`
          ),
      },
    ],
  },
]);
