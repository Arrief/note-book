require("dotenv").config();
const bcrypt = require("bcrypt");
const connection = require("../config");
const jwt = require("jsonwebtoken");

// process for logging in
const loginPost = (req, res) => {
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
          userId: results[0].id,
          userName: results[0].username,
          token: generatedToken,
        });
      } else {
        res.status(400).send("Incorrect password");
      }
    }
  );
};

module.exports = loginPost;
