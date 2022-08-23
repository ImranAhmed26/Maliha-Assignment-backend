const { Item } = require("../models/Item");

const getItems = (req, res) => {
  res.send("get all items");
};

const postItems = async (req, res) => {
  const item = await Item.create(req.body);
  res.status(201).json({ item });
};

const getItem = (req, res) => {
  res.send({ id: req.params.id });
};

const patchItem = (req, res) => {
  res.send("edit an item");
};

const deleteItem = (req, res) => {
  res.send("delete an item");
};

module.exports = { getItems, postItems, getItem, patchItem, deleteItem };
