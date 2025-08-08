const express = require("express");
const router = express.Router();
const {
  userLogin,
  userRegister,
  userProfile,
} = require("../controllers/user.Controller");

// Login Route
router.post("/login", userLogin);

// Register Route
router.post("/register", userRegister);

// Profile Route
router.get("/profile/:id", userProfile);

module.exports = router;
