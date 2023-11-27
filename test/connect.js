const mongoose = require("mongoose");

before((done) => {
  mongoose.connect("mongodb://127.0.0.1/mongotut");
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.log(err));

  mongoose.connection
    .once("open", () => {
      // console.log("connected");
      done();
    })
    .on("error", (err) => {
      console.warn("warning", err);
    });
});

beforeEach((done) => {
  const { users, reviews, products } = mongoose.connection.collections;

  //   mongoose.connection.collections.users.drop(() => {
  //     mongoose.connection.collections.reviews.drop(() => {
  //       mongoose.connection.collections.products.drop(() => done());
  //     });
  //   });

  users.drop(() => {
    reviews.drop(() => {
      products.drop(() => {
        done();
      });
    });
  });
});
