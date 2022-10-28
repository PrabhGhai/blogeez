import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Blogs = () => {
  const [Blog, setBlog] = useState();
  const fetchData = async () => {
    await axios
      .get(`${window.location.origin}/api/post`)
      .then((res) => setBlog(res.data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" container d-flex justify-content-center align-items-center">
      <div className="my-4">
        <div className="" style={{ height: "100vh", overflowY: "scroll" }}>
          {Blog ? (
            Blog.slice(0)
              .reverse()
              .map((item, index) => (
                <>
                  <div className=" container mb-3 bg-white p-3">
                    <div className="container">
                      <p>
                        <Link
                          to={`/categories/all/author/${item.username._id}`}
                          style={{ textDecoration: "none", color: "silver" }}
                        >
                          {item.username.username}
                        </Link>
                      </p>
                    </div>
                    <div
                      className="container "
                      style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                      key={index}
                    >
                      <h2>{item.title}</h2>
                    </div>
                    <div
                      className="container text-align-justify"
                      style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      {item.description}
                    </div>
                    <div className=" container d-flex justify-content-center align-items-center my-3">
                      <img className="img-fluid" alt="" src={item.photo} />
                    </div>
                  </div>
                </>
              ))
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
