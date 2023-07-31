const router = require("express").Router();
const fs = require("fs/promises");

router.get("/", (req,res)=>{
   res.render("log-page.ejs", {msg: "please enter the web page at '/admin/[admin-password]' using the password you received to use this page"});
});

router.get("/:id", async (req,res)=> {
   if (req.params.id === await fs.readFile("./info.env", {encoding: "utf-8"})) {
      res.render("admin-page.ejs", {code: req.params.id});
   } else {
      res.render("log-page.ejs", {msg: "access denied. please don't try to enter the admin panel if you are not the admin. (WRONG ADMIN CODE). check for misspells and upper cases (case sensitivity)."});
   }
});

module.exports = router;