//console.log(global);
const http = require("http");
// http
// .createServer(function(request, response) {
//     console.log(request.url, request.headers, request.body);
//     response.end('hello world !');
// })
// .listen(3000, ()=> console.log("the server is running at port 3000"));

const pid = process.pid;
let usersCount;
http.createServer((req, res) => {
    for (let i = 0; i < 1e7; i++); // simulate CPU work
    res.end(`Handled by process ${pid}`);
    res.end(`Users: ${usersCount}`);
}).listen(8080, () => {
    console.log(`Started process ${pid}`);
});

process.on("message", (msg) => {
   usersCount = msg.usersCount;
   console.log(`Message from master: ${msg}`);
});
