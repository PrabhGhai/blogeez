import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
const YourBlogsCard = () => {
  const history = useNavigate();
  const [Profile, setProfile] = useState([]);
  const id = localStorage.getItem("userId");

  const fetch = async () => {
    await axios
      .get(`${window.location.origin}/api/post/user/${id}`)
      .then((response) => {
        setProfile(response.data.user);
      });
  };
  useEffect(() => {
    fetch();
  }, []);
  const submit = async (id) => {
    await axios
      .delete(`${window.location.origin}/api/post/${id}`)
      .then(() => history("/profile/addblogs"));
  };
  const Blog = Profile.blogs.slice(0).reverse();

  return (
    <div className="container my-2 ">
      {Blog &&
        Blog.slice(0)
          .reverse()
          .map((item, key) => (
            <>
              <div
                className=" container p-4 my-4 "
                style={{ boxShadow: "6px 5px 7px silver" }}
              >
                <div
                  className="container "
                  style={{
                    textAlign: "justify",
                    textJustify: "inter-word",
                  }}
                  key={key}
                >
                  <h2>{item.title}</h2>
                </div>
                <div
                  className="container text-align-justify"
                  style={{ textAlign: "justify", textJustify: "inter-word" }}
                >
                  {item.description}
                </div>
                <div className="d-flex justify-content-center align-items-center my-3">
                  <img className="img-fluid" alt="" src={item.photo} />
                </div>
                <div className="d-flex justify-content-around align-items-center  ">
                  <div style={{ cursor: "pointer" }} className="text-primary ">
                    <Link to={`/profile/updateblogs/${item._id}`}>
                      <BsPencilSquare /> Update
                    </Link>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="text-danger "
                    onClick={() => submit(item._id)}
                  >
                    <RiDeleteBin5Fill /> Delete
                  </div>
                </div>
              </div>
            </>
          ))}
    </div>
  );
};

export default YourBlogsCard;
