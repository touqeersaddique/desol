const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("../models/userModal");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await users.findOne({ email: email, password: password });

  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ email: user.email }, "JWT_SECRET", {
    expiresIn: "1h",
  });

  res.status(200).json({ message: "Login successful", token });
});

module.exports = router;
