const fs = require("fs/promises");

async function fetchList() {
    const list = JSON.parse(await fs.readFile("./saves/text-share-save.txt", {encoding: "utf-8"}));
    return list;
}

async function replaceList(new_list) {
    await fs.writeFile("./saves/text-share-save.txt",JSON.stringify(new_list), {encoding: "utf-8"});
}

module.exports = {
    fetchList: fetchList,
    replaceList: replaceList
};