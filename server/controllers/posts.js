const PostMessage = require('../models/postModel');

const postController = {};

postController.getPosts = async (req, res) => {
  try{
    const postMessages = await PostMessage.find();
    console.log(postMessages)

    res.status(200).json(postMessages);
  } catch(error) {
    res.send({error: 'error occurred at middleware function getPosts'})
  }
}

postController.createPost = async(req, res) => {

  try{
    await PostMessage.create({post}, (err, docs) => {
      console.log(docs);
    });
  } catch (error) {
    res.send({error: 'error occurred at middleware function createPost'});
  }
}

module.exports = postController;