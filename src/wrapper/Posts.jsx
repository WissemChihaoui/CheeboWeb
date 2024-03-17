import React from "react";
import Post from "../comps/Post/Post";
import PostsData from "../data/PostsData";
console.log(PostsData);
const Posts = () => {
    
  return (
    <>
    <div className="flex flex-col gap-3">
      <Post />
      <Post />
      <Post />
      </div>
    </>
  );
};

export default Posts;
