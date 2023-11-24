const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageurl: {
    type: String,
    required: true,
  },
  weight:{
    type: Number,
    required:true
  },
  application: {
    type: String,
    required: true,
  },
  productform: {
    type: String,
    required: true,
  },
  packaging: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    default: "इंगरूळ. ता-शिराळा, जि-सांगली"
  },
  dosage: {
    type: String,
    required: true,
  }
});




module.exports = mongoose.model("cattlefeed", schema);
