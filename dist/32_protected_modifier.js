"use strict";
// protected -> class, subclasses
class Animal {
    energy = 23;
    eat(amt) {
        this.energy = Math.min(100, this.energy + amt);
    }
}
class Dog extends Animal {
    run() {
        this.energy -= 10;
    }
    status() {
        return this.energy;
    }
}
const d = new Dog();
d.eat(10);
d.run();
d.status();
// d.energy() // error 
