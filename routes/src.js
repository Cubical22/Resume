const router = require('express').Router();

router.get("/images/:id", (req,res)=>{
    console.log(req.params.id);
    res.download("./images/" + req.params.id);
});

router.get("/sample-project-thumbnails/:id", (req,res)=>{
    res.download("./images/sample-projects/"+req.params.id);
});

router.get("/restaurant/:id", (req,res)=>{
    res.download("./images/restaurant/" + req.params.id);
})

router.get("/js/:id", (req,res)=>{
   res.download("./src/js/"+req.params.id);
});

router.get("/css/:id", (req,res)=>{
    res.download("./src/css/"+req.params.id);
});

router.get("/svg/:id", (req,res)=>{
    res.download("./src/svg/"+req.params.id);
});

router.get("/assets/:id", (req,res)=>{
    console.log("requested");
    res.download("./src/assets/"+req.params.id);
})


module.exports = router;