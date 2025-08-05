const express = require('express');
const router = express.Router();
const {userLogin, userRegister } = require('../controllers/user.Controller');

// Login Route
router.post('/login', userLogin);

// Register Route
router.post('/register', userRegister);

module.exports =router;