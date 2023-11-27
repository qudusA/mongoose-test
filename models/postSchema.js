const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: {
    type: String,
    require: true,
  },

  comment: {
    type: String,
  },
});

module.exports = postSchema;
