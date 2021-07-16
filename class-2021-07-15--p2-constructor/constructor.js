// Constructor: is a function that creates objects.
// first letter in the constructor name is in uppercase.
//
// You need to focus on the following keywords:
// keyword (1): new
// keyword (2): this
//--------------------------------------------------

// first we define the constructor
function PizzaMaker(nameParam) {
    this.name = nameParam;
}

// now let's use the construcot to create 4 objects
var pizza1 = new PizzaMaker("Vigi Pizza");

var pizza2 = new PizzaMaker("Margarita");

var pizza3 = new PizzaMaker("Chicken Pizza");

var pizza4 = new PizzaMaker("Paparoni Pizza");

// Example two
//--------------------------------------------------

// first let's remember how we usually
// create objects using the reuglar way.
// for example, let's create 2 objects
// using the regular way (object literal)

var p1 = {
    name: "Ahmed",
    age: 30,
    job: "Engineer",
    cpr: 938920384,
    phoneNo: "923-02833984",
    email: "ahmed102394@gmail.com",
}

var p2 = {
    name: "Ahmed",
    age: 30,
    job: "Engineer",
    cpr: 938920384,
    phoneNo: "923-02833984",
    email: "ahmed102394@gmail.com",
}

// now let's use a constructor to create
// the same object

// first we create the constructor
function Person(name, age, job, cpr, phoneNo, email) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.cpr = cpr;
    this.phoneNo = phoneNo;
    this.email = email;
}

// then we use the constructor to create the object
var p3 = new Person("Abdulla", 20, "Mechanic", 138348972, "33443344", "abdulla3d4@gmail.com");

// console.log(p2);
// console.log(p3);

// Example three
//--------------------------------------------------

// first define the construct
function Car() {
    this.speed = null;
}

// use the constructor to create the object
var car1 = new Car();

car1.speed = 100;

// console.log(car1);
