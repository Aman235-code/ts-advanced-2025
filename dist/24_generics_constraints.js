"use strict";
// <T> -> constraint T so that only certain shapes are allowed
// <T extends X>
// key constraints -> <K extends keyof T> -> K must be a key of T
function lengthN4(xN4) {
    return xN4.length;
}
console.log(lengthN4('hello'));
console.log(lengthN4([1, 2, 3, 4, 5]));
console.log(lengthN4({ length: 10, tag: 'ok' }));
function userN(arrN4, keyN4) {
    return arrN4.map(item => item[keyN4]);
}
const userN6 = [
    {
        id: "1",
        name: "name",
        age: 66
    },
    {
        id: "2",
        name: "name2",
    }
];
console.log(userN(userN6, 'id'));
console.log(userN(userN6, 'name'));
