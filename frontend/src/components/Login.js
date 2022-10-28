import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "../store";
const Login = ({ login }) => {
  const img = require("../images/bg.jpg");
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({ email: "", password: "" });
  const [Message, setMessage] = useState("");
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios.post(`${window.location.origin}/api/auth/login`, Inputs).then(
      (response) => {
        setInputs({ email: "", password: "" });
        localStorage.setItem("userId", response.data._id);
        history("/profile/yourblogs");
        dispatch(authActions.login());
      },
      (error) => {
        setMessage(error.response.data.message);
        setInputs({ email: "", password: "" });
      }
    );
  };
  return (
    <>
      <div className="signup">
        <img className="img-fluid signupimg" src={img} alt="" />
        <div className="user-card my-5 row">
          <div className="col-lg-12 col-12 container">
            <h4 style={{ color: "#0b054a" }}>LogIn</h4>
            <div className="mt-4">
              <form method="post" onSubmit={submit}>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={Inputs.email}
                    onChange={change}
                    placeholder="abc@example.com"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    value={Inputs.password}
                    onChange={change}
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  LogIn
                </button>
                {Message && (
                  <div className="mt-3">
                    <p className="text-danger">{Message}</p>
                  </div>
                )}
                <p className="mt-3">{login}</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
