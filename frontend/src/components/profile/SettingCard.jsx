import axios from "axios";
import React from "react";
import { useState } from "react";
import "./UserBlog.css";
const SettingCard = ({ user, setdiv }) => {
  const [Data, setData] = useState({ username: "" });
  const [Password, setPassword] = useState({ password: "", newpassword: "" });
  const [View, setView] = useState("Change Password");
  const [DisplayPassword, setDisplayPassword] = useState("none");
  const [DsipalyUsernme, setDisplayUsername] = useState("block");
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const changePassword = (e) => {
    const { name, value } = e.target;
    setPassword({ ...Password, [name]: value });
  };
  const update = async () => {
    if (Data.username === "") {
      alert("Field Can't be empty");
    } else {
      await axios.put(
        `${window.location.origin}/api/auth/updateUsername/${user._id}`,
        Data
      );
      alert("Updated Successfully");
      setData({ username: "" });
      setdiv("none");
    }
  };
  const updatePassword = async () => {
    if (Password.password == "" || Password.newpassword === "") {
      alert("Field Can't be empty");
    } else {
      await axios
        .put(
          `${window.location.origin}/api/auth/updatePassword/${user._id}`,
          Password
        )
        .then((response) => alert(response.data.message));
      setPassword({ password: " ", newpassword: "" });
      setdiv("none");
    }
  };
  const changeView = () => {
    View === "Change Password"
      ? setView("Change Username")
      : setView("Change Password");
    View === "Change Password"
      ? setDisplayPassword("block")
      : setDisplayPassword("none");
    View === "Change Password"
      ? setDisplayUsername("none")
      : setDisplayUsername("block");
  };

  return (
    <div className="cardset">
      <div className="d-flex justify-content-center align-items-center content">
        <div className="bg-white cardedit px-5 py-4 d-flex flex-column">
          <div>
            <h5 className="text-dark">Edit Your Profile</h5>
          </div>
          <hr className="text-dark m-0 mb-3" />
          <h5 className="text-dark">Your Email</h5>
          <p className="text-dark">{user.email}</p>

          <div className={`d-${DsipalyUsernme} `}>
            <h5 className="text-dark">Current Username</h5>
            <p className="text-dark">{user.username}</p>
            <h5 className="text-dark">New Username</h5>
            <input
              type="text"
              placeholder="Enter New Username"
              name="username"
              value={Data.username}
              onChange={change}
            />
            <div>
              <button className="my-3 btn btn-success" onClick={update}>
                Update
              </button>
            </div>
          </div>

          <div className={`d-${DisplayPassword}`}>
            <h5 className="text-dark">Current Password</h5>
            <input
              type="password"
              name="password"
              placeholder="Enter Current Password"
              value={Password.password}
              onChange={changePassword}
            />
            <h5 className="text-dark mt-3">New Password</h5>
            <input
              type="password"
              name="newpassword"
              placeholder="Enter New Password"
              value={Password.newpassword}
              onChange={changePassword}
            />
            <div>
              <button
                className="my-3 btn btn-success "
                onClick={updatePassword}
              >
                Update
              </button>
            </div>
          </div>
          <p className="m-0 change" onClick={changeView}>
            {View}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingCard;
