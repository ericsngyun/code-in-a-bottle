const PostMessage = require('../models/postModel');

const postController = {};

postController.getPosts = async (req, res, next) => {
  try{
    const postMessages = await PostMessage.find();
    res.locals.postMessages = postMessages;
    return next();
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

module.exports = postController;