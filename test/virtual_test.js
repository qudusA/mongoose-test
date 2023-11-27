const assert = require("assert");
const Users = require("../models/user");

describe("virtual field", () => {
  it("how to use getter with virtual field", (done) => {
    const ola = new Users({
      firstName: "islamiyah",
      lastName: "olaide",
      posts: [],
    });
    ola
      .save()
      .then((user) => {
        console.log(user.postCount);
        assert(user.postCount === 0);
        done();
      })
      .catch((err) => console.log(err));
  });
});
