require("dotenv").config();
const jwt = require("jsonwebtoken");

// middleware to check if user has valid JWT
const authenticateUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // authHeader = a string, when split: [0] = "Bearer", [1] = token itself
  const token = authHeader && authHeader.split(" ")[1];
  if (token === undefined) return res.sendStatus(401);
  // else: verify token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    // else:
    req.foundUser = user;
    next();
  });
};

module.exports = authenticateUser;
