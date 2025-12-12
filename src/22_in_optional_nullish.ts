

type InExample1 = {
    role: "Admin",
    permissions: string[]
}

type InExample2 = {
    role: "User",
    expiresAt: Date
}

type UserExample = InExample1 | InExample2

function describeUserEg(u: UserExample){
    if("permissions" in u) {
        return `Admin ${u.permissions.join(",")}`
    }
    return `User ${u.expiresAt.toISOString}`
}

console.log(describeUserEg({
    role:"Admin",
    permissions: ["read"]
}))


// avoid runtime classes -> optional nullish
// ?? and || 
// obj?.a

type ProfileN3 = {
    name: string
    contact?: {
        email?: string
    }
}

const P1N3 : ProfileN3 = {
    name:'John'
}

const P2N3 : ProfileN3 = {
    name:'Ben',
    contact: {
        email: 'ben@gmail.com'
    }
}

// console.log(P1N3.contact.email) // 'P1N3.contact' is possibly 'undefined' 
console.log(P1N3.contact?.email)

const email1N3 = P1N3.contact?.email
const email2n3 = P2N3.contact?.email


// ?? -> uses the right hand default only when left hand null or undefined
// || -> uses the default when the left is any falsy value (0, "", null, undefined, NaN)

const countFromServerN3 : number | null = 0;
const labelFromServerN3 : string | undefined = ""

const aN3 = countFromServerN3 ?? 100 // keeps the 0
console.log(aN3)

const bN3 = countFromServerN3 || 100 // keeps the 100