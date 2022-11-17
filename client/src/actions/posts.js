
import * as api from '../api';


// action creators here

export const getPosts = () => async(dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    console.log('in action dispatcher');
    const { response } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: response.data });
  } catch (error) {
    console.log('fail');
    console.log(error);
  }
}   