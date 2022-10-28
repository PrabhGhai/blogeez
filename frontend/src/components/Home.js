import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";
import "./Home.css";
import StepsforBlog from "./StepsforBlog";
import Homeheader from "./Homeheader";
import { useSelector } from "react-redux";
const Home = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [BlogData, setBlog] = useState();

  const fetchData = async () => {
    await axios.get(`${window.location.origin}/api/post`).then((res) => {
      const data = res.data;
      const slice = data.slice(0).reverse();
      setBlog(slice);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const homeimg = require("../images/homeimg.jpg");
  return (
    <>
      <Homeheader />
      <StepsforBlog />
      <div className="container mt-5">
        <div className="container">
          <img className="img-fluid" src={homeimg} alt=" " />
        </div>
      </div>
      <div style={{ backgroundColor: " #0b054a" }}>
        <div className=" container mt-5 pt-4">
          <div className="container d-flex justify-content-start align-items-center">
            <h2 className="new text-white pb-2">The Latest Blogs </h2>
          </div>
        </div>
        <div className="home container">
          {BlogData &&
            BlogData.slice(0, 3).map((item, index) => (
              <div
                className=" container d-flex flex-column align-items-center  "
                key={index}
              >
                <div
                  className=" container my-3 p-2 boxBlog"
                  style={{ borderLeft: "1px solid white" }}
                >
                  <Blog blog={item} />
                </div>
              </div>
            ))}
        </div>
      </div>
      {!isLoggedIn && (
        <div className="container my-3">
          <div
            className=" d-flex justify-content-center align-items-center container"
            style={{ padding: "15px" }}
          >
            <h3>SignUp For Free Now.</h3>
            <div
              className="ms-3  "
              style={{
                backgroundColor: " #0b054a",
                color: "white",
                padding: "8px",
                borderRadius: "7px",
              }}
            >
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "white" }}
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
