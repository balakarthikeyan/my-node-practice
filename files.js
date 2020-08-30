var fs = require("fs");
console.log("Directory path : ", __dirname);
console.log("Filename : ", __filename );

// fs.open(path, flags[, mode], callback)
fs.open("./sources/input.txt", "r", function (err, fd) {
    if (err) {
        return console.error(err);
    }

    var buffer = new Buffer.alloc(1024);

    // fs.read(fd, buffer, offset, length, position, callback)
    fs.read(fd, buffer, 0, buffer.length, 0, function (err, bytes) {
        if (err) throw err;

        // Print only read bytes to avoid junk.
        if (bytes > 0) {
            console.log('Reading Buffer : ');
            console.log(buffer.slice(0, bytes).toString());
        }

        // Close the opened file.
        fs.close(fd, function (err) {
            if (err) throw err;
            console.log("File closed successfully.");
        });
    });
});

fs.stat('./sources/input.txt', function (err, stats) {
    if (err) {
       return console.error(err);
    }
    console.log(stats);
    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());    
 });

//  fs.mkdir(path[, mode], callback)
//  fs.rmdir(path, callback)

fs.readdir(__dirname, function(err, files) {
    if (err) {
        return console.error(err);
    }
    console.log("Reading successfully!");
    files.forEach( function (file) {
        console.log( file );
    });
});