// value must be everything from A and from B

type Inter1 = {
    id: string
}

type Inter2 ={
    createdAt: Date
}

type Entity = Inter1 & Inter2 // must have both id and created at

const e: Entity = {
    id: "e1",
    createdAt: new Date()
}

console.log(e)

type NumberHolderUnique = {
    a: number
}

type StringHolderU = {
    a: string
}

// type NumStrMix = NumberHolderUnique & StringHolderU
// const b: NumStrMix = {
//     a: 123
// }

type Product = {
    id: string
    title: string
}

type Priced = {
    price: number
}

type p = Product & Priced