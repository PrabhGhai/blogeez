import React, { useEffect, useState } from "react";
import "./carousel.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaGripLines } from "react-icons/fa";
const Carousel = () => {
  const [display, setdisplay] = useState("none");
  const [Categories, setCategories] = useState();
  const fetchCat = async () => {
    await axios
      .get(`${window.location.origin}/api/cat/`)
      .then((res) => setCategories(res.data.categories));
  };
  useEffect(() => {
    fetchCat();
  }, []);

  const show = () => {
    if (display === "none") {
      setdisplay("block");
    } else {
      setdisplay("none");
    }
  };
  return (
    <div
      className="bg-white cat-content w-auto"
      style={{
        borderTop: "1px solid silver",
        borderRight: "1px solid silver",
        borderBottom: "1px solid silver",
        width: "max-content",
        padding: "10px",
      }}
    >
      <div className="container d-flex  flex-column">
        <div className=" d-flex justify-content-between align-items-center my-lg-3 my-0 ">
          <h6 className="d-flex mb-0 align-items-center ">Categories</h6>
          <span
            className="ms-3 d-lg-none d-sm-block"
            style={{ cursor: "pointer" }}
            onClick={show}
          >
            <FaGripLines />
          </span>
        </div>
        <div className={`container cat-items d-${display} d-lg-block mt-2  `}>
          {Categories &&
            Categories.map((items, key) => (
              <Link
                to={`/categories/${items._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>{items.name}</p>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
