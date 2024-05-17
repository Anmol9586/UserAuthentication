import React from "react";
import {  Route, Routes } from "react-router-dom";
import { Login } from "../pages/auth/index.tsx";
import { AppRoutes } from "../constants/enum.ts";

const UIRoute = () => {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<Login/>}/>
    </Routes>
  )
};

export default UIRoute;
