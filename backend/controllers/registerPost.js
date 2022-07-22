const bcrypt = require("bcrypt");
const connection = require("../config");

// process for registration of new account
const registerPost = async (req, res) => {
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

module.exports = registerPost;
