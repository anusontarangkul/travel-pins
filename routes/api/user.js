const router = require("express").Router();
const userController = require("../../controllers/userController.js");
var passport = require("../../config/passport");

router
  .route("/signup")
  .post(userController.create)

//maybe passport here 
router
  .post("/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

router
  .route("/user_data")
  .get(userController.findAllUserInfo)

router
  .route("/saved")
  .get(userController.findAllCountries)

router
  .route("/traveled")
  .post(userController.addTraveled)

router
  .route("/logout")
  .get(userController.logout)

router
  .route("/upload")
  .post(userController.uploadImage)

  router
  .route("/searchUsername")
  .post(userController.searchUsername)

  router
  .route("/follow")
  .post(userController.addFollow)

  router
  .route("/following")
  .get(userController.getFollowing)

module.exports = router;