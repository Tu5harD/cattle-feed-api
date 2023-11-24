// likes.model.js
const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  likes: { type: Number, default: 0 },
});

module.exports = mongoose.model("Like", likeSchema);
