const { default: mongoose } = require('mongoose');
const PostMessage = require('../models/postModel');

const postController = {};

postController.getPosts = async (req, res, next) => {
  try{
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch(error) {
    return next({error: 'error occurred at middleware function getPosts'})
  }
}

postController.createPost = async(req, res, next) => {
  const post = req.body;  

  const newPost = new PostMessage(post);
  try{
    // console.log(newPost);
    await newPost.save();
    res.status(200).json(newPost)
  } catch (error) {
    return next({error: 'error occurred at middleware function createPost'});
  }
}


postController.upVote = async (req, res) => {
  const {id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No Post with Id');

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, {upVoteCount: post.upVoteCount + 1}, { new: true});

  res.json(updatedPost);
}
module.exports = postController;