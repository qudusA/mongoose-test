const assert = require("assert");
const postSchema = require("../models/postSchema");
const Users = require("../models/user");

describe("post schema", () => {
  it("desccribe relationship of embeded sub documen", (done) => {
    const qudus = new Users({
      firstName: "qudus",
      lastName: "ajagbe",
      posts: [
        {
          title: "the book of life",
          Comment: "the book of ice and fire, the game of throne",
        },
      ],
    });

    qudus
      .save()
      .then((user) => {
        console.log(user);
        done();
      })
      .catch((err) => console.log(err));
  });

  it("update existing sub document", (done) => {
    const qudus = new Users({
      firstName: "islamiyah",
      lastName: "ola",
      posts: [],
    });

    qudus
      .save()
      .then((user) => {
        return Users.findOne({ _id: qudus._id });
      })
      .then((user) => {
        user.posts.push({
          title: "book of ice",
          comment: "the targarian dynasty was bad as hell",
        });

        return user.save();
      })
      .then((user) => {
        console.log(user);
        assert(user.posts[0].title === "book of ice");
        done();
      })
      .catch((err) => console.log(err));
  });

  xit("deletes the sub document", (done) => {
    const qudus = new Users({
      firstName: "islamiyah",
      lastName: "ola",
      posts: [],
    });

    qudus
      .save()
      .then((user) => {
        user.posts.push({
          title: "book of ice",
          comment: "the targarian dynasty was bad as hell",
        });

        return user.save();
      })
      .then((user) => {
        post = user.posts[0];
        // post.deleteOne();
        user.posts.pull(post);
        return user.save();
      })
      .then((user) => {
        console.log(user);
        assert(user.posts.length === 0);
        done();
      })
      .catch((err) => console.log(err));
  });
});
