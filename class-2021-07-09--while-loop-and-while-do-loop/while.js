var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// counter
// condition
// increment / decrement

var counter = 0; // starting point

// (while) loop
// first will check the condition 
// then will execute the code
while (counter < weekDays.length) {
    console.log(weekDays[counter]);
    counter++;
}

//----------
console.log("فاصل ونواصل")
//-----------

var counter2 = 0;

// (do while) loop
// first will execute the code
// then will check the condition
do {
    console.log(weekDays[counter2]);
    counter2++;
} while (counter < weekDays.length);
