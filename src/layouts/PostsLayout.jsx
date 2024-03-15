import React from 'react'
import Post from "../comps/Post/Post"
const PostsLayout = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default PostsLayout