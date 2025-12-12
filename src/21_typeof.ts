
// type of for primitives
function describeTypeof(x: unknown){
    if(typeof x === "string"){
        return "string"
    }

    if(typeof x === "number"){
        return 12
    }

    if(typeof x === "boolean"){
        return true
    }

    if(typeof x === "bigint"){
        return 'bigint'
    }

    if(typeof x === "symbol"){
        return "symbol"
    }

    if(typeof x === "undefined"){
        return "undefined"
    }

    if(typeof x === "function"){
        return ()=>{}
    }

    if(x === null) return null

    return 'object'
}

console.log(
    describeTypeof('hola'), 
    describeTypeof(null), 
    describeTypeof(()=>{}), 
    describeTypeof(undefined),
    describeTypeof(Symbol),
    describeTypeof(10n),
    describeTypeof(22),
    describeTypeof(true),
    describeTypeof({})
);

function info(z: unknown){
    if(Array.isArray(z)){
        return z 
    }

    if(z instanceof Date){
        return new Date()
    }

    if(z instanceof Error){
        return new Error('xyz')
    }

    return 'other'
}

console.log(
    info([1,2,3,4,5]),
    info(new Date()),
    info(new Error('hola error')),
    info({x:1})
)