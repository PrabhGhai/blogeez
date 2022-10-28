import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import UserCard from "./profile/UserCard";
import UserNav from "./profile/UserNav";
const Profile = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
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
  }, [Profile]);

  return (
    <div style={{ minHeight: "100vh" }} className="bg-white">
      {!isLoggedIn && (
        <>
          <div
            className="container d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <h2 className="">Please Use Above Navigations</h2>
          </div>
        </>
      )}

      {isLoggedIn && (
        <>
          <div className="">
            {Profile && (
              <>
                <UserCard user={Profile} />
                <UserNav />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
