var fs = require("fs");
var data = "";

// Create a readable stream
var readerStream = fs.createReadStream("./sources/input.txt");

// Set the encoding to be utf8.
readerStream.setEncoding("UTF8");

// Handle stream events --> data, end, and error
readerStream.on("data", function (chunk) {
    data += chunk;
});

readerStream.on("end", function () {
    console.log(data);
});

readerStream.on("error", function (err) {
    console.log(err.stack);
});

// Create a writable stream
var writerStream = fs.createWriteStream('./sources/output.txt');

// Pipe the read and write operations 
readerStream.pipe(writerStream);
