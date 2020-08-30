// child process to call the dir command to print the directory
const os = require("os");
let osType = os.platform();

// Endianness
console.log('endianness : ' + os.endianness());
// OS type
console.log('type : ' + os.type());
// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");
// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");

// child_process.spawn (command[, argsArray][, optionsObject])
let { spawn } = require("child_process");
let dir;
let command, args = [], options = {};
if (osType == "win32") {
    command = "dir";
    options.shell = true;
} else {
    command = "ls";
}
dir = spawn(command, args, options);
console.log("OS : " + osType, "Command : " + command);

dir.stdout.on("data", (data) => {
    console.log(data.toString());
});
dir.stderr.on("data", (data) => {
    console.log("Error: " + data);
});
dir.on("close", (code) => {
    console.log("Process exit code: " + code);
});

// The difference between spawn and exec is that the spawn method will return all the data as a stream, 
// whereas the exec method returns data as a buffer.

//child_process.exec(command[, options][, callback])
let { exec } = require("child_process");
let commands = "dir",
    option = { encoding: "utf8" },
    dirs = exec(commands, option);

dirs.stdout.on("data", (data) => {
    console.log(data);
});
dirs.stderr.on("data", (data) => {
    console.log("Error: " + data);
});
dirs.on("close", (code) => {
    console.log("Process exit code: " + code);
});