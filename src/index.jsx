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
import WaiterOrders from './WaiterOrders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />,
    errorElement: <Hello />
  },
  {
    path: "SCL021-burger-queen/waiter",
    element: <Waiter />,
  },
  {
    path: "SCL021-burger-queen/orders",
    element: <WaiterOrders />,
  },
  {
    path: "SCL021-burger-queen/cook",
    element: <Cook />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);