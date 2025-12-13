
// <T> -> constraint T so that only certain shapes are allowed
// <T extends X>
// key constraints -> <K extends keyof T> -> K must be a key of T

function lengthN4<T extends {length: number}>(xN4: T):number {
    return xN4.length
}

console.log(lengthN4('hello'))
console.log(lengthN4([1,2,3,4,5]))
console.log(lengthN4({length:10, tag:'ok'}))

// console.log(lengthN4(123))

type UserN6 = {
    id: string
    name: string
    age?: number 
}

function userN<T, K extends keyof T>(arrN4: T[], keyN4: K): Array<T[K]>{
    return arrN4.map(item => item[keyN4])
}

const userN6 : UserN6[] = [
    {
        id: "1",
        name: "name",
        age: 66
    },
     {
        id: "2",
        name: "name2",
    }
]

console.log(userN(userN6, 'id'))
console.log(userN(userN6, 'name'))