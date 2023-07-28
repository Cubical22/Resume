const router = require('express').Router();

router.get("/:id", (req,res)=>{
    res.render("abilities/" + req.params.id + ".ejs");
});

module.exports = router;