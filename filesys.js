var fs = require("fs");

fs.writeFile('./sources/input.txt', "1. Hello World!\n", function (err) {
	if (err) {
		return console.error(err);
	} else
        console.log('Write operation complete.');
});

fs.appendFile('./sources/input.txt', '2. Hello World!', function (err) {
	if (err) {
		return console.error(err);
	}
    console.log('Append operation complete.');
});

fs.readFile('./sources/input.txt', 'utf8', function(err, data) {
    debugger;
	if (err) {
		return console.error(err);
	}
	console.log('Asynchronous read: ' + data.toString());
});

// fs.unlink('input.txt', function () {
//     console.log('Delete operation complete.');
// });

// Read the contents of the file into memory.
const   Parser = require('./parser');
fs.readFile("./sources/tests.txt", function (err, logData) {
    if (err) throw err;
    // logData is a Buffer, convert to string.
    var text = logData.toString();
    results =  Parser.parser(text);
    console.log(results);
});