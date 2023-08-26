import React from "react";
import { Route, Routes } from "react-router-dom";
import Mentors from "./Pages/Mentors";
import Home from "./Pages/Home";
import Sessions from "./Pages/Sessions";
import AboutUs from "./Pages/AboutUs";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/sessions" element={<Sessions />} />
      <Route path="/mentors" element={<Mentors />} />
    </Routes>
  );
};

export default AllRoutes;
