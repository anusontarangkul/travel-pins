const router = require("express").Router();
const userController = require("../../controllers/userController.js");
var passport = require("../../config/passport");

router
  .route("/signup")
  .post(userController.create)

  //maybe passport here 
router
  .post("/login/local", passport.authenticate("local"), function(req, res) {
  res.json(req.user);});

router
  .route("/all")
  .get(userController.findAllUser)


//maybe log out


module.exports = router;