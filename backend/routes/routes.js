const express = require("express");
const {
  books_get,
  books_post,
  login_post,
  register_post,
} = require("../controllers/userController");
// middleware for user authentication with JWT
const authenticateUser = require("../middleware/authUser");

// creating instance of Express router
const router = express.Router();

// path for registration request of a new user
router.post("/user/register", register_post);
// path for log in request of an existing user
router.post("/user/login", login_post);
// path to get user data for profile after authenticating the JWT with middleware
router.get("/user/books", authenticateUser, books_get);
// path to insert a new book into the database
router.post("/user/books", books_post);

module.exports = router;
