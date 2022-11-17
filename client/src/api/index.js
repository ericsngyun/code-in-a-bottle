import axios from 'axios';

const url = 'http://localhost:3000/posts';


export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => {
  axios.post(url, newPost)
    .then(data => console.log(response.data))
    .catch((error) => console.log(error));
    // .then((res) => console.log(res)) // return 'success'
}