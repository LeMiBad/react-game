const express = require("express");
const fs = require("fs");

const app = express();

const newLevelPush = (newLevel) => {
    let updateLevels = JSON.parse(fs.readFileSync("data.json", "utf8"));
    updateLevels.push({
        levelId: updateLevels.length + 1,
        levelInfo: newLevel,
    });
    fs.writeFileSync("data.json", JSON.stringify(updateLevels), "utf-8");
};

const levels = JSON.parse(fs.readFileSync("data.json", "utf8"));

levels.forEach((item, index) => {
    app.get(`/levels/${index + 1}`, (req, res) => {
        res.send(levels[index]);
    });
});

app.listen(3100, () => {
    console.log("Application listening on port 3000!");
});
