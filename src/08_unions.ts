
function printId(id: string | number){
    if(typeof id === 'string'){
        console.log(id.toUpperCase())
    }else{
        console.log(id.toFixed(2))
    }
}

// object union 
type Object1 = {
    role:'Admin',
    permissions: string[]
}

type Customer = {
    role:' Customer',
    points: number
}

function desUser(u:Object1 | Customer){
    if(u.role === 'Admin'){
        console.log(u.permissions)
    }
    else{
        console.log(u.points)
    }
}

function desIn(u: Object1 | Customer){
    if('permissions' in u){
        console.log(u.role)
    }else{
        console.log(u.points)
    }
}

// array of unions & unions of arrays
const arrofunion : (string | number)[] = ["a",1,"b",2]

const unionofarr : string[] | number[] = Math.random() > 0.1 ? ["x","y"]: [1,2]