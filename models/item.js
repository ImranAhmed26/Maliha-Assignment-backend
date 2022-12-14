const { model, Schema } = require("mongoose");

const ItemSchema = new Schema({
  type: {
    type: String,
    required: true,
  },

  subCategory: [
    {
      type: String,
      required: true,
    },
  ],
  unit: [
    {
      type: String,
      required: true,
    },
  ],

  stock: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: [true, "name required"],
    maxlength: [20, "too long"],
  },
});

exports.Item = new model("Item", ItemSchema);
