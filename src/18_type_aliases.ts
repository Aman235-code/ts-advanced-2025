// object shapes -> similar to interfaces
// union types ( A | B)
// intersection types ( A & B)

type Person1 = {
    id: string;
    address: string;
    salary: number;
}

const person1 : Person1 = {
    id:'1', address: "add1", salary: 1234
}

type Status = 'new' | 'paid' | 'pending'

function nAction(s: Status): string {
    switch(s){
        case 'new':
            return "New"
        case 'paid':
            return 'paid'
        case 'pending':
            return 'pending'
        default:
            return "default"
    }
}

type ToMerge1 = {
    price: number
}

type ToMerge2 = {
    stock: number
}

type MergedInfo = Person1 & ToMerge1 & ToMerge2