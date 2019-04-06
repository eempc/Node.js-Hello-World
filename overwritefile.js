var fs = require("fs");

fs.writeFile("newfile3.txt", "Hello content 2!", function (err) {
    if (err) throw err;
    console.log("Saved!");
});