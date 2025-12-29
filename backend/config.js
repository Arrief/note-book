const mysql = require("mysql2");

// link to connect to online MySQL database hosted on railway.app
// const railwayDatabase = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.PORT}/${process.env.DB_DATABASE}`;

const connection = mysql.createConnection(
  //! UNCOMMENT const railwayDatabse AND LINE BELOW & COMMENT OUT OBJECT BELOW WHEN USING AN EXTERNAL HOSTED DATABASE
  // railwayDatabase
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  }
);

module.exports = connection;
