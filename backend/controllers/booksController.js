require("dotenv").config();
const connection = require("../config");

// establish connection to the MySQL db with credentials from config.js
connection.connect((err) => {
  if (err) {
    console.error(`Connection to the database failed: ${err}`);
    return;
  }
  console.log("Successfully connected to the database.");
});

// process to get all books for specific user
module.exports.books_get = (req, res) => {
  // foundUser property comes from authUsers middleware in routes.js, contains result of SELECT * query for user
  const userId = req.foundUser.id;
  connection.query(
    "SELECT * FROM books WHERE users_id=?",
    userId,
    (err, result) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Error retrieving list of books.", err });
      } else if (!result) {
        res.status(200).json([]);
      } else {
        res.status(200).json(result);
      }
    }
  );
};

// process to insert a new book into the database
module.exports.books_post = (req, res) => {
  // foundUser property comes from authUsers middleware in routes.js, contains result of SELECT * query for user
  const { title, author, category } = req.body.book;
  const userId = req.body.userId;
  connection.query(
    "INSERT INTO books (title, author, category, users_id) VALUES (?, ?, ?, ?)",
    [title, author, category, userId],
    (err) => {
      if (err)
        res
          .status(500)
          .json({ message: "Failed to insert book into database", err });
      // else:
      res.status(201).send("New book added into the database.");
    }
  );
};

// process to add a new note into the database
module.exports.notes_post = (req, res) => {
  const { content, page, link, type } = req.body.newNote;
  const bookId = req.body.bookId;
  connection.query(
    "INSERT INTO notes (content, page, link, type, books_id) VALUES (?, ?, ?, ?, ?)",
    [content, page, link, type, bookId],
    (err) => {
      if (err)
        res
          .status(500)
          .json({ message: "Failed to insert note into database", err });
      // else:
      res.status(201).send("New note added into the database.");
    }
  );
};

// process to get all notes for one specific book
module.exports.notes_get = (req, res) => {
  const bookId = req.params.id;
  connection.query(
    "SELECT * FROM notes WHERE books_id=?",
    bookId,
    (err, result) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Error retrieving notes for this book.", err });
      } else if (!result) {
        res.status(200).json([]);
      } else {
        res.status(200).json(result);
      }
    }
  );
};
