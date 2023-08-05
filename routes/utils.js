const router = require('express').Router();
const fs = require("fs/promises");

router.get("/send-massage", (req,res)=>{
   res.render("send-massage.ejs", {"error_massage": ""});
});

router.post("/send", async (req,res)=>{
   const current_list = JSON.parse(await fs.readFile("./passwordGatedFiles/requests.json",
       {encoding:'utf-8'})).requests;

   let current_index = 0;
   while (true) {
      let over = true;
      for (let i = 0; i < current_list.length; i++) {
         if (current_index === current_list[i].index) {
            current_index++;
            over = false;
            break;
         }
      }

      if (over) {
         break;
      }
   }
   current_list.push({
      "name": req.body.name,
      "phone_number": req.body.phone_number,
      "description": req.body.description,
      "index": current_index
   });
   console.log(current_list);
   try {
      await fs.writeFile("./passwordGatedFiles/requests.json", JSON.stringify({requests: current_list}));
      res.render("send-massage.ejs", {"error_massage": "💐 درخواست شما با موفقیت ثبت شد 💐 "});
   } catch {
      res.render("send-massage.ejs", {"error_massage": "مشکلی در ارسال پیش اومد"});
   }
});

module.exports = router;