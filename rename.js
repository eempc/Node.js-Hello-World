var fs = require("fs");

fs.rename("mynewfile.txt", "samefiledifferentname.txt", function (err) {
    if (err) throw err;
    console.log("File renamed");
});