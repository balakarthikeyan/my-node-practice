var net = require('net');
var server = net.createServer(function(connection) { 
   connection.on("listening", function () {
      console.log("Server listening!");
   });
    
   connection.on("connection", function (socket) {
      console.log("Client connected!");
   });
   
   connection.on('end', function() {
      console.log('client disconnected');
   });
   
   connection.write('Hello World!\r\n');
   connection.pipe(connection);
});

server.listen(8080, function() { 
   console.log('server is listening');
});