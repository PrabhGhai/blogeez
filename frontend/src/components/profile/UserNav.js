import React from "react";
import { Link, Outlet } from "react-router-dom";
import { MdGridView, MdOutlineAddBox } from "react-icons/md";
import "./usernav.css";
const UserNav = () => {
  return (
    <div>
      <div className=" container d-flex justify-content-around align-items-center">
        <div className="container p-2 d-flex justify-content-center align-items-center ">
          <Link
            to="/profile/yourblogs"
            style={{ textDecoration: "none" }}
            id="navlink"
          >
            <MdGridView style={{ fontSize: "25px" }} />
          </Link>
        </div>
        <div className="container p-2 d-flex justify-content-center align-items-center">
          <Link
            to="/profile/addblogs"
            style={{ textDecoration: "none" }}
            id="navlink"
          >
            <MdOutlineAddBox style={{ fontSize: "25px" }} />
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default UserNav;
