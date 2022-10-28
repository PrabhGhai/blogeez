import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineSegment } from "react-icons/md";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
import "./Navbar.css";
const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  return (
    <div>
      <nav
        className="navbar  navbar-expand-lg "
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <Link className="navbar-brand   " to="/">
            Blogeez.com
          </Link>
          <div
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: "0px" }}
          >
            <MdOutlineSegment />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  " to="/categories/all">
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  " to="/search">
                  Search
                </Link>
              </li>
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link  " to="/signup">
                    Signup
                  </Link>
                </li>
              )}

              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link  " to="/profile/yourblogs">
                      Profile
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => {
                      dispatch(authActions.logout());
                      localStorage.removeItem("userId");
                    }}
                  >
                    <Link className="nav-link  " to="/signup">
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
