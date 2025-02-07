//STEP 1
/*
function halfNumber(num) {
    "use strict";
    var halfnum = parseFloat(num/2);
    window.document.write("Half of " + num +" is " + halfnum);
    return halfnum;
};

halfNumber(5);
*/

//STEP 2
/*

function squareNumber(num) {
    "use strict";
    var squarenum = parseFloat(num * num);
    window.document.write("The result of squaring the number " + num + " is " + squarenum +".");
    return squarenum;
};
squareNumber(3);
*/

//STEP 3
/*
function percentOf(num1, num2) {
    var percentnum = parseInt(num1 / num2 * 100);
    window.document.write(num1 + " is " + percentnum + "%" + " of " + num2);
    return percentnum;
}
percentOf(2, 4);
*/

//STEP 4
function findModulus(num1, num2) {
    var modulusnum = (num2 % num1);
    window.document.write(modulusnum + " is the modulus of " + num1 +" and "+ num2 + ".");
    return modulusnum;
}
findModulus(4, 10);
