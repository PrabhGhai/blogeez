import React, { useState } from "react";
import { Link } from "react-router-dom";
const Blog = ({ blog }) => {
  console.log(blog);
  const [Para, setPara] = useState(700);
  const [Button, setButton] = useState("...View More");
  const [Image, setImage] = useState("none");
  const clickHandle = () => {
    Para == 700 ? setPara(undefined) : setPara(700);
    Button == "...View More"
      ? setButton("...View Less")
      : setButton("...View More");
    Image == "none" ? setImage("flex") : setImage("none");
  };
  return (
    <div>
      <div className="container">
        <Link
          className="mb-2"
          style={{ color: "gray", textDecoration: "none" }}
          to={`/categories/all/author/${blog.username._id}`}
        >
          {blog.username.username}
        </Link>
        <h3
          style={{
            fontWeight: "lighter",
            fontFamily: "sans-serif",
            color: "white",
          }}
        >
          {blog.title}
        </h3>
        <div style={{ textAlign: "justify", color: "silver" }}>
          {blog.description.slice(0, Para)}
          <button
            style={{
              border: "none",
              backgroundColor: "transparent",
              color: "orange",
            }}
            onClick={clickHandle}
          >
            {Button}
          </button>
        </div>
        <div
          className={`d-${Image} justify-content-center align-items-center `}
        >
          <img className="img-fluid my-3" src={blog.photo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Blog;
