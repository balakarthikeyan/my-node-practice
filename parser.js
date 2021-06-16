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
	constructor(text) {
        this.data = text;
        this.words = {};
    }
    parser() {
        var results = {};
        var lines   = this.data.split("\n");
        var lineno  = 1;
        var ignoreCase = false;
        lines.forEach(function (line) {
            line = line.replace(/^\s+/, "").replace(/\s+$/, "");
            var parts = line.split(/\s+/);
            var words = {};
            parts.forEach(function (keyword) {
                keyword = keyword.replace(/^\s+/, "").replace(/\s+$/, "");
                if(!ignoreCase) { keyword = keyword.toLowerCase(); }
                if (words.hasOwnProperty(keyword)) {
                    words[keyword]++;
                } else {
                    words[keyword]=1;
                }
            });
            if (!results[lineno]) {
                results[lineno] = words;
            }
            lineno++;
        });
        this.words = results;
    }
    sortByCount () {
        var words = this.words;
        var results = [];
        results = Object.keys(words).map(function (key) {
            return {
                name: key,
                total: words[key]
            };
        });      
        results.sort(function (a, b) {
            return b.total - a.total;
        });      
        return results;
    }    
}

module.exports = new Parser();