const { Item, User } = require("../models");

module.exports = {
  get: {
    items(req, res, next) {
      Item.find({}) // find({}), за да вземем всички записи в базата
      .lean()
        // .sort({ peopleWhoIncremented: -1 })
        // // .sort({ peopleWhoIncremented: "desc" }) // втори вариант
        .then(items => {
          // console.log(items);
          res.json(items);
          // res.render("./items/items.hbs", {
          //   items
          // });
        })
        .catch(e => console.log(e));
    },

    create(req, res, next) {
      // res.render("./items/create.hbs");
    },
    details(req, res, next) {
      let itemId = req.params.itemId;
      let isCreator = false;
      let isAlreadyIncremented = false;
      // console.log(req.user._id);
      let userId = req.user._id.toString();
      let peopleWhoIncremented = 0;

      Item.findOne({ _id: itemId })
        .lean()
        .then(item => {
          item.creatorId.toString() === userId ? (isCreator = true) : (isCreator = false);
          if (item.peopleWhoIncremented) {
            peopleWhoIncremented = item.peopleWhoIncremented.length;
            // console.log(item.peopleWhoIncremented.toString());
            if (item.peopleWhoIncremented.toString().includes(userId)) {
              isAlreadyIncremented = true;
            }
          }
          res.json(item);
          // res.render("./items/details.hbs", { ...item, isCreator, isAlreadyIncremented, peopleWhoIncremented });
        })
        .catch(next);
    },

    edit(req, res, next) {
      Item.findOne({ _id: req.params.itemId }).then(item => {
        console.log(item);
        // res.render("./items/edit.hbs", item);
      });
    },
    delete(req, res, next) {
      Item.deleteOne({ _id: req.params.itemId }).then(result => {
        res.redirect("/items");
      });
    },
    increment(req, res, next) {
      // console.log(req.params.itemId);
      let itemId = req.params.itemId;
      // console.log(req.user._id.toString());
      let userId = req.user._id.toString();

      Item.updateOne({ _id: itemId }, { $push: { peopleWhoIncremented: userId } })
        .then(() => {
          res.redirect(`/details/${itemId}`);
        })
        .catch(next);
    }
  },

  post: {
    create(req, res, next) {
      // console.log(req.body);
      Item.create({ ...req.body, creatorId: req.user._id })
        .then(createdItem => {
          // console.log(createdItem.toString());
          res.redirect("/items");
        })
        .catch(next);
    },

    edit(req, res, next) {
      // console.log(req.params.itemId);
      // console.log(req.body);
      const { itemId } = req.params;

      Item.updateOne({ _id: itemId }, { $set: { ...req.body } }).then(updatedItem => {
        res.redirect(`/details/${itemId}`);
      });
    }
  }
};
