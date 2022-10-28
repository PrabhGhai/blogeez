import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const UpadteBlog = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
    photo: "",
  });
  const id = useParams().id;
  const fetchdata = async () => {
    await axios.get(`${window.location.origin}/api/post/${id}`).then((res) =>
      setInputs({
        title: res.data.title,
        description: res.data.description,
        photo: res.data.photo,
        categories: res.data.categories,
      })
    );
  };
  useEffect(() => {
    fetchdata();
  }, []);

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .put(`${window.location.origin}/api/post/${id}`, Inputs)
      .then(() => history("/profile/yourblogs"));
  };
  return (
    <div>
      <div className="container mb-3">
        <div className="container">
          <form
            className="d-flex flex-column justify-content-center align-items-center"
            method="post"
            onSubmit={submit}
          >
            <input
              type="text"
              placeholder="Title"
              style={{
                width: "100%",
                border: "1px solid silver",
                outline: "none",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              className="my-3 p-2"
              name="title"
              value={Inputs.title}
              onChange={change}
            />
            <textarea
              type="text"
              placeholder="Description"
              cols="50"
              rows="10"
              style={{
                width: "100%",
                border: "1px solid silver",
                outline: "none",
              }}
              className="my-3 p-2"
              name="description"
              value={Inputs.description}
              onChange={change}
            />
            <input
              type="text"
              placeholder="Image URL"
              style={{
                width: "100%",
                border: "1px solid silver",
                outline: "none",
              }}
              className="my-3 p-2"
              name="photo"
              value={Inputs.photo}
              onChange={change}
            />

            <div
              className="d-flex justify-content-end my-3"
              style={{ width: "100%" }}
            >
              <button
                style={{
                  border: "none",
                  backgroundColor: "blue",
                  color: "white",
                }}
                className="p-2"
              >
                Update Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpadteBlog;
