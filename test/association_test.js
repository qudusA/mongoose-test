const assert = require("assert");
const Users = require("../models/user");
const Products = require("../models/products");
const Review = require("../models/review");

describe("association", () => {
  let ali, book, good;
  beforeEach((done) => {
    ali = new Users({
      firstName: "aliyah",
      lastName: "omo",
    });

    book = new Products({
      title: "first book",
      price: 24,
    });

    good = new Review({
      like: "good",
    });

    ali.products.push(book);
    ali.review.push(good);
    good.product.push(book);
    good.user = ali;
    book.users.push(ali);
    book.review.push(good);

    Promise.all([ali.save(), book.save(), good.save()]).then((res) => {
      //   console.log("in the promise", ali);
      done();
    });
  });
  it("user association", (done) => {
    Users.findOne({ firstName: "aliyah" })
      // .populate("products")
      .then((user) => {
        console.log(user);
        console.log(user.products[0]);
        done();
      })
      .catch((err) => console.log(err));
  });

  it.only("association drilling", (done) => {
    Users.findOne({ firstName: "aliyah" })
      .populate({
        path: "products",
        populate: {
          path: "review",
          populate: {
            path: "user",
          },
        },
      })
      .then((user) => {
        // console.log(user);
        console.log(user.products[0].review[0]);
        done();
      });
  });
});
