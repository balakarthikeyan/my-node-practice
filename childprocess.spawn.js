const {  spawn } = require("child_process");

let file = "./sources/file.bat",
    args = [],
    options = {};

// child_process.spawn (command[, argsArray][, optionsObject])
fileExec = spawn(file, args, { shell: true });
fileExec.stdout.on("data", (data) => {
    console.log(data.toString());
});
fileExec.stderr.on("data", (data) => {
    console.log("Error: " + data);
});
fileExec.on("close", (code) => {
    console.log("Process exit code: " + code);
});