const express = require("express");
const loginPost = require("../controllers/loginPost");
const registerPost = require("../controllers/registerPost");
const {
  books_get,
  books_post,
  notes_get,
  notes_post,
} = require("../controllers/booksController");
// middleware for user authentication with JWT
const authenticateUser = require("../middleware/authUser");

// creating instance of Express router
const router = express.Router();

// path for registration request of a new user
router.post("/user/register", registerPost);
// path for log in request of an existing user
router.post("/user/login", loginPost);
// path to get user data for profile after authenticating the JWT with middleware
router.get("/user/books", authenticateUser, books_get);
// path to insert a new book into the database
router.post("/user/books", books_post);
// path to get data and notes for one specific book
router.get("/user/books/:id", notes_get);
// path to insert a new note/quote into the database
router.post("/user/books/notes", notes_post);

module.exports = router;
