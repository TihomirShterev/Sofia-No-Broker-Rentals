const { itemModel } = require("../models");

function getItems(req, res, next) {
  itemModel
    .find()
    .populate("userId")
    .then(items => res.json(items))
    .catch(next);
}

function getItem(req, res, next) {
  const { itemId } = req.params;

  itemModel
    .findById(itemId)
    .then(item => res.json(item))
    .catch(next);
}

function createItem(req, res, next) {
  const { title, postText } = req.body;
  const { _id: userId } = req.user;

  itemModel
    .create({ title, postText, userId, peopleWhoIncremented: [userId] })
    .then(item => {
      res.status(200).json(item);
    })
    .catch(next);
}

function increment(req, res, next) {
  const itemId = req.params.itemId;
  const { _id: userId } = req.user;
  itemModel
    .findByIdAndUpdate({ _id: itemId }, { $addToSet: { peopleWhoIncremented: userId } }, { new: true })
    .then(updatedItem => {
      res.status(200).json(updatedItem);
    })
    .catch(next);
}

module.exports = {
  getItems,
  createItem,
  getItem,
  increment
};
