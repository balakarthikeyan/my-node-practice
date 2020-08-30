// function Parser () {};
// Parser.prototype.parser = function (text) {
//     var results = {};
//     // Break up the file into lines.
//     var lines = text.split("\n");
//     lines.forEach(function (line) {
//         var parts = line.split(" ");
//         var letter = parts[1];
//         var count = parseInt(parts[2]);
//         if (!results[letter]) {
//             results[letter] = 0;
//         }
//         results[letter] += parseInt(count);
//     });
//     return results;
// }

class Parser {
	// constructor(name) {
    //     this.name = name;
    // }
    parser(text) {
        var results = {};
        // Break up the file into lines.
        var lines = text.split("\n");
        lines.forEach(function (line) {
            var parts = line.split(" ");
            var letter = parts[1];
            var count = parseInt(parts[2]);
            if (!results[letter]) {
                results[letter] = 0;
            }
            results[letter] += parseInt(count);
        });
        return results;
    }
}

module.exports = new Parser();