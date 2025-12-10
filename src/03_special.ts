
// strict null check
// let title: string = "intro"
// title= undefined

let subtitle : string | undefined = "aman"

// void: func doesnt return a useful value
function log(msg: string): void {
    console.log(msg)
}

// never returns
function fail(msg: string): never {
    throw new Error(msg)
}

// Do not use any -> try to ignore
// const valueAny: any = JSON.parse('{"x": 1}')
// can break/explode at runtime