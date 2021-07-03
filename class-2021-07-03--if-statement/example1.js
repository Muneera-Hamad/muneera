// if statement (العبارة الشرطية)

var num1 = 10;
var num2 = 10;

// == : compare the values (don't care about the type)
// === : compare the values and the types ----------------> please use this one

// >= : greater than or equal (اكبر من او يساوي)
// <= : less than or equal (اصغر من او يساوي)

// if statement : if keyword + condition + code

if (num1 === num2) {
    console.log("Yes " + num1 + " = " + num2);
}

//----------------------------------------------------------------
// if ... esle

if (num1 === num2) {
    console.log("Yes " + num1 + " = " + num2);
} else {
    console.log("No " + num1 + " doesn't equal " + num2);
}


//----------------------------------------------------------------
// if ... esle ... else if

// 6 - 11 => primary
// 12 - 14 => elementary
// 15 - 17 => secondary

var age = 7;

// OR : || : condition1 or condition2 : one of them should be true
// AND : && : condition1 and condition2 : both of them must be true

if (age >= 6 && age <= 11) {
    console.log("You must be in primary school! :)");
} else if (age >= 12 && age <= 14) {
    console.log("You must be in elementary school! ;)");
} else if (age >= 15 && age <= 17) {
    console.log("You must be in secondary school! :D");
} else {
    console.log("You must be kidding right!");
}

//------------------------------------------------------------------

var num3 = 2;

if (num3 === 0 || num3 === 1) {
    console.log(num3 + " belongs to binary system");
} else {
    console.log(num3 + " doesn't belong to binary system");
}


//------------------------------------------------------------------

var time = 6;


// 9 - 15 ==> working hours
// 15 - 17 ==> rest hours 
// 17 - 21 ==> studying hours
// 21 - 24 | 1 - 9 => sleeping hours 

if (time >= 9 && time < 15) {
    console.log("working hours");
} else if (time >= 15 && time < 17) {
    console.log("rest hours");
} else if (time >= 17 && time < 21) {
    console.log("studying hours");
} else if ((time >= 21 && time <= 24) || (time >= 1 && time < 9)) {
    console.log("sleeping hours");
}