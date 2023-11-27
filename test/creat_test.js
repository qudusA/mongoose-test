const assert = require("assert");
const Users = require("../models/user");

describe("creation of test", () => {
  it("saved", (done) => {
    const qudus = new Users({
      firstName: "qudus",
      lastName: "olanrewaju",
    });

    qudus
      .save()
      .then((res) => {
        assert(!qudus.isNew);
        done();
      })
      .catch((err) => console.log(err));
  });
});
