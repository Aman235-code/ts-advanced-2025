// goal -> understand when to let ts infer types
// ts knows js very well
// when ts will writes types / u r going to write 

let count = 0; // ts inference (hover it -> ts sees this is a number)
const site = "aman" // ts sees the exact literal "aman"
const scores = [10, 20, 30]

export function add(a: number , b: number): number {
    return a + b
}

console.log(add(5, 2))

// you should annotate when type is not obvious
let maybe : string | number;
maybe = Math.random() > 0.5 ? "test" : 10