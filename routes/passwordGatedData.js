const fs = require("fs/promises");

const router = require("express").Router();

router.get("/requests/:id", async (req,res)=>{
    if (req.params.id === await fs.readFile("./info.env", {encoding: "utf-8"})) {
        res.json(await fs.readFile("./passwordGatedFiles/requests.json", {encoding: "utf-8"}));
    }
});

router.get("/requests-remove/:id/:pass", async (req,res)=>{
    if (req.params.pass === await fs.readFile("./info.env", {encoding: "utf-8"})) {
        const json = JSON.parse(await fs.readFile("./passwordGatedFiles/requests.json", {encoding: "utf-8"}));
        const newRequestsList = json.requests.filter(request => {
            console.log("compared: ", request.index, req.params.id);
            return request.index !== JSON.parse(req.params.id);
        });
        const newJson = {requests: newRequestsList};
        await fs.writeFile("./passwordGatedFiles/requests.json", JSON.stringify(newJson), {encoding: "utf-8"});

        res.json(newJson);

    }
});

module.exports = router;