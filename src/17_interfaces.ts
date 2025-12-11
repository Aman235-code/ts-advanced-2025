//  interface -> named shape for objects 
interface User333{
    id: string;
    name: string;
    email?: string;
    readonly createdAt: Date;
}

const u : User333 = {
    id: '1',
    name:'A',
    createdAt: new Date()
}

interface Admin333 extends User333 {
    perm?: string[]
}

const aL: Admin333 = {
    id: '1',
    name:'A',
    createdAt: new Date(),
    perm: ['Admin']
}

interface Meta {
    meta : {
        active: boolean
    }
}

interface AWM extends Admin333, Meta {
    
}