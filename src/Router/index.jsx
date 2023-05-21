import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layouts from '../pages/Layouts'
import Login from '../pages/Login'
import Register from '../pages/Register'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layouts />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default function Routes(props) {

    return (
        <RouterProvider router={router} />
    )
}