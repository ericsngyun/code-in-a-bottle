import React, { useState }from 'react'
import { TextField, Button, Typography, Paper, Grid} from '@mui/material'
// import {DeleteIcon, SendIcon} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
// import { useSelector  } from 'react-redux';


import { createPost } from '../../actions/posts';

const Form = () => {
  const [postData, setPostData] = useState({
    name: '', title: '', message: '', topic: ''
  });

  const dispatch = useDispatch();


  const handleSubmit =  async (event) => {
    event.preventDefault();
    dispatch(createPost(postData));
  }

  const clear = () => {

  }

  return (
    <Paper sx = {{padding: 3, minWidth: 500}}>
      <form autoComplete = 'off' noValidate onSubmit = {handleSubmit}>
        <Grid container direction = {'column'} spacing = {2}>
          <Grid item>
          {/* <Typography variant = "h6" sx = {{mx: 'auto'}}> Send a Bottle </Typography> */}
          </Grid>
          <Grid item>
            <TextField 
              name = "creator" 
              variant = "outlined" 
              label = "Name" 
              fullWidth
              value = {postData.name}
              onChange = {(e) => setPostData({ ...postData, name: e.target.value })}
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
              name = "topic" 
              variant = "outlined" 
              label = "Subject" 
              fullWidth 
              value = {postData.topic}
              onChange = {(e) => setPostData({ ...postData, topic: e.target.value })}
            />
          </Grid>
          <Grid item>
            <TextField 
              name = "message" 
              variant = "outlined" 
              label = "Message" 
              fullWidth
              value = {postData.message}
              rows = {4}
              multiline
              onChange = {(e) => setPostData({ ...postData, message: e.target.value })}
            />
          </Grid>
        
          <Grid item>
            <Grid container direction = "row" justifyContent = 'center' alignItems = 'center' spacing = {3}>
              <Grid item>
                <Button variant = "contained" type = "submit" fullWidth>Send</Button>
              </Grid>
              <Grid item> 
                <Button variant = "outlined"  onClick = {clear} fullWidth>Delete</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default Form;
