import React from "react";
import Post from "../comps/Post/Post";
import PostsData from "../data/PostsData";

const Posts = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        {PostsData.map((post) => (
          <Post id={post.id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
