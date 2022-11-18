import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography, Avatar, CardHeader, IconButton, Grow} from '@mui/material'

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import PhishingIcon from '@mui/icons-material/Phishing';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useDispatch } from 'react-redux'
import { upVote } from '../../../actions/posts';

const Post = ({ post }) => {

  const dispatch = useDispatch();
  return (
    <Grow in>
      <Card sx = {{minWidth: 700}} elevation = {0}>
        <CardHeader avatar = {
          <Avatar sx={{ bgcolor: '#64b5f6'}}>{post.creator}</Avatar> }
          
          action = {
            <IconButton aria-label = 'settings'>
              <MoreHorizOutlinedIcon/>
            </IconButton>
          }

          title = {post.topic}
          // subheader = {moment(post.createdAt).fromNow()}
          />
        <CardContent>
          <Typography variant = 'h5' gutterBottom>{post.message}</Typography>
        </CardContent>
        <CardActions>
          <Button size = 'medium' color = 'primary' onClick = {()=> dispatch(upVote)}>
            <KeyboardArrowUpIcon fontSize = 'small'/>
            Upvote {post.upVoteCount}
          </Button>
          <Button size = 'medium' color = 'primary' onClick = {()=> {}}>
            <KeyboardArrowDownIcon fontSize = 'small'/>
            DownVote {post.downVoteCount}
          </Button>
        </CardActions>
      </Card>
    </Grow>
  );
}

export default Post;