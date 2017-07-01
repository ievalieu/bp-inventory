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




//Listener
//============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});