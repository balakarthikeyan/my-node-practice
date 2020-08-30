// get the reference of EventEmitter class of events module
var events = require("events");

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();
var emitter = require('events').EventEmitter;

//Subscribe for FirstEvent
em.on("FirstEvent", function (data) {
    console.log("First subscriber: " + data);
});

//Subscribe SecondEvent
em.addListener("SecondEvent", function (data) {
    console.log("Second subscriber: " + data);
});

var FirstEventListner = (data) => {
    console.log(data);
};

em.on("FirstEvent", FirstEventListner);

var eventListeners = emitter.listenerCount(em, 'FirstEvent');
console.log(eventListeners + " Listner(s) listening to connection event");

// Raising FirstEvent
em.emit("FirstEvent", "This is my first Node.js event emitter example.");

process.nextTick(function() {
    // Raising SecondEvent
    em.emit("SecondEvent", "This is my second Node.js event emitter example.");
});

// Remove the binding of function
em.removeListener('FirstEvent', FirstEventListner);

var eventListeners = emitter.listenerCount(em, 'FirstEvent');
console.log(eventListeners + " Listner(s) listening to connection event");

em.emit('FirstEvent', "After removing emitter example.");

var counter = 0;
setInterval(() => {
    counter++;
    //produce a new event, named 'increased'
    em.emit("increased", counter);
}, 5000);

setInterval(() => {
    counter--;
    //produce a new event, named 'decreased'
    em.emit("decreased", counter);
}, 8000);

//listen the 'increased' event
em.on("increased", (num) => {
    console.log("increased:" + num);
});

//listen the 'decreased' event
em.on("decreased", (num) => {
    console.log("decreased:" + num);
});
