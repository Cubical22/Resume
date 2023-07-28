const router = require('express').Router();

router.get("/:id", (req,res)=>{
    res.render("sample_projects/"+req.params.id);
});

module.exports = router;