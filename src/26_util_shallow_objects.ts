
// partial<T> -> make all the top level fields optional
type AddressN8 = {
    lin1: string;
    city: string;
}

type User10 = {
    name: string; 
    id: string;
    email?: string;
    address : AddressN8
}

type UserPatch10 = Partial<User10>

const patch10: UserPatch10 = {
    name: "Aman"
}

const patch11 : UserPatch10 = {
    address :{
        lin1 : 'line1',
        city: 'city'
    }
}

// Required<T>

type UserAllRequiredN10 = Required<User10>
const userAllPatch : UserAllRequiredN10 = {
    id: "u2",
    name: "name2",
    address : {
        lin1: "l1",
        city:"c1"
    },
    email: "text" // we need to add optional fields too here
}

// Readonly<T>
type ReadOnlyUser = Readonly<User10>
const readonlyUser : ReadOnlyUser = {
    id:"1", 
    name:"name2",
    address : {
        lin1 :"line 1",
        city:"city"
    }
}

// readonlyUser.name = 'this' // error

// Pick<T, K> -> keep only some keys
type PublicUserN10 = Pick<User10,"id" | "name">
const publicUser : PublicUserN10 = {
    id: 'u7',
    name:'Aman',
    // email:"aman@" // error 
}

// Omit<T, K> -> remove some keys 
type UserWithoutEmail = Omit<User10, "email">
const omitUser : UserWithoutEmail = {
    id: "u4",
    name: "name 5",
    address : {
        lin1 :"lines",
        city: "city 7"
    },
    // email: "aman@" // error
}

// Record<K, V>
type RoleK = 'admin' | 'user' | 'editor'
type roleCheck = Record<RoleK, User10>
const dir : roleCheck = {
    admin : {
        id: 'user10',
        name: 'admin',
        address : {
            lin1: 'line 1',
            city: 'c'
        }
    },

    user : {
        id: 'user10',
        name: 'admin',
        address : {
            lin1: 'line 1',
            city: 'c'
        }
    },

    editor : {
        id: 'user10',
        name: 'admin',
        address : {
            lin1: 'line 1',
            city: 'c'
        }
    }
}