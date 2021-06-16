/* 
function is_object(a) {
    var asObject = Object.prototype.toString.call(a);
    if ( asObject === "[object Object]" ||  (a !== null || typeof a === "object")) {
        return true;
    } else {
        return false;
    }
}

function is_array(a) {
    var asArray = a.constructor.toString();
    var asObject = Object.prototype.toString.call(a);

    if (asObject === '[object Array]' || asArray === Array || a instanceof Array) {
      return true
    } else {
        return false;
    }
}

function in_array(needle, haystack, strict) {
    var found = false, key, strict = !! strict;
    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found = true;
            break;
        }
    }
    return found;
}

function array_search(needle, haystack, strict) {
    var strict = !! strict;
    var key = '';
    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            return key;
        }
    }
    return false;
}

Object.size = function (obj) {
    var size = 0,
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

Object.keys = function (obj) {
    var arr = [],
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key);
        }
    }
    return arr;
};

Object.values = function (obj) {
    var arr = [],
        key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(obj[key]);
        }
    }
    return arr;
};
 */
var employees = [
    { name: "Tony", department: "IT", years: 10, userName: "Tony", hobbies: "movies", language: "Turkish" },
    { name: "Stark", department: "IT", years: 1, userName: "Stark", hobbies: "football", language: "Tamil" },
    { name: "Peter Parker", department: "Pizza Delivery", years: 14, userName: "John", hobbies: "movies", language: "English" },
    { name: "Bruce Wayne", department: "Subway", years: 2,  userName: "Wayne", hobbies: "football", language: "Greek" },
    { name: "Clark Kent", department: "Editing", years: 14, userName: "Kent", hobbies: "singing", language: "Turkish"  },
    { name: "Scarlet", department: "IT", years: 15, userName: "Joe", hobbies: "football", language: "Tamil" },
];
var products = [
    { name: 'A', color: 'Blue', size: 50, locations: ['USA', 'Europe'], details: { length: 20, width: 72, type: "Circle" } },
    { name: 'B', color: 'Blue', size: 60, locations: [], details: { length: 20, width: 70, type: "Cube" } },
    { name: 'C', color: 'Black', size: 70, locations: ['Japan'], details: { length: 20, width: 72, type: "Square" } },
    { name: 'D', color: 'Green', size: 50, locations: ['USA'], details: { length: 20, width: 71, type: "Rectangle" } },
];
var numbers = [5, 6, 15, 24];

//Converting an Object to an Array
var objectArray = Object.entries(employees);
objectArray.forEach(function ([key, val], index, obj) {
  console.log("Key : ", key, " Value : ", val); 
});

// Converting an Array to an Object
var eg_map = Object.fromEntries(
    Object.entries(numbers)
    .map(function([ key, val ], index, arr) {
        return [ key, val * 2 ];
    })
);
console.log("Values : ", eg_map);

//hasOwnProperty
for (var key in employees) {
    if (Object.prototype.hasOwnProperty.call(employees, key)) {
        console.log("HasOwnProperty : " , employees[key]);
    }
}

//Without using Map
var employee_names = [];
employees.forEach(function (employee) {
    employee_names.push(employee.name);
});
console.log("Without using Map :", employee_names);

var output = employees.map(function (employee) {
    return employee.name;
});
console.log("With using Map :", output);

var output = employees.filter(function (employee) {
    return employee.years == 14;
});
console.log("Filter :", output);

var eg_filter = numbers.filter(function(n) {
    return n % 2 !== 0;
});
console.log("Filter :", eg_filter);

var output = employees.reduce(function (accumulator, employee) {
    return accumulator + employee.years;
}, 0);
console.log("Reduce :", output);

var eg_reduce = function(accumulator, item) {
    return accumulator + item;
};
var rs_reduce = numbers.reduce(eg_reduce, 0);
console.log("Reduce :", rs_reduce);

var output = employees.some(function (employee) {
    return employee.years == 14;
});
console.log("Some :", output);

var output = employees.find(function (employee) {
    return employee.years == 14;
});
console.log("Find :", output);

var output = employees
            .map(function (employee) {
                return employee.years;
            }).filter(function (obj) {
                return obj == 14;
            });
console.log("Customer Filter :", output);

var output = products.filter(function(obj) {
    return Object.values(obj).some(function(value) {
        var asObject = Object.prototype.toString.call(value);
        if(typeof value === "object" && asObject === "[object Array]") {
            return value ? value.toString().toLowerCase().includes("japan") : false;
        }
        if(typeof value === "object" && asObject === "[object Object]") {
            Object.values(value).forEach(
                function (val, key) {
                    return val ? val.toString().toLowerCase().includes("cube") : false;
                });
        }
        if(asObject === "[object String]" || asObject === "[object Number]") {
            return value ? value.toString().toLowerCase().includes("green") : false;
        }       
    })
});
console.log("Customer Filter :", output);

var obj = {name: 'Dave', age: 30};
var objCopy = Object.assign(obj, {coder: true});
console.log(obj); // { name: 'Dave', age: 30, coder: true }
console.log(objCopy); // { name: 'Dave', age: 30, coder: true }

var obj = {name: 'Dave', age: 30};
var objCopy = Object.assign({}, obj, {programmer: true});
console.log(obj); // { name: 'Dave', age: 30 }
console.log(objCopy); // { name: 'Dave', age: 30, programmer: true }

var values = Object.values(obj);
console.log(values); // ["Dave", 30]
console.log(Object.values(obj).includes("Dave"))
console.log(Object.values("hello")); // ["h", "e", "l", "l", "o"]

obj.hasOwnProperty('name');  // returns true
console.log(Object.getOwnPropertyNames(obj)); // ["name", "age"]

var myMap = new Map();
myMap.set('foo', "value");
myMap.set('bar', 20);
var iterator = myMap.entries();
console.log(iterator.next().value); // ['foo', value]
console.log(iterator.next().value); // ['bar', 20]