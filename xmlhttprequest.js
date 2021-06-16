const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function loadRequest(url, method, params) {
    return new Promise((resolve, reject) => {
        var requests = new XMLHttpRequest();
        if (requests) {
            requests.open(method, url, true);
            requests.setRequestHeader("Access-Control-Allow-Origin", "*");
            requests.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            requests.onreadystatechange = function () {
                if (requests.readyState === 4) {
                    if (requests.status === 200) {
                        resolve(requests.responseText);
                    } else {
                        reject(Error(requests.statusText));
                    }
                }
            };
            requests.onerror = () => {
                reject(Error("Error fetching data."));
            };            
            requests.send(params);
        }
    });
}

let url ="https://api.icndb.com/jokes/random";
loadRequest(url, 'GET')
.then(
    (data) => {
        console.log("Promise resolved.");
        console.log(data);
    },
    (error) => {
        console.log("Promise rejected.");
        console.log(error.message);
    }
).finally(() => {
    console.log("Finally block");
});
