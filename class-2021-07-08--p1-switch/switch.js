var x = 10;

switch (x) {
    case 1:
        console.log("x is 1");
        break;
    case 2:
        console.log("x is 2");
        break;
    case 3:
        console.log("x is 3");
        break;
    case 4:
        console.log("x is 4");
        break;
    default:
        console.log("x is " + x + " (default!)");
}

//------------------------

if (x === 1) {
    console.log("x is 1");
} else if (x === 2) {
    console.log("x is 2");
} else if (x === 3) {
    console.log("x is 3");
} else if (x === 4) {
    console.log("x is 4");
} else {
    console.log("x is " + x + " (else)");
}
