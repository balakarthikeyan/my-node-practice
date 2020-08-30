const path = require("path");
var fs = require("fs");

// Resolve
console.log('resolve : ' + path.resolve('async.js'));
// extName
console.log('ext name : ' + path.extname('async.js'));
// basename
console.log('basename : ' + path.basename('async.js'));

// Asynchronous read
fs.readFile("input.txt", "utf8", function (err, data) {
    debugger;
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync("input.txt");
console.log("Synchronous read: " + data.toString());

function printHello() {
    console.log("Hello !!!");
}

// Now call above function after 2 seconds
var sT = setTimeout(printHello, 2000);

// Now call above function after 3 seconds
var sI = setInterval(printHello, 3000);

// Now clear the timer
clearTimeout(sT);

// Now clear the timer
clearInterval(sI, 5000);

setImmediate(function() {
    console.log('setImmediate');
})