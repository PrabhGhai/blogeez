import React from "react";
import Carousel from "./categories/carousel";

import Blogs from "./categories/Blogs";
import { Outlet } from "react-router-dom";
const Categories = () => {
  return (
    <div style={{ height: "auto" }}>
      <div className="d-lg-flex d-block">
        <Carousel />
        <Blogs />
      </div>
      <Outlet />
    </div>
  );
};

export default Categories;
