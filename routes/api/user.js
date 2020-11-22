const router = require("express").Router();
const userController = require("../../controllers/userController.js");

router
  .route("/signup")
  .post(userController.create)

  //maybe passport here 
router
  .route("/login")
  .post(userController.findOne)

router
  .route("/all")
  .get(userController.findAllUser)


//maybe log out


module.exports = router;