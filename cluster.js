const cluster = require("cluster");
const os = require("os");

if (cluster.isMaster) {
    const cpus = os.cpus().length;
    console.log(`Forking for ${cpus} CPUs`);
    
    for (let i = 0; i < cpus; i++) {
        cluster.fork();
    }

    // Object.values(cluster.workers).forEach(worker => {
    //     worker.send(`Hello Worker ${worker.id}`);
    // });

    // Right after the fork loop within the isMaster=true block
    // cluster.on('exit', (worker, code, signal) => {
    //     if (code !== 0 && !worker.exitedAfterDisconnect) {
    //     console.log(`Worker ${worker.id} crashed. ` + 'Starting a new worker...');
    //     cluster.fork();
    //     }
    // });

    var myEmitter = new (require('events').EventEmitter)();
    
    process.on('uncaughtException', function (err) {
        console.log('UNCAUGHT EXCEPTION - keeping process alive:', err); 
    });
    
    myEmitter.emit('error', new Error('Cluster Error'));    
}