var util = require("util");
var EventEmitter = require("events").EventEmitter;
function LoopProcessor(num) {
    var me = this;
    setTimeout(function () {
        for (var i = 1; i <= num; i++) {
            me.emit("BeforeProcess", i);
            console.log("Processing number:" + i);
            me.emit("AfterProcess", i);
        }
    }, 2000);
    return this;
}

util.inherits(LoopProcessor, EventEmitter);
var lp = new LoopProcessor(3);
lp.on("BeforeProcess", function (data) {
    console.log("About to start the process for " + data);
});
lp.on("AfterProcess", function (data) {
    console.log("Completed processing " + data);
});

setInterval(function() {
    console.log(process.memoryUsage().rss);
}, 30000);

function MemoryWatcher(opts) {
    if (!(this instanceof MemoryWatcher)) {
        return new MemoryWatcher();
    }

    opts = opts || {
        frequency: 30000, // 30 seconds
    };

    EventEmitter.call(this);

    var that = this;

    setInterval(function () {
        var bytes = process.memoryUsage().rss;
        if (opts.maxBytes && bytes > opts.maxBytes) {
            that.emit("error", new Error("Memory exceeded " + opts.maxBytes + " bytes"));
        } else {
            that.emit("data", bytes);
        }
    }, opts.frequency);
}

util.inherits(MemoryWatcher, EventEmitter);
var mem = new MemoryWatcher({
    maxBytes: 12455936,
    frequency: 5000,
});

mem.on("data", function (bytes) {
    console.log(bytes);
});

mem.on("error", function (err) {
    //throw err;
    console.error('something went wrong with :' + err.message);
});