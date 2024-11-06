// routes/user.routes.js
const router = require("express").Router();
const UserController = require('../controller/userController');

// POST route for user registration
router.post("/registration", UserController.register);
router.post("/login", UserController.login);
module.exports = router;
