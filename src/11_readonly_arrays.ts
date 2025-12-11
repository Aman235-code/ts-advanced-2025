
const num = [1,2,3,4]

const a: readonly number[] = [1,2,3]

const b: ReadonlyArray<number> = [1,2,3,4,5]

num[0] = 8 // mutable

// a.push(4) // error 
// a.pop() // error
// a.splice(0,1) // error 

function sum(nums: readonly number[]): number {
    let s = 0;
    for (const n of nums) s+=n
    return s
}

console.log(sum(a))

const res = b.map(n => n*2)