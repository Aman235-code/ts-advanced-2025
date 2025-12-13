

type UserN = {
    id: string;
    name: string;
    email?: string // T['email'] can be undefined
    phone?:number
}

function getUserPropN7<T, K extends keyof T>(objN7: T, keyN7: K): T[K] {
    return objN7[keyN7]
}

const userN7: UserN = {
    id: 'u1',
    name: 'Aman'
}

const idValN7 = getUserPropN7(userN7,  'id')

function setUserPropN7<T, K extends keyof T>(objN7:T, keyN7: K, newVal:T[K]):void{
    objN7[keyN7] = newVal
}

setUserPropN7(userN7, 'name', "john")
setUserPropN7(userN7, 'phone', 567)