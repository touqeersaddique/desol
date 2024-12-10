const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  carModel: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  radioOption: {
    type: String,
    required: true,
  },
  selectedImages: {
    type: Number,
    required: true,
  },
  imagePath: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("carData", UserSchema);
