const db = require("../models");
//var passport = require("../config/passport");

module.exports = {
  findOne: function (req, res) {
    //console.log(req.body)
    //need to log in maybe passport here?
    ///needs to redirect user to home page so make a middleware in config
    db.User.findOne({
        where: {username: req.body}
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    //console.log(req.body)
    db.User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  findAllUser: function (req, res) {
    db.User.findAll()
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
};