let promiseobj = new Promise(function (resolve, reject) {
    let condition = true;
    if (condition) {
        resolve("Promise is resolved successfully.");
    } else {
        reject("Promise is rejected");
    }
});
promiseobj
    .then((success) => console.log(success))
    .catch((reason) => console.log(reason))
    .finally(() => {
        console.log("Finally block");
    });

// promiseobj.then(
//     function (result) {
//         /* handle a successful result */
//         console.log(result);
//     },
//     function (error) {
//         /* handle an error */
//         console.log(error);
//     }
// );

let promise1 = new Promise((resolve, reject) => {
    resolve(1);
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve(2), 100);
});
//returns if all resolves
Promise.all([promise1, promise2]).then((fromRes) => {
    console.log(
        "Result : " +
            fromRes +
            " Both the promises have been resolved successfully."
    );
});
//returns if any one resolves
Promise.race([promise1, promise2]).then((fromRes) => {
    console.log(
        "Result : " +
            fromRes +
            " Both the promises have been resolved successfully."
    );
});

/* 
//Callback hell
firstRequest(function(response) {  
    secondRequest(response, function(nextResponse) {    
        thirdRequest(nextResponse, function(finalResponse) {     
            console.log('Final response: ' + finalResponse);    
        }, failureCallback);  
    }, failureCallback);
}, failureCallback);

//Chaining
firstRequest()
    .then(function (response) {
        return secondRequest(response);
    })
    .then(function (nextResponse) {
        return thirdRequest(nextResponse);
    })
    .then(function (finalResponse) {
        console.log("Final response: " + finalResponse);
    })
    .catch(failureCallback);
 */

// Async functions always return a promise
async function hello() {
    return "Hello Alligator!";
}
hello().then((x) => console.log(x));

function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}

add1(10).then(v => {
    console.log(v); // prints 60 after 4 seconds.
});

async function add2(x) {
    const p_a = resolveAfter2Seconds(20);
    const p_b = resolveAfter2Seconds(30);
    return x + await p_a + await p_b;
}

add2(10).then(v => {
    console.log(v); // prints 60 after 2 seconds.
});

async function fun() {
    let promise3 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 5000);
    });

    let result = await promise3; // wait until the promise resolves (*)

    console.log(result); // "done!"
}
fun();

// async function fetchUsers(endpoint) {
//     const res = await fetch(endpoint);
//     let data = await res.json();
//     data = data.map((user) => user.username);
//     console.log(data);
// }
// fetchUsers("https://jsonplaceholder.typicode.com/users");

// It will print out all unhandled Promise rejections.
process.on('unhandledRejection', (err) => {
  console.log(err)
})

Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => { throw new Error('My Error') })
  .catch((error) => console.error)
  .then((x) => x + 5)
  .then((x) => console.log(x))
  .catch(console.error)