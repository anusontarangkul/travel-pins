const db = require("../models");
//var passport = require("../config/passport");

module.exports = {
  create: function (req, res) {
    console.log(req.body)
    db.User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  findAllUserInfo: function (req, res) {
    db.User.findAll({
      where: {
        UserId: req.user.id,
      }
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  addTraveled: function (req, res) {
    console.log(req.body.countryCode)
    console.log(req.user)
    db.UserCountries.create({
      CountryName: req.body,
      UserId: req.user.id
    })
  }
};