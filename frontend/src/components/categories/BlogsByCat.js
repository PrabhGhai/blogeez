import React from "react";
import { Outlet, useParams } from "react-router-dom";

import BlogsId from "./BlogsId";

const BlogsByCat = () => {
  const id = useParams().id;
  return (
    <>
      <div>
        <BlogsId id={id} />
      </div>
    </>
  );
};

export default BlogsByCat;
