import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Waiter from './Waiter'
import Hello from './Hello'
import Cook from './Cook'
import {
  createBrowserRouter,
  HashRouter,
} from "react-router-dom";
import WaiterOrders from './WaiterOrders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hello />,
    errorElement: <Hello />
  },
  {
    path: "/waiter",
    element: <Waiter />,
  },
  {
    path: "/orders",
    element: <WaiterOrders />,
  },
  {
    path: "/cook",
    element: <Cook />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter router={router} />
  </React.StrictMode>
);