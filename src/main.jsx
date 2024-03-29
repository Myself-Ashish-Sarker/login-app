import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Mainbox from './components/Mainbox/Mainbox';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainbox></Mainbox>,
    },
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
