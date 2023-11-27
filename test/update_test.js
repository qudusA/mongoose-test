const assert = require("assert");
const Users = require("../models/user");

describe("updating database", () => {
  let qudus;
  beforeEach((done) => {
    qudus = new Users({
      firstName: "qudus",
      lastName: "aliyah",
    });

    qudus
      .save()
      .then((user) => {
        done();
      })
      .catch((err) => console.log(err));
  });

  it("set and save instance method", (done) => {
    qudus.set("lastName", "olanrewaju");
    qudus
      .save()
      .then((user) => {
        console.log(user);
        assert(user.lastName === "olanrewaju");
        done();
      })
      .catch((err) => console.log(err));
  });

  it("findOne and replace", (done) => {
    Users.findOneAndUpdate({ _id: qudus._id })
      .then((user) => {
        console.log(user);
        user.lastName = "lanre";
        return user.save();
      })
      .then((user) => {
        console.log(user);
        assert(user.lastName === "lanre");
        done();
      })
      .catch((err) => console.log(err));
  });

  xit("find one and update", (done) => {
    Users.findByIdAndUpdate({ _id: qudus._id }, { firstName: "agbs" })
      .then((user) => {
        // console.log(user);
        // user.firstName = "agba";
        // return user.save();
        // return user;
        console.log(user);
        assert(user.firstName === "agbs");
        done();
      })

      //   .then((user) => {
      //     console.log(user);
      //     // assert(user.firstName === "agbs");
      //     done();
      //   })
      .catch((err) => console.log(err));
  });
});
