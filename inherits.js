/**
 * Point a child's prototype to a parent's prototype
 **/
var extendObj = function(childObj, parentObj) {
    childObj.prototype = parentObj.prototype;
};

// base human object
var Human = function() {};
// inhertiable attributes / methods
Human.prototype = {
    name: '',
    gender: '',
    planetOfBirth: 'Earth',
    sayGender: function () {
        console.log(this.name + ' says my gender is ' + this.gender);
    },
    sayPlanet: function () {
        console.log(this.name + ' was born on ' + this.planetOfBirth);
    }
};

// male
var Male = function (name) {
    this.gender = 'Male';
    this.name = 'David';
};
// inherits human
extendObj(Male, Human);

// female
var Female = function (name) {
    this.name = name;
    this.gender = 'Female';
};
// inherits human
extendObj(Female, Human);

// new instances
var david = new Male('David');
var jane = new Female('Jane');

david.sayGender(); // David says my gender is Male
jane.sayGender(); // Jane says my gender is Female

Male.prototype.planetOfBirth = 'Mars';
david.sayPlanet(); // David was born on Mars
jane.sayPlanet(); // Jane was born on Mars

function Person(firstName, lastName) {
    this.FirstName = firstName || "unknown";
    this.LastName = lastName || "unknown";            
}

Person.prototype.getFullName = function () {
    return this.FirstName + " " + this.LastName;
}
function Student(firstName, lastName, schoolName, grade)
{
    Person.call(this, firstName, lastName);

    this.SchoolName = schoolName || "unknown";
    this.Grade = grade || 0;
}
Student.prototype = Person.prototype;
//Student.prototype = new Person();
Student.prototype.constructor = Student;

var std = new Student("James","Bond", "XYZ", 10);
            
console.log(std.getFullName()); // James Bond
console.log(std instanceof Student); // true
console.log(std instanceof Person); // true