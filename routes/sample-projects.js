const router = require('express').Router();
const sample_project_holder = require("./../routes/sample-projects-holder");

router.get("/request-all", (req,res)=>{
    // send the entirety of the sample projects upon requesting
    res.send(sample_project_holder);
});

router.get("/:id", (req,res)=>{
    // sending the display of sample projects
    res.render("sample_projects/"+req.params.id);
});

module.exports = router;