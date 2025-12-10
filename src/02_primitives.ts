let username: string = "Aman"
let age: number = 40
let isCreator: boolean = true

const big: bigint = 2n ** 63n - 1n;

// const mixed = big + age // error

const TOKEN: unique symbol = Symbol('TOKEN')
console.log(TOKEN)

function yearsToDay(years: number): number{
    return years * 365
}

console.log(username.toUpperCase())
console.log(yearsToDay(2))