import axios from "axios";
import React from "react";
import { useState } from "react";
import "./UserBlog.css";
const SettingCard = ({ user, setdiv }) => {
  const [Data, setData] = useState({ username: "" });
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const update = async (e) => {
    await axios.put(
      `${window.location.origin}/api/auth/updateUsername/${user._id}`,
      Data
    );
    alert("Updated Successfully");
    setdiv("none");
  };
  return (
    <div className="cardset">
      <div className="d-flex justify-content-center align-items-center content">
        <div className="bg-white cardedit px-5 py-4 d-flex flex-column">
          <div>
            <h3 className="text-dark">Edit Your Profile</h3>
          </div>
          <hr className="text-dark" />
          <h5 className="text-dark">Your Email</h5>
          <p className="text-dark">{user.email}</p>
          <h5 className="text-dark">Username</h5>
          <input
            type="text"
            name="username"
            value={Data.username}
            onChange={change}
          />

          <div>
            <button className="my-4 btn btn-success" onClick={update}>
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingCard;
