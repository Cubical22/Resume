const router = require('express').Router();

router.get("/:id", (req,res)=>{
    res.download("./libraries/"+req.params.id);
});

module.exports = router;