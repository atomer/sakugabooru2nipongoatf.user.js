var fs = require("fs");
var userjs = fs.readFileSync("dist/sakugabooru2nipongoatf.user.js");
var header = fs.readFileSync("src/meta/header.js.txt");
var footer = fs.readFileSync("src/meta/footer.js.txt");

fs.writeFileSync("dist/sakugabooru2nipongoatf.user.js", header + userjs + footer);