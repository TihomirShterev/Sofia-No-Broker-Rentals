const { Item, User } = require("../models");

module.exports = {
  get: {
    home(req, res, next) {
      // check if user is logged
      // (this way we avoid implementing separate functions (get.guest and get.loggedIn) and adding isAuthNeededMiddleware in homeRouter.js)
      if (req.user) {
        let search = {};
        if (req.query.search) {
          let searchArgs = req.query.search;
          // console.log(searchArgs);
          search = { title: { $regex: new RegExp(searchArgs, "i") } };
        }

        Item.find(search)
          .lean()
          .sort({ createdAt: "asc" })
          // .sort({ peopleWhoIncremented: -1 })
          // // .sort({ peopleWhoIncremented: "desc" })
          .then(items => {
            // console.log(items);
            res.render("./home/loggedIn.hbs", {
              items
            });
          })
          .catch(e => console.log(e));

        return;
      }

      Item.find({})
        .lean()
        .sort({ peopleWhoIncremented: -1 })
        // .sort({ peopleWhoIncremented: "desc" })
        .limit(3)
        .then(items => {
          // console.log(items);
          res.render("./home/guest.hbs", {
            items
          });
        })
        .catch(e => console.log(e));
    }
  }
};
