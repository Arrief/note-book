require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/routes");

const port = process.env.PORT || 3000;

const app = express();

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// routes
app.use(routes);

app.listen(port, (err) => {
  if (err) console.error("Failed to connect to the server...", err);
  console.log(`The server is running, listening on port ${port}.`);
});
