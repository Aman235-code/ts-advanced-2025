"use strict";
function greetPersonOp(name) {
    const upperres = name ? name?.toUpperCase() : "Guest";
    return `Hello ${upperres}`;
}
// console.log(greetPersonOp('Aman'))
// console.log(greetPersonOp()) 
function gwithDef(name = "Guest") {
    return `Hello ${name.toUpperCase()}`;
}
// console.log(greetPersonOp('Aman'))
// console.log(greetPersonOp()) 
function connect(host, port, secure) {
    const p = port ?? 80;
    const s = secure ?? false;
    return `Connect ${host} ${p} ${s}`;
}
console.log(connect('localhost'));
