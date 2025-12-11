
function greetPersonOp(name?: string): string{
    const upperres = name? name?.toUpperCase(): "Guest"
    return `Hello ${upperres}`
}

// console.log(greetPersonOp('Aman'))
// console.log(greetPersonOp()) 

function gwithDef(name: string = "Guest"): string {
       return `Hello ${name.toUpperCase()}`
}

// console.log(greetPersonOp('Aman'))
// console.log(greetPersonOp()) 

function connect(host: string, port?:number, secure?: boolean){
    const p = port ?? 80;
    const s = secure ?? false
    return `Connect ${host} ${p} ${s}`
}

console.log(connect('localhost'))