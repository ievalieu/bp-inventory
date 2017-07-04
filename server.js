// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql");

// Create Instance of Express
const app = express();

// Sets an initial port. We'll use this later in our listener
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./assets"));

// -------------------------------------------------

//	MySQL Configuration
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bp-db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

// model:
// id
// vendor-id
// name
// description
// stock
// threshold
// location


// connection.query("SELECT * FROM products", function(err, res) {
//   if (err) throw err;
//   console.log(res);
// });


//Listener
//============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});