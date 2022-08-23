const express = require("express");
const router = express.Router();

const { getItems, postItems, getItem, patchItem, deleteItem } = require("../controllers/items");

router.route("/").get(getItems).post(postItems);
router.route("/:id").get(getItem).patch(patchItem).delete(deleteItem);

module.exports = router;
