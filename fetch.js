const fetch = require("node-fetch");

async function sendRequest(requrl) {
    await fetch(requrl, {
        method: "GET",
        headers: { "Access-Control-Allow-Origin": "*" },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Output : ", data);
    })
    .catch((err) => {
        console.log(err);
    });
}

async function runRequest(value) {
    let url = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup";
    let params = {
        key: "dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf",
        lang: "en-en",
        text: value,
    };
    let query = Object.keys(params)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
    await sendRequest(url + "?" + query);
}

// runRequest('text');

async function fetchUsers(endpoint) {
    const res = await fetch(endpoint);
    let data = await res.json();
    data = data.map((user) => user.username);
    return data;
}
let results = fetchUsers("https://jsonplaceholder.typicode.com/users")
.then((result) => {
    console.log(results);
});
/*
fetch('https://example.com')
.then(res => {
  res.text()       // response body (=> Promise)
  res.json()       // parse via JSON (=> Promise)
  res.status       //=> 200
  res.statusText   //=> 'OK'
  res.redirected   //=> false
  res.ok           //=> true
  res.url          //=> 'https://example.com'
  res.type         //=> 'basic' ('cors' 'default' 'error' 'opaque' 'opaqueredirect')
  res.headers.get('Content-Type')
})
nodemon --watch server --ext ts --exec ts-node --ignore '*.test.ts' --delay 3 server/server.ts
*/