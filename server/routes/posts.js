const express = require('express');

const router = express.Router();

const postController = require('../controllers/posts');

router.get('/', postController.getPosts);

router.post('/', postController.createPost); 

router.patch('/:id/likePost', postController.upVote);

module.exports = router;