import React, { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const history = useNavigate();
  const img = require("../images/bg.jpg");
  const [inputs, setinputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [Failed, setFailed] = useState(false);
  const change = (e) => {
    const { name, value } = e.target;
    setinputs({ ...inputs, [name]: value });
  };
  const Submit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${window.location.origin}/api/auth/register`, inputs)
        .then(
          (response) => {
            console.log(response.data.message);
            setinputs({ username: "", email: "", password: "" });
            history("/login");
          },
          (error) => {
            console.log(error.response.data.message);
            setFailed(true);
            setinputs({ username: "", email: "", password: "" });
          }
        );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="signup">
        <img className="img-fluid signupimg" src={img} alt="" />
        <div className="user-card my-5 row">
          <div className="col-lg-12 col-12 container">
            <h4 style={{ color: "#0b054a" }}>SignUp</h4>
            <div className="mt-4">
              <form onSubmit={Submit} method="post">
                <div className="mb-4">
                  <input
                    type="text"
                    value={inputs.username}
                    name="username"
                    onChange={change}
                    placeholder="Username"
                    className="form-control"
                    id="username"
                    aria-describedby="username"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="abc@example.com"
                    onChange={change}
                    value={inputs.email}
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    value={inputs.password}
                    placeholder="Password"
                    onChange={change}
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  SignUp
                </button>
              </form>
              <div className="mt-3">
                <p>
                  Already have an account? Please{" "}
                  <span style={{ color: "blue" }}>
                    <Link to="/login">LogIn</Link>
                  </span>
                </p>
              </div>
              {Failed && (
                <div className="mt-3">
                  <p className="text-danger">
                    User with this email already exists.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
