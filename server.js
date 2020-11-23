var express = require("express");
var session = require("express-session");
//var passport = require("./config/passport");
const routes = require("./routes");

var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//app.use(express.static(__dirname + '/public'));

//passport stuff

app.use(routes);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });