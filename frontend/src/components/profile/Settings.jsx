import React from "react";
import "./UserBlog.css";
import { ImCross } from "react-icons/im";
import { GoPencil } from "react-icons/go";
import SettingCard from "./SettingCard";
import { useState } from "react";
const Settings = ({ user }) => {
  const [div, setdiv] = useState("none");
  const view = () => {
    div == "none" ? setdiv("block") : setdiv("none");
  };
  return (
    <>
      <div
        className="setting d-flex flex-column flex-lg-row justify-content-center align-items-center"
        onClick={view}
      >
        <GoPencil /> <div className="mx-2 d-none d-lg-block">Edit Profile</div>
      </div>
      <div className={`settingCard d-${div}`}>
        <div
          className="cross d-flex justify-content-center align-items-center"
          onClick={view}
        >
          <ImCross className="mx-2" />
          <div className="d-none d-lg-block">Close Tab</div>
        </div>
        <SettingCard user={user} setdiv={setdiv} />
      </div>
    </>
  );
};

export default Settings;
