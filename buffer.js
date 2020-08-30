//Buffer
var buffer1 = new Buffer.alloc(256);
var len = buffer1.write('Buffer is used for handling raw data in node js.');
console.log('Octets written : ' + len, 'Buffer length : ' + buffer1.length);
console.log( buffer1.toString('utf8', 0, 23));

var buffer2 = new Buffer.from('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log("Content: " + buffer3.toString(), 'Buffer length : ' + buffer3.length );

//Buffer to json
var buf = new Buffer.from('converting buffer to json', "utf-8");
var json = buf.toJSON(buf);
console.log('Buffer to json : ');
console.log(json);