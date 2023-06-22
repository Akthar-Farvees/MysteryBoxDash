import React from 'react'
import DetailedOrder from "../../modules/DetailedOrder/index";
import Orders from "../../modules/Orders/index";
import RestaurantMenu from '../../modules/RestaurantMenu/index.js';
import  CreateMenuItem from '../../modules/CreateMenuItem/index';
import  OrderHistory from '../../modules/OrderHistory/index';
import { Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
    <Route path="/" element={<Orders />} />
    <Route path="order/:id" element={<DetailedOrder />} />
    <Route path="menu" element={<RestaurantMenu/>} />
    <Route path="menu/create" element={<CreateMenuItem/>} />
    <Route path="order-history" element={<OrderHistory/>} />
  </Routes>
  )
}

export default AppRoutes