// function + no parameter + no return value
//---------------------------------------------
function printName() {
    console.log("Muneera");
}

// function + with parameters + no return value
//---------------------------------------------
function sum(num1, num2) {
    console.log(num1 + num2);
}

// function + no parameter + with return value
//---------------------------------------------
function getGreet() {
    return "Hello!";
}

// function + with parameters + with return value
//---------------------------------------------
function getSum(num1, num2) {
    return num1 + num2;
}


// We must call the function
printName();

// example 2:
//---------------------------------------------
function countTo3() {
    for (var i = 1; i <= 3; i++) {
        console.log(i);
    }
}

countTo3();

countTo3();

countTo3();

// variable can store functions
// the function has no name (anonymous function)
var var1 = function () {
    console.log("This is var1");
};

var1();

//---------------------------------------------
// OOP: Object-Oriented Programming
// person is an object!!
// variable inside object: property
// function inside object: method
// 5 properties
// 2 methods
var person = {
    firstName: "Ali",
    lastName: "Abdulaziz",
    age: 34,
    job: "JavaScript Instructor",
    isSleeping: false,
    work: function () {
        console.log("I'm working!");
    },
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

person.work();

// if the function returns a value
// we can treat the function like a
// variable :)

console.log(person.age); // print age

console.log(person.getFullName()); // print full name

//---------------------------------------------
// passing a function to a parameter
function doSomething(param) {
    param();
}

var fun1 = function () {
    console.log("This is fun1");
}

doSomething(fun1);

doSomething(function () {
    console.log("This is fun2");
})
