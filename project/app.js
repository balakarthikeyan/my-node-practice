const fs = require('fs');
const axios = require('axios');
const WordParser = require("./wordparser");

global.final = [];

async function runRequest(value, obj) {
    let url = "https://dictionary.yandex.net/api/v1/dicservice.json/lookup";
    let params = {
            key: "dict.1.1.20170610T055246Z.0f11bdc42e7b693a.eefbde961e10106a4efa7d852287caa49ecc68cf",
            lang: "en-en",
            text: value,
        };
        let query = Object.keys(params)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");
    try {
        let meaning = await axios.get(url + "?" + query)
        .then((response) => { 
            // console.log(response.data) 
            var objCopy = Object.assign(obj, response.data.def);
            final.push(objCopy);              
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            // console.log(final);
        });
    } catch (error) {
        console.error(error);
    }
}

async function httpRequest(){
    let results;
    try {
        let context = "";
        let config = {
            responseType: 'stream'
        };
        let url = 'http://norvig.com/big.txt';
        let response = await axios.get(url, config);
            response.data.pipe(fs.createWriteStream('big.txt'));

        let readerStream = fs.createReadStream('big.txt');
            readerStream.setEncoding("UTF8");

        readerStream.on("data", function (chunk) {
            context += chunk;
        });

        readerStream.on("end", function () {
            WordParser.data = context.toString();
            WordParser.parser();
            WordParser.sortByCount();
            results = WordParser.spliceByCount(10);
            results.forEach(function (val, key) {
                runRequest(val.name, val);
            });
            setTimeout(() =>{
                console.log(final);
                fs.unlink('big.txt', function () {
                    // console.log('Deleted.');
                });
            }, 5000);
        });

        readerStream.on("error", function (err) {
            console.log(err.stack);
        });
    } catch (error) {
        console.error(error);
    }
}

httpRequest();