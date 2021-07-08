// with loop
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

// with loop
// inside parantheses 3 statements
// if condition is false ==> loop will stop
// counter++ : means increment counter by 1
for (var counter = 1; counter <= 5; counter++) {
    console.log("counter: " + counter);
}

// ---------- loop (1)

// var counter = 1; (only first loop)

// counter <= 5 // true

// console.log("counter: " + counter); // counter: 1

// counter++ // 2

// ---------- loop (2)

// counter <= 5 // true

// console.log("counter: " + counter); // counter: 2

// counter++ // 3

// ---------- loop (3)

// counter <= 5 // true

// console.log("counter: " + counter); // counter: 3

// counter++ // 4

// ---------- loop (4)

// counter <= 5 // true

// console.log("counter: " + counter); // counter: 4

// counter++ // 5

// ---------- loop (5)

// counter <= 5 // true

// console.log("counter: " + counter); // counter: 5

// counter++ // 6

// ---------- loop (6)

// counter <= 5 // false

// stop the loop

console.log("----------------------------------------------")

//----------------------------------------------
// using counter--

for (var counter = 5; counter >= 1; counter--) {
    console.log("counter: " + counter);
}

// will stop when couter reaches 0.

//----------------------------------------------
// using loop with array

// website: 

// Database: number of users increase every day


// number of elements: 9
// 8
// remember .length
var arr = [10, 15, 30, 40, 8, 2, 5];

// console.log(arr[0]); // 10
// console.log(arr[1]); // 15
// console.log(arr[2]); // 30
// console.log(arr[3]); // 40
// console.log(arr[4]); // 8
// console.log(arr[5]); // 2
// console.log(arr[6]); // 5

// condition: index < number of array elements
for (var index = 0; index < arr.length; index++) {
    console.log(arr[index]); // 40
}

// for ... of => to print array items
for (var item of arr) {
    console.log("Array item: " + item);
}

// loop (1) // item = 10
// loop (2) // item = 15
// loop (3) // item = 30
