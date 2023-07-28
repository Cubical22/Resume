const express = require('express');
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const fs = require("fs/promises");
const src = require("./routes/src");
const sample_projects = require("./routes/sample-projects");
const admin_route = require("./routes/admin");
const ability_description = require("./routes/ability_description");
const libraries = require("./routes/libraries");
const utils = require('./routes/utils');
const assets = require('./routes/assets');

const sample_projects_holder = require("./routes/sample-projects-holder");
const text_share_texts_holder = require("./routes/text-share-texts");

app.use(express.urlencoded({extended: true}));
app.use("/src", src);
app.use("/sample-projects", sample_projects);
app.use("/ability-description", ability_description);
app.use("/libraries", libraries);
app.use("/admin", admin_route);
app.use("/utils", utils);
app.use("/assets", assets);

io.on("connect", (socket)=>{
    socket.on("send-sample-projects", (callback)=>{
        callback(sample_projects_holder);
    });

    socket.on("send-text-share-text-list", async (callback)=>{
        callback(await text_share_texts_holder.fetchList());
    });

    socket.on("recieve-text-share-text-input", async (text, callback)=>{
        const list = await text_share_texts_holder.fetchList();
        list.push(text);
        await text_share_texts_holder.replaceList(list);
        callback(list);
    });

    socket.on("remove-text-share-item", async (text,password,callback)=>{
        if (password === await fs.readFile(".env", {encoding: "utf-8"})) {
            console.log("user identified as admin");
            const list = await text_share_texts_holder.fetchList();
            list.splice(list.indexOf(text),1);
            await text_share_texts_holder.replaceList(list);
            //text_share_texts_holder.splice(text_share_texts_holder.indexOf(text), 1);
            callback(list);
        }
    });

    socket.on("send-requests-list", async (password, callback) => {
        if (password === await fs.readFile(".env", {encoding: "utf-8"})) {
            const list = JSON.parse(await fs.readFile("./saves/requests_list.txt", {encoding: "utf-8"}));
            callback(list);
        }
    });

    socket.on("remove-request", async (password, req, callback)=>{
        if (password === await fs.readFile(".env", {encoding: "utf-8"})) {
            const list = JSON.parse(await fs.readFile("./saves/requests_list.txt", {encoding: "utf-8"}));
            for (let i = 0; i < list.length; i++) {
                if (req.index === list[i].index) {
                    list.splice(i, 1);
                    break;
                }
            }
            console.log(req, list);
            await fs.writeFile("./saves/requests_list.txt", JSON.stringify(list));
            callback();
        }
    })
});

app.get("/", (req,res)=>{
    res.render("main.ejs");
});

app.get("/sample-projects",(req,res)=>{
    res.render("sample-projects.ejs");
});

http.listen("3000",()=>{
    console.log("web running on port 3000| http://localhost:3000");
});