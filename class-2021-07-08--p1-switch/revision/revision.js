var x = 10;
var z = 1.2;
var f = "Muneera";
var b = true;
var n = null;
var a; // undefined

//----------------------------
// object + array

var myArray = [10, "Ali", true, 20, 30]; // array

// key-value pair
// key is called: property 
var myObject = {
    name: "Ali",
    job: "Instructor"
}

console.log(myObject.name); // Ali

//----------------------------
// if statement

var val = "f"; // statment 1

val = "a"; // statement 2

// Muneera says : 32
// Ali says: 28

// statement 3
if (val === "a") {
    console.log("26")
} else if (val === "f") {
    console.log("28")
} else if (val === "f") {
    console.log("30")
} else if (val === "f") {
    console.log("32")
} else {
    console.log("34")
}