const express = require("express");
const User = require("../model/User.js");

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await User.find();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const data = await User.findById(req.params.id);
  res.json(data);
});

router.delete("/:id", async (req, res) => {
  const data = await User.findByIdAndDelete(req.params.id);
  res.json(data);
});

router.post("/", async (req, res) => {
  const data = req.body;
  console.log(data);
  const newUser = new User(data);
  const saved = await newUser.save();
  res.json(saved);
});

router.put("/:id", async (req, res) => {
  const data = req.body;
  const updated = await User.findByIdAndUpdate(req.params.id, data, {
    new: true,
  });
  res.json(updated);
});

module.exports = router;
