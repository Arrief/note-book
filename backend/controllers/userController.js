require("dotenv").config();
const bcrypt = require("bcrypt");
const connection = require("../config");
const jwt = require("jsonwebtoken");

// establish connection to the MySQL db with credentials from config.js
connection.connect((err) => {
  if (err) {
    console.error(`Connection to the database failed: ${err}`);
    return;
  }
  console.log("Successfully connected to the database.");
});

// process for registration of new account
module.exports.register_post = async (req, res) => {
  const { userName, email, password } = req.body;
  // first check if user already exists in DB
  const duplicate = connection.query(
    "SELECT id FROM users WHERE username = ?",
    userName
  );
  if (duplicate.length > 0)
    res.status(404).json({
      message: "This username is already taken.",
    });
  // if there is no duplicate:
  try {
    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    // create new user in the database
    connection.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [userName, email, hashedPassword],
      (err) => {
        if (err) {
          console.error(err);
          res
            .status(400)
            .send("Server error, could not register the new user into the DB");
        } else {
          res.status(201).send("Successfully registered the new user");
        }
      }
    );
  } catch (hashError) {
    console.error(hashError);
    res.status(500).json({
      message: "There was an error encrypting the password",
      hashError,
    });
  }
};

// process for logging in
module.exports.login_post = (req, res) => {
  const { email, password } = req.body;
  // invoking the custom static method created in User.js
  connection.query(
    "SELECT * FROM users WHERE email = ?",
    email,
    async (err, results) => {
      if (err) res.status(400).send("No user is registered with this email.");
      // else
      const validPassword = await bcrypt.compare(password, results[0].password);
      if (validPassword) {
        // creating a JWT for user just before sending their data to the frontend
        const generatedToken = jwt.sign(
          results[0],
          process.env.ACCESS_TOKEN_SECRET
        );
        // send user data to frontend
        res.status(200).json({
          message: "Successfully logged in!",
          userName: results[0].username,
          token: generatedToken,
        });
      } else {
        res.status(400).send("Incorrect password");
      }
    }
  );
};

// process to get user data after checking with middleware if user has a valid token
module.exports.books_get = (req, res) => {
  // foundUser property comes from authUsers middleware in routes.js, contains result of SELECT * query for user
  const user = {
    userName: req.foundUser.username,
    email: req.foundUser.email,
    password: "",
  };
  connection.query(
    "SELECT * FROM books WHERE users_id=?",
    req.foundUser.id,
    (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else if (!result) {
        res.status(200).json({
          user,
          books: "",
        });
      } else {
        res.status(200).json({
          user,
          books: result[0],
        });
      }
    }
  );
};
