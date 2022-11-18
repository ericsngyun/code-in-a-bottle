// import * as api from '../api';
import axios from 'axios';

// action creators here

const url = 'http://localhost:3000/posts';

export const getPosts = () => async(dispatch) => {
  try {
    let action;
    await axios.get(url)
      .then((res) => {
        action = {type: 'FETCH_ALL', payload: res.data}
      }) 
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    let action;
    await axios.post(url, post)
    .then((res) => {
       action = {type: 'CREATE', payload: res.data}
    })
    // const result = await api.makePost(post);
    // console.log(`this is where data will show: \n ${result}`);
    // console.log(action);
    dispatch(action);
  } catch (error) {
    console.log(error);
  }
} 

export const upVote = (id) => async (dispatch) => {
  try{
    let action;
    axios.patch(`${url}/${id}/likePost`)
      .then((res) => {
        action = {type : 'UPVOTE', payload: res.data}
      });

    console.log(action);
    dispatch(action);
  } catch(error) {
    console.log(error);
  }
}