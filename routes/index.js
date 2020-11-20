const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");


//when open up the app check to see if need calls 
router.use("/api" , apiRoutes);

router.use((req , res)=>{
    res.sendFile(path.join(__dirname , "../client/build/index.html"))
});


module.exports = router;