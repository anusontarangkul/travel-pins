const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user");


router.use("/user", userRoutes);

router.use((req , res)=>{
    res.sendFile(path.join(__dirname , "../client/build/index.html"))
});


module.exports = router;