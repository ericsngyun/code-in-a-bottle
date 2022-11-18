import axios from 'axios';

const url = 'http://localhost:3000/posts';


export const fetchPosts = () => axios.get(url);

export const makePost = (newPost) => {

  axios.post(url, newPost)
    .then((res) => console.log('this is makePost output:' , res.data))
    .then((res) => res = res.data);
  
    // .then((res) => console.log(res)) // return 'success'
}