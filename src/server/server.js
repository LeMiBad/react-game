const express = require("express");
const fs = require("fs");

const app = express();

const levels = JSON.parse(fs.readFileSync("db.json", "utf8"));

// const newLevelPush = (newLevel) => {
//     let updateLevels = JSON.parse(fs.readFileSync("db.json", "utf8"));
//     updateLevels.push({
//         levelId: updateLevels.length + 1,
//         levelInfo: newLevel,
//     });
//     fs.writeFileSync("db.json", JSON.stringify(updateLevels), "utf-8");
// };

levels.forEach((item, index) => {
    app.get(`/levels/${index + 1}`, (req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.send(levels[index]);
    });
});

app.listen(3100, () => {
    console.log("Application listening on port 3100!");
});
