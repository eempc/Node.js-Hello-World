var fs = require("fs");

var filename = "newfile3.txt";

fs.unlink(filename, function (err) {
    if (err) throw err;
    console.log(filename + " deleted");
});