"use strict";
// object shapes -> similar to interfaces
// union types ( A | B)
// intersection types ( A & B)
const person1 = {
    id: '1', address: "add1", salary: 1234
};
function nAction(s) {
    switch (s) {
        case 'new':
            return "New";
        case 'paid':
            return 'paid';
        case 'pending':
            return 'pending';
        default:
            return "default";
    }
}
