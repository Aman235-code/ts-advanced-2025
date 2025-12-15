

// ReturnType<F>
// Parameters<F>
// InstanceType<Ctor>
// ConstructorParameters<C>

function ExtractUserInfo(id: string, isextraInfo = false){
    return {
        id,
        name: "Aman", 
        log:  isextraInfo? "details": (undefined as string | undefined) 
    }
}

type GetUserReturnInfo = ReturnType<typeof ExtractUserInfo>
type GetUserParamsInfo = Parameters<typeof ExtractUserInfo>

const argsInfo : GetUserParamsInfo = ["u1", true]
const resInfo: GetUserReturnInfo = ExtractUserInfo(...argsInfo)

class PersonN1 {
    constructor(public name: string, public age: number){}

    greet(){
        return `hola i'm this ${this.name}`
    }
}

type PersonInstanceN1 = InstanceType<typeof PersonN1>
type PersonCtorArgsN1 = ConstructorParameters<typeof PersonN1>

const res1 : PersonCtorArgsN1 = ["Aman", 77]
const abcd : PersonInstanceN1 = new PersonN1(...res1)

console.log(abcd.greet())