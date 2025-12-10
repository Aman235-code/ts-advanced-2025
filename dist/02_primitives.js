"use strict";
let username = "Aman";
let age = 40;
let isCreator = true;
const big = 2n ** 63n - 1n;
// const mixed = big + age // error
const TOKEN = Symbol('TOKEN');
console.log(TOKEN);
function yearsToDay(years) {
    return years * 365;
}
console.log(username.toUpperCase());
console.log(yearsToDay(2));
