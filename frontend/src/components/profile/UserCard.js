import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store";
import Settings from "./Settings.jsx";
import axios from "axios";
const UserCard = ({ user }) => {
  const [Blogs, setBlogs] = useState();
  const change = async (e) => {
    const file = e.target.files[0];
    const formdata = new FormData();
    formdata.append("id", user._id);
    formdata.append("image", file);

    await axios.post(`${window.location.origin}/upload`, formdata);
  };
  useEffect(() => {
    const blogs = user.blogs;
    setBlogs(blogs);
  });

  const dispatch = useDispatch();
  {
    Blogs && dispatch(authActions.numblogs(Blogs.length));
  }
  const numblogs = useSelector((state) => state.numblogs);

  return (
    <>
      {user && (
        <div
          style={{ backgroundColor: "#0b054a" }}
          className="text-white usercard"
        >
          <div className="container">
            <div className=" row py-3">
              <div className="col-lg-6 col-12 p-3   ">
                <div className=" d-flex justify-content-center align-items-center flex-column">
                  <div
                    style={{
                      width: "108px",
                      height: "108px",
                      border: "1px solid silver",
                      borderRadius: "80px",
                    }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <img
                      className="img-fluid"
                      src={user.profile}
                      alt="/"
                      style={{
                        width: "100px",
                        height: "100px",

                        borderRadius: "80px",
                      }}
                    />
                  </div>
                  <div
                    className=" d-flex justify-content-center my-1"
                    style={{ color: "silver" }}
                  >
                    {user.email}
                  </div>
                  <div
                    className=" d-flex justify-content-center "
                    style={{ color: "" }}
                  >
                    <b className=" d-flex justify-content-center ">
                      {user.username}
                    </b>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-12 p-3  d-flex justify-content-center align-items-center  ">
                <div className=" d-flex justify-content-center align-items-center">
                  <div className="my-0 my-lg-2 d-flex justify-content-center align-items-center flex-column">
                    {Blogs && (
                      <div className="d-flex justify-content-center align-items-center flex-column">
                        <h1 style={{ fontSize: "50px" }}>{Blogs.length}</h1>
                        <p>Blogs</p>
                        {Blogs.length === 0 && (
                          <>
                            <Link
                              to="/profile/addblogs"
                              style={{ textDecoration: "none" }}
                            >
                              Please Add Blogs
                            </Link>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="bg-success">
                  <Settings user={user} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserCard;
