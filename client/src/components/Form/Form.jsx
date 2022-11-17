import React, { useState }from 'react'
import { TextField, Button, Typography, Paper, Grid, Select, MenuItem, FormControl, InputLabel} from '@mui/material'
import { useDispatch } from 'react-redux';

import { createPost } from '../../actions/posts';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', topic: ''
  });
  const dispatch = useDispatch();

  const handleSubmit =  (event) => {
    event.preventDefault();
    console.log(postData);
    dispatch(createPost(postData));
  }

  const clear = () => {

  }

  return (
    <Paper sx = {{padding: 3}}>
      <form autoComplete = 'off' noValidate onSubmit = {handleSubmit}>
        <Grid container direction = {'column'} spacing = {2}>
          <Grid item>
          <Typography variant = "h6" sx = {{mx: 'auto'}}> Creating a Post </Typography>
          </Grid>
          <Grid item>
            <TextField 
              name = "creator" 
              variant = "outlined" 
              label = "Creator" 
              fullWidth
              value = {postData.creator}
              onChange = {(e) => setPostData({ ...postData, creator: e.target.value })}
            />
          </Grid>
          <Grid item>
            <TextField 
              name = "title" 
              variant = "outlined" 
              label = "Title" 
              fullWidth
              value = {postData.title}
              onChange = {(e) => setPostData({ ...postData, title: e.target.value })}
            />
          </Grid>
          <Grid item>
            <TextField 
              name = "message" 
              variant = "outlined" 
              label = "Message" 
              fullWidth
              value = {postData.message}
              onChange = {(e) => setPostData({ ...postData, message: e.target.value })}
            />
          </Grid>
          <Grid item>
            {/* <FormControl sx = {{minWidth : 20}}>
              <InputLabel>Topic</InputLabel>
              <Select
                name = "topic"
                value = {postData.topic}
                label = "Topic"
                fullWidth
                onChange = {(e) => setPostData({...Button, topic: e.target.value})}>
                <MenuItem value = {'Algorithms'}>Algorithms</MenuItem>
                <MenuItem value = {'React'}>React</MenuItem>
                <MenuItem value = {'Debugging'}>Debugging</MenuItem>
                <MenuItem value = {'General'}>General</MenuItem> 
                <MenuItem value = {'Hack-Hour'}>Hack-Hour</MenuItem>
              </Select>
            </FormControl> */}
            <TextField 
              name = "topic" 
              variant = "outlined" 
              label = "Topic" 
              fullWidth 
              value = {postData.topic}
              onChange = {(e) => setPostData({ ...postData, topic: e.target.value })}
            />
          </Grid>
          <Grid item>
            <Button variant = "contained" size = "large" type = "submit" fullWidth>Submit</Button>
          </Grid>
          <Grid item>
            <Button variant = "container" size = "small" onClick = {clear} fullWidth>Clear</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default Form;
