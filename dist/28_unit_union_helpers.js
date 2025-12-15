"use strict";
// Exclude<U, V> -> remove from U those members assignable to V
// Extract<U, V> -> keep from U those members assignable to V
// Non Nullable 
function handleEvent(e) {
    console.log(e);
}
handleEvent('click');
function handleEvent2(e) {
    console.log(e);
}
function square(num) {
    return num * 2;
}
square(10);
// square(null) // error
