const express = require("express");
const router = new express.Router();

const UserData = require("../module/cattledata");



router.post("/create",async (req, res) => {
  try {
    const userData = await UserData.create(req.body);
    res.json(userData);
  } catch (error) {
    console.log("Error found in adding ", error);
  }
});