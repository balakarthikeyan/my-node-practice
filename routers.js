const http = require("http");
const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.headers, req.body);
    //check the URL of the current request
    if (req.url == "/plain") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        res.end("Hello World");
    } else if (req.url == "/html") {
        // set response header
        res.writeHead(200, { "Content-Type": "text/html" });
        // set response content
        res.write("<html><body><p>This is home Page.</p></body></html>");
        res.end();
    } else if (req.url == "/json") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ message: "Hello World" }));
        res.end();
    } else res.end("Invalid Request!");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});