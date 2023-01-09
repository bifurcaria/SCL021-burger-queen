import React from 'react';
import { Route, Routes } from "react-router-dom";
import './index.css';
import Waiter from './Waiter'
import Hello from './Hello'
import Cook from './Cook'
import WaiterOrders from './WaiterOrders';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hello/>} />
        <Route path="waiter" element={<Waiter/>} />
        <Route path="cook" element={<Cook/>} />
        <Route path="orders" element={<WaiterOrders/>} />
      </Routes>
    </>
   
  )
}