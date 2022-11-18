import React from 'react'
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from '../Posts/Post/Post'
import frog from '../../images/frogloading.gif'

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  console.log(posts);
  return (
    !posts.length ? <img src = {frog} alt = "loading"/> :( 
      <Grid container alignItems = 'stretch' spacing = {3}>
        {posts.map((post) => (
          <Grid key = {post._id} item>
            <Post post = {post}/>
          </Grid>
        )
        )}
      </Grid>
    )
  )
}

export default Posts;
