
// get
// set

class Temperature {
    #c = 0;
    constructor(celcius: number){
        this.celcius = celcius
    }

    get celcius(): number {
        return this.#c
    }

    set celcius(value: number){
        if(Number.isNaN(value)) throw new Error("Not a number")
            this.#c = value
    }

    get faranheit(): number {
        return (this.#c*9)/5 + 32
    }

    set faranheit(f: number){
        this.celcius = ((f-32)*5)/9
    }
}

const t = new Temperature(25)
t.faranheit = 212