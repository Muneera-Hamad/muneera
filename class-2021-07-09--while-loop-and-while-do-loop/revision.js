// number of items: 7
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//                 0         1          2          3            4          5           6   


// loop 0 - 6
// var i = 0
// i < 7 =======> false = stop
// i++

// 1) counter
// 2) condition: to stop the loop

var mv = 0;

mv = mv + 1; // (mv + 1) ===> 0 + 1

i = i + 1; // i++

for (var i = 0; i < 7; i++) {
    console.log(weekDays[i]);
}

// loop 6 - 0
// var c = weekDays.length - 1

// for (var c = weekDays.length - 1; c >= 0; c--) {
//     console.log(weekDays[c]);
// }