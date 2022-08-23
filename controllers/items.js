const { Item } = require("../models/Item");

const getItems = async (req, res) => {
  try {
    const items = await Item.find({});
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const postItems = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json({ item });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getItem = async (req, res) => {
  try {
    const { id: itemID } = req.params;
    const item = await Item.findOne({ _id: itemID });
    if (!item) {
      return res.status(404).json({ msg: `Item with id: ${itemID} not found` });
    }
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id: itemID } = req.params;
    const item = await Item.findOneAndDelete({ _id: itemID });
    if (!item) {
      return res.status(404).json({ msg: `Item with id: ${itemID} not found` });
    }
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const patchItem = async (req, res) => {
  try {
    const { id: itemID } = req.params;
    const item = await Item.findOneAndUpdate({ _id: itemID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!item) {
      return res.status(404).json({ msg: `Item with id: ${itemID} not found` });
    }
    res.status(200).json({ item });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = { getItems, postItems, getItem, patchItem, deleteItem };
