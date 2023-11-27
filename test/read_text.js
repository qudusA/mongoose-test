const assert = require("assert");
const { describe } = require("mocha");
const Users = require("../models/user");
const { default: mongoose } = require("mongoose");

describe("reading from db", () => {
  let qudus;
  beforeEach((done) => {
    qudus = new Users({
      firstName: "qudus",
      lastName: "olanrewaju",
    });
    qudus
      .save()
      .then((res) => {
        done();
      })
      .catch((err) => console.log(err));
  });

  it("find all func", (done) => {
    Users.find({ firstName: "qudus" })
      .then((users) => {
        console.log(users);
        assert(users[0]._id.toString() === qudus._id.toString());
        done();
      })
      .catch((err) => console.log(err));
  });

  it("find by id", (done) => {
    Users.findOne({ _id: qudus._id })
      .then((user) => {
        console.log(user);
        assert(user.firstName === "qudus");
        done();
      })
      .catch((err) => console.log(err));
  });
});
