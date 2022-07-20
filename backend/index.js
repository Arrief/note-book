require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.listen(port, (err) => {
  if (err) console.error("Failed to connect to the server...", err);
  console.log(`The server is running, listening on port ${port}.`);
});
