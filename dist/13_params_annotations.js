"use strict";
function fun1(a, b) {
    return a + b;
}
const numbers = [1, 2, 3];
const doubled = numbers.map(n => n * 2); // (n:number)
console.log(doubled);
function distf(p) {
    return Math.hypot(p.x, p.y);
}
console.log(distf({ x: 3, y: 2 }));
