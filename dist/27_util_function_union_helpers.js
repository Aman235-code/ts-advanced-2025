"use strict";
// ReturnType<F>
// Parameters<F>
// InstanceType<Ctor>
// ConstructorParameters<C>
function ExtractUserInfo(id, isextraInfo = false) {
    return {
        id,
        name: "Aman",
        log: isextraInfo ? "details" : undefined
    };
}
const argsInfo = ["u1", true];
const resInfo = ExtractUserInfo(...argsInfo);
class PersonN1 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `hola i'm this ${this.name}`;
    }
}
const res1 = ["Aman", 77];
const abcd = new PersonN1(...res1);
console.log(abcd.greet());
