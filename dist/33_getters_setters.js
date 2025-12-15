"use strict";
// get
// set
class Temperature {
    #c = 0;
    constructor(celcius) {
        this.celcius = celcius;
    }
    get celcius() {
        return this.#c;
    }
    set celcius(value) {
        if (Number.isNaN(value))
            throw new Error("Not a number");
        this.#c = value;
    }
    get faranheit() {
        return (this.#c * 9) / 5 + 32;
    }
    set faranheit(f) {
        this.celcius = ((f - 32) * 5) / 9;
    }
}
const t = new Temperature(25);
t.faranheit = 212;
