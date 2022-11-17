import React from 'react'
import { useSelector } from 'react-redux';
import Post from '../Posts/Post/Post'

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts);
  return (
    <>
      <h1>FORUM POSTS GO HERE</h1>
    </>
  )
}

export default Posts;
