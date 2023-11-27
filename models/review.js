const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  like: {
    type: String,
  },

  product: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
  ],

  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("review", reviewSchema);
