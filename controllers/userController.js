const db = require("../models");

const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "dkpzoxzhx",
  api_key: "922435219965242",
  api_secret: "er0dB-ELRBoxUhsoweJAhLvD75E",
});

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
    console.log(req.body)
    console.log(req.user)
    db.UserCountries.create({
      CountryName: req.body.country,
      UserId: req.user.id
    })
  },
  uploadImage: function (req, res) {
    console.log("uploading image")
    console.log(req.body.data);
    cloudinary.uploader.upload(req.body.data , function(err, results){
      console.log("error: ", err);
      console.log(results);
      console.log(results.secure_url);
    });
  }
};