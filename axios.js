// Load axios 
const axios = require('axios');

// In HTML
// <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

// Methods
// axios.post(url, data, options) , axios.put(url, data, options ), axios.delete(url) and axios.head()

/*
  {
    // `data` is the response that was provided by the server
    data: {},
    // `status` is the HTTP status code from the response
    status: 200,
    // `statusText` is the HTTP status message from the response
    statusText: "OK",
    // `headers` the HTTP headers that the server responded with All header names are lower cased and can be accessed using the bracket notation.
    // Example: `response.headers['content-type']`
    headers: {},
    // `config` is the config that was provided for the request
    config: {},
    // `request` is the request that generated this response The last ClientRequest instance in node.js (in redirects)
    request: {},
  }
*/

async function httpRequest1(){   
    try {
      var URL = "https://jsonplaceholder.typicode.com/todos/1"
      const response = await axios.get(URL);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
}

//httpRequest1();

async function httpRequest2(){ 
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/list/all', {
                params: {
                    foo: 'bar'
                }
            }); 
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

//httpRequest2();

async function httpRequest3(){ 
    try {
        const response = await axios({
            url: 'https://dog.ceo/api/breeds/list',
            method: 'get',
            data: {
                foo: 'bar'
            }
        }); 
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

//httpRequest3();

axios.get("https://reqres.in/api/users?page=1")
.then(data => { console.log(data.data) } )
.catch(err => {
    console.log(err);
});