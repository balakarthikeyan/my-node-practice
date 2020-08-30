const { fork } = require("child_process");

// child_process.fork(modulePath[, args][, options])
let child = fork('./forkchild.js');

child.on('message', (message) =>{
    console.log('Parent got message: '+message);
});

child.send('Parent sent a message to child.js');