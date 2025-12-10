
type User = {
    id: string // required
    name: string 
    email?: string // optional
    readonly createdAt: Date // cannot be reassigned
}

const user1: User = {id: "u1", name:"a", createdAt: new Date()}
const user2: User = {id: "u2", name:"b", email:"b@gmail.com", createdAt: new Date()}

// user1.createdAt = new Date() // error

type User2 = {
    email?: string 
}

type User3 = {
    email: string | undefined
}

type Count =  {
    [k:string]: number
}

type Count1 = Record<"likes" | "views" | "shares", number>

const c1 : Count = {
    whatever: 1
}

const c2 : Count1 = {
    likes:1, views:5, shares:8
}