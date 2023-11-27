const assert = require("assert");
const Users = require("../models/user");

describe("deleting user", () => {
  let qudus;
  beforeEach((done) => {
    qudus = new Users({
      firstName: "qudus",
      lastName: "abiodun",
    });
    qudus
      .save()
      .then((res) => {
        console.log(res);
        done();
      })
      .catch((err) => console.log(err));
  });

  it("delete all user", (done) => {
    Users.deleteMany({ firstName: "qudus" })
      .then((user) => {
        console.log(user);
        assert(user.acknowledged === true);
        done();
      })
      .catch((err) => console.log(err));
  });

  it("model instance delete", (done) => {
    qudus
      .deleteOne()
      .then((user) => {
        console.log(user);
        assert(user.acknowledged !== false);
        done();
      })
      .catch((err) => console.log(err));
  });

  it("find one and remove", (done) => {
    Users.findOneAndDelete({ _id: qudus._id })
      .then((user) => {
        console.log(user);
        // assert(user.acknowledged === true);
        done();
      })
      .catch((err) => console.log(err));
  });
});
