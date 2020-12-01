const db = require("../models");
const { Op } = require("sequelize");
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
    console.log("controller hit")
    db.User.findAll({  
      where: {
      id: req.user.id,
    }
  })
    .then((user) => {
      console.log(user); 
      res.json(user);
    })
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
    // console.log(req.body.countryCode);
    // console.log(req.user)
    cloudinary.uploader.upload(req.body.data, function (err, results) {
      console.log("error: ", err);
      //need to save the image url in db also the country code from map
      db.Photos.create({
        photoUrl: results.secure_url,
        country: req.body.countryCode,
        UserId: req.user.id
        //maybe send back a message to the user 
      });
    });
  },

  findAllCountries: function (req, res) {
    db.UserCountries.findAll({
      where: {
        UserId: req.user.id,
      }
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  searchUsername: function (req, res) {
    console.log(req.body)
    db.User.findAll({
      where: {
        username: req.body.search
      }
    })
      .then((user) => res.json(user))
      .catch((err) => res.status(422).json(err));
  },
  //findaAlluser countries for user id (req.user.id)
  addFollow: function(req, res) {
    console.log(req.body)
    db.Followers.create({
      following: req.body.userId,
      UserId: req.user.id
    })
      .then((result) => res.json(result))
      .catch((err) => res.status(422).json(err));
  },
  getFollowing: function(req, res) {
    db.Followers.findAll({
      where: {
        UserId: req.user.id
      }
    })
      .then((result) => {
        res.json(result)
      })
      .catch((err) => res.status(422).json(err));
  },
  getFollowers: function(req, res) {
    db.Followers.findAll({
      where: {
        following: req.user.id
      }
    })
      .then((result) => {
        res.json(result)
      })
      .catch((err) => res.status(422).json(err));
  },
  feed: function(req, res) {
    console.log(req.body.followingId)
    db.Photos.findAll({
      where: {
        [Op.or]: req.body.followingId
      }
    })
      .then((result) => {
        res.json(result)
      })
      .catch((err) => res.status(422).json(err));
  },
  userPhotos: function(req, res) {
    db.Photos.findAll({
      where: {
        UserId: req.user.id
      }
    })
      .then((result) => {
        res.json(result)
      })
      .catch((err) => res.status(422).json(err));
  },
  logout: function (req, res) {
    console.log("logged out");
    req.logout();
    res.redirect('/');
  }

};