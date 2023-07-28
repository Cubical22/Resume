const router = require("express").Router();

router.get("/:id", (req,res)=>{
    res.download("assets/" + req.params.id);
});

module.exports = router;