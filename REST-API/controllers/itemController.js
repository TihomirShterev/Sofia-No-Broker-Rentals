const { Item, User } = require("../models");
const { formValidator } = require("../utils");

module.exports = {
  get: {
    create(req, res, next) {
      res.render("./items/create.hbs");
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
          res.render("./items/details.hbs", { ...item, isCreator, isAlreadyIncremented, peopleWhoIncremented });
        })
        .catch(next);
    },

    edit(req, res, next) {
      Item.findOne({ _id: req.params.itemId }).then(item => {
        res.render("./items/edit.hbs", item);
      });
    },
    delete(req, res, next) {
      Item.deleteOne({ _id: req.params.itemId }).then(result => {
        res.redirect("/");
      });
    },
    increment(req, res, next) {
      // console.log(req.params.itemId);
      let itemId = req.params.itemId;
      // console.log(req.user._id.toString());
      let userId = req.user._id.toString();

      Promise.all([Item.updateOne({ _id: itemId }, { $push: { peopleWhoIncremented: userId } }), User.updateOne({ _id: userId }, { $push: { itemsIncremented: itemId } })])
        .then(() => {
          res.redirect(`/details/${itemId}`);
        })
        .catch(next);
    }
  },

  post: {
    create(req, res, next) {
      // console.log(req.body);
      const formValidations = formValidator(req);

      if (!formValidations.isOk) {
        res.render("./items/create.hbs", formValidations.contextOptions);
        return;
      }

      const createdAt = new Date();
      Item.create({ ...req.body, creatorId: req.user._id, createdAt })
        .then(createdItem => {
          // console.log(createdItem.toString());
          res.redirect("/");
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
