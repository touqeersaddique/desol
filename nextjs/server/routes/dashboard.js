const express = require("express");
const multer = require("multer");
const carData = require("../models/carData");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });
const uploadMultiple = upload.array("images", 5);

router.post("/dashboard", uploadMultiple, async (req, res) => {
  try {
    const { carModel, Price, Phone, radioOption, selectedImages } = req.body;
    const imagePaths = req.files ? req.files.map((file) => file.path) : [];

    if (imagePaths.length === 0) {
      return res.status(400).json({ message: "Image upload failed" });
    }

    const newCarData = new carData({
      carModel,
      price: Price,
      phone: Phone,
      radioOption,
      selectedImages,
      imagePaths,
    });

    await newCarData.save();
    res
      .status(201)
      .json({ message: "Car data saved successfully", carData: newCarData });
  } catch (err) {
    console.error("Error saving car data:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
