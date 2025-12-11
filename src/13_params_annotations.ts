
function fun1(a: number, b:number): number{
    return a+b
}

const numbers = [1,2,3]

const doubled = numbers.map(n => n*2) // (n:number)
console.log(doubled);

// const times2 = (n: number) => n*2 

type Point = {
    x: number,
    y: number
}

function distf(p:Point): number{
    return Math.hypot(p.x, p.y)
}

console.log(distf({x:3,y:2}))