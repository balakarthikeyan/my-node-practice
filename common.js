/* 
var
is function-scoped or globally-scoped.
is not subject to the temporal dead zone.
it creates a global property on window with the same name.
is reassignable.
is redeclarable.

let
is block scoped.
is subject to the temporal dead zone.
it does not create any global property on window.
is reassignable.
is not redeclarable.

const
is block scoped.
is subject to the temporal dead zone.
it does not create any global property on window.
is not reassignable.
is not redeclarable.
*/
const folks = [
    { name: "Bob", age: "32", occupation: "developer" },
    { name: "Bill", age: "17", occupation: "delinquent" },
    { name: "Brad", age: "40", occupation: "yes" },
];

//Find
var foundUser = folks.find((user) => {
    return user.name === "Bob";
});
console.log("Example for Find : ", foundUser);

//Filter
var foundUser = folks.filter((user) => user.name === "Bob");
console.log("Example for Filter : ",foundUser);

//For in Loop
let planets = ["mercury", "venus", "earth"];
console.log("Example for for-in Loop");
for (planet in planets) {
  console.log(planet);
}

// let's convert it to a real array of numbers, Map 
var stringArray = new Array('20','120','111','215','54','78');
var intArray = stringArray.map(Number);
// now let's sort it and take the second element :
var second = intArray.sort(function(a,b){return b-a}); 
console.log("Second Highest of Array : ", second[1]);
console.log("Custom Sort Array : ", second);
console.log("Example for Reverse Array : ", second.reverse());

//difference of two array
var first = [ 1, 2, 3, 4, 5 ];
var second = [ 4, 5, 6 ];
var difference = first.filter(x => second.indexOf(x) === -1);
console.log("Example for Difference Array : ", difference);

let intersection = first.filter(x => second.includes(x));
console.log("Example for Intersection Array : ", intersection);
let difference = first.filter(x => !second.includes(x));
console.log("Example for Difference Array : ", intersection);
let symdifference = first
                 .filter(x => !second.includes(x))
                 .concat(second.filter(x => !first.includes(x)));
console.log("Example for Symmetric Difference Array : ", intersection);                 
let union = [...first, ...second];
console.log("Example for Union Array : ", intersection);

//Merge Array 
const arr1 = [3, 5, 6, 10, 11, 20, 2];
const arr2 = [1, 2, 7, 8, 15, 19];
let result = [...arr1, ...arr2];
    result = result.sort((a,b) => a-b);
console.log("Example for Merge Array : ", result);
console.log("Example for Contact Array : ", arr1.concat(arr2)); 

// Nullish coalescing operator '??'
const nullValue = null;
let emptyValue;
const valA = nullValue ?? "default for A";
console.log("Example for Nullish coalescing operator : ", valA);

// Comparison with || Checks (0, '', NaN, null, undefined)
let valB = emptyValue || 'default for B';
console.log("Example for Comparison with || : ", valB);

// Chaining operates
let valC = (nullValue || emptyValue ) ?? 'default for B';
console.log("Example for Chaining operates : ", valC); 

//Clone Object 
console.log("Example for Clone Object");
const food1 = { beef: "🥩", bacon: "🥓" };
const food2 = { ...food1 }; //Spread operator
const food3 = food1;        //Assign Direct Value
food3.emoji = "🌽";
food3.fail = "😱";
const food4 = Object.assign({}, food2); //Object.assign Method
const food5 = JSON.parse(JSON.stringify(food4)); //JSON Method
food4.pass = "✅";
console.log(food5);
console.log(food4);
console.log(food3);
console.log(food2);
console.log(food1);

//Empty array
console.log("Example for Empty Array");
let arr1 = [3, 5, 6, 10];
console.log(arr1); 
// arr1 = []; // 37% slower
// arr1.length = 0; // 89% slower
// arr1.splice(0, arr1.length)  // 97% slower
// Fastest
while (arr1.length > 0) {
    arr1.pop();
}
console.log("Empty Array : ");
console.log(arr1); 

//Empty Object
console.log("Example for Empty Object");
let apple = { name: "apple", color: "red" };
console.log("Value of apple: ", apple);
// apple = {};
for (let prop in apple) {
    delete apple[prop];
}
console.log("Empty Object : ");
console.log("Value of apple: ", apple);