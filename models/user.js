const mongoose = require("mongoose");
const postSchema = require("./postSchema");
const review = require("./review");

const Schema = mongoose.Schema;

const Users = new Schema({
  firstName: String,
  lastName: String,
  posts: [postSchema],
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
  ],

  review: [{ type: Schema.Types.ObjectId, ref: "review" }],
});

Users.virtual("postCount").get(function () {
  //   console.log(this.posts.length);
  return this.posts.length;
});

Users.pre("deleteMany", function (next) {
  const reviews = mongoose.model("review");
  reviews.deleteMany({_id: {$in: this.reviews}}).then(()=>next())
});

module.exports = mongoose.model("user", Users);
