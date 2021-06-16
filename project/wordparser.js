class WordParser {
    ignoreCase = true;
	constructor(text) {
        this.data = text;
        this.words = {};
    }
    parser() {        
        var parts = this.data.split(/\s+/);
        var words = {};
        var ignoreCase = true;
        parts.forEach(function (keyword) {
            keyword = keyword.replace(/^\s+/, "").replace(/\s+$/, "");
            if(ignoreCase) { keyword = keyword.toLowerCase(); }
            if (words.hasOwnProperty(keyword)) {
                words[keyword]++;
            } else {
                words[keyword]=1;
            }
        });
        this.words = words;
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
        this.words = results;
    }
    spliceByCount (value) {
        return this.words.splice(0, 10, this.words);
    }    
}

module.exports = new WordParser();