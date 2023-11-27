const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  tittle: {
    type: String,
    require: true,
  },

  //   imageUrl: {
  //     type: String,
  //   },

  price: {
    type: Number,
  },

  //   description: {
  //     type: String,
  //   },

  users: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],

  review: [{ type: Schema.Types.ObjectId, ref: "review" }],
});

module.exports = mongoose.model("product", productSchema);
