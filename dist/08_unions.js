"use strict";
function printId(id) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id.toFixed(2));
    }
}
function desUser(u) {
    if (u.role === 'Admin') {
        console.log(u.permissions);
    }
    else {
        console.log(u.points);
    }
}
function desIn(u) {
    if ('permissions' in u) {
        console.log(u.role);
    }
    else {
        console.log(u.points);
    }
}
// array of unions & unions of arrays
const arrofunion = ["a", 1, "b", 2];
const unionofarr = Math.random() > 0.1 ? ["x", "y"] : [1, 2];
