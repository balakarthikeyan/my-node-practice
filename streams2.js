//Unix pipes and can be classified into five types: readable, writable, transform, duplex and "classic".
var crypto = require("crypto");
var fs = require("fs");
var zlib = require("zlib");

var password = process.env.PASS || "password";
var encryptStream = crypto.createHash("sha1", password);

var gzip = zlib.createGzip();
var readStream = fs.createReadStream(__filename); // current file
var writeStream = fs.createWriteStream(__dirname + "./sources/out.gz");

readStream // reads current file
    .pipe(encryptStream) // encrypts
    .pipe(gzip) // compresses
    .pipe(writeStream) // writes to out file
    .on("finish", function () {
      console.log("Program Ended");
    });

// Compress the file input.txt to input.txt.gz
// fs.createReadStream('./sources/input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./sources/input.txt.gz'));

// Decompress the file input.txt.gz to input.txt
// fs.createReadStream('./sources/input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('./sources/input.txt'));

