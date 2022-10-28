import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthorUserCard from "./AuthorUserCard";
import AuthorUserBlogs from "./AuthorUserBlogs.js";
const AuthorProfile = () => {
  const id = useParams().id;
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
  return (
    <div>
      <div style={{ minHeight: "100vh" }} className="bg-white">
        <div className="">
          {Profile && (
            <>
              <AuthorUserCard user={Profile} />
              <AuthorUserBlogs id={id} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
