import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout";
import About from "../components/About";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;