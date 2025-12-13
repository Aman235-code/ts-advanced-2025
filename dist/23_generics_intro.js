"use strict";
// understand what is "type parameter" <T>
// how ts infers <T> from your arguments automatically
// generics is a function where the types are "blanks" that you'll fill in later
// <T> is a placeholder
// ts will try to understand what it should be
function id(x) {
    return x;
}
// infers T 
// id(5) -> T is a number 
// id('string') -> T is a string
const xyz = id(5);
// console.log(xyz + 1, id("Aman"), id(["Aman"]))
function firstGen(arr) {
    return arr[1];
}
// console.log(firstGen([1,2,3,4,5]))
// without generics -> (x:unknown) => unknown
// with generics: (x:T) => T // keep the exact type
function wrap(value) {
    return { value };
}
