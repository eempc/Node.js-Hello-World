var fs = require("fs");

fs.appendFile("mynewfile.txt", "hello content", function (err) {
    if (err) throw err;
    console.log("Saved");
});

// node appendfile.js to create a file