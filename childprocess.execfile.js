const { execFile } = require("child_process");

let file = "./sources/file.bat",
    args = [],
    options = {};

// child_process.execFile(file[, args][, options][, callback])
execFile(file, args, options, (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        console.log(stderr);
    } else {
        console.log(stdout);
    }
});