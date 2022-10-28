import React, { useEffect, useState } from "react";
import axios from "axios";
const AuthorUserBlogs = ({ id }) => {
  const [Profile, setProfile] = useState([]);
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

  const Blogs = Profile.blogs;

  return (
    <div className="container my-2 ">
      {Blogs &&
        Blogs.map((item, key) => (
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
            </div>
          </>
        ))}
    </div>
  );
};

export default AuthorUserBlogs;
