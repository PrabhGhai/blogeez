import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
const AddBlogsCard = () => {
  const dispatch = useDispatch();
  const [Categories, setCategories] = useState();
  const fetchCat = async () => {
    await axios
      .get(`${window.location.origin}/api/cat/`)
      .then((res) => setCategories(res.data.categories));
  };
  useEffect(() => {
    fetchCat();
  }, []);
  const history = useNavigate();
  const id = localStorage.getItem("userId");
  const [Inputs, setInputs] = useState({
    title: "",
    description: "",
    photo: "",
    categories: "",
    username: id,
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/post/`, Inputs)
      .then(() => history("/profile/yourblogs"))
      .then(() => dispatch(authActions.addnumblogs));

    setInputs({
      title: "",
      description: "",
      photo: "",
      categories: "",
    });
  };

  return (
    <div className="container mb-3">
      <div className="container">
        <form
          className="d-flex flex-column justify-content-center align-items-center"
          method="post"
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
            onChange={change}
            name="title"
            value={Inputs.title}
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
            onChange={change}
            name="description"
            value={Inputs.description}
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
            onChange={change}
            name="photo"
            value={Inputs.photo}
          />
          <div
            className="d-flex justify-content-start flex-column"
            style={{ width: "100%" }}
          >
            <p className="text-danger">*Please select the category.</p>
            <select
              className="ms-2"
              name="categories"
              id="category"
              style={{ outline: "none" }}
              onChange={change}
            >
              <option style={{ color: "silver" }}>
                <b>Select...</b>
              </option>
              {Categories &&
                Categories.map((items) => (
                  <>
                    <option value={items._id}>{items.name}</option>
                  </>
                ))}
            </select>
          </div>

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
              onClick={submit}
            >
              Add Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlogsCard;
