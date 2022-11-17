const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  message: String,
  creator: String,
  topic: String,
  likeCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
})

const postMessage = mongoose.model('postMessage', postSchema);

module.exports = postMessage;