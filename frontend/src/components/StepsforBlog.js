import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { GiCardPickup } from "react-icons/gi";
import { BsPatchCheckFill } from "react-icons/bs";
const StepsforBlog = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="container d-flex justify-content-center align-items-center flex-column  ">
          <div className="d-flex  justify-content-start w-100">
            <h6 className="mb-0">
              Steps to create a Blog
              <BiRightArrowAlt style={{ fontSize: "25px" }} />
            </h6>
          </div>

          <div className=" row container d-flex justify-content-center justify-content-lg-around mt-4">
            <div className="col-lg-3 col-sm-3 col-12 p-3 steps">
              <div className="d-flex justify-content-center mb-2">
                <div
                  style={{
                    backgroundColor: "#0b054a",
                    padding: "10px",
                    borderRadius: "30px",
                  }}
                >
                  <GiCardPickup style={{ fontSize: "35px", color: "white" }} />
                </div>
              </div>
              <h5 className="d-flex justify-content-center align-items-center">
                Pick up the niche.
              </h5>
              <p style={{ textAlign: "justify", marginBottom: "0px" }}>
                Start working on the niche in which you are having some
                knowledge. Don't pick up the other niche topics in the same blog
                posts.
              </p>
            </div>
            <div className=" col-lg-3 col-sm-3 col-12 p-3  mt-3 mt-lg-0 steps">
              <div className="d-flex justify-content-center mb-2">
                <div
                  style={{
                    backgroundColor: "#0b054a",
                    padding: "10px",
                    borderRadius: "30px",
                  }}
                >
                  <MdOutlineTravelExplore
                    style={{ fontSize: "35px", color: "white" }}
                  />
                </div>
              </div>
              <h5 className="d-flex justify-content-center align-items-center">
                Explore your niche.
              </h5>
              <p style={{ textAlign: "justify", marginBottom: "0px" }}>
                Exploring your niche will build up your work quality and helps
                you to share more about it. So,explore your niche more.
              </p>
            </div>
            <div className="col-lg-3 col-sm-3 col-12 p-3  mt-3 mt-lg-0 steps">
              <div className="d-flex justify-content-center mb-2">
                <div
                  style={{
                    backgroundColor: "#0b054a",
                    padding: "10px",
                    borderRadius: "30px",
                  }}
                >
                  <BsPatchCheckFill
                    style={{ fontSize: "35px", color: "white" }}
                  />
                </div>
              </div>
              <h5 className="d-flex justify-content-center align-items-center">
                All done for the blog.
              </h5>
              <p style={{ textAlign: "justify", marginBottom: "0px" }}>
                So, now it's a time for you to share your blogs with the world
                and earn some handsome amount for your work. So, just go and
                write your blogs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsforBlog;
