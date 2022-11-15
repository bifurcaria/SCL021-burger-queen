import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Waiter from './Waiter'
import Hello from './Hello'
import Cook from './Cook'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />,
  },
  {
    path: "waiter",
    element: <Waiter />,
  },
  {
    path: "cook",
    element: <Cook />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);