var override = require('method-override');
var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql2");
// Set Handlebars.
var exphbs = require("express-handlebars");


var app = express();

var port = process.env.PORT || 3000;
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);
