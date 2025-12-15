"use strict";
const patch10 = {
    name: "Aman"
};
const patch11 = {
    address: {
        lin1: 'line1',
        city: 'city'
    }
};
const userAllPatch = {
    id: "u2",
    name: "name2",
    address: {
        lin1: "l1",
        city: "c1"
    },
    email: "text" // we need to add optional fields too here
};
const readonlyUser = {
    id: "1",
    name: "name2",
    address: {
        lin1: "line 1",
        city: "city"
    }
};
const publicUser = {
    id: 'u7',
    name: 'Aman',
    // email:"aman@" // error 
};
const omitUser = {
    id: "u4",
    name: "name 5",
    address: {
        lin1: "lines",
        city: "city 7"
    },
    // email: "aman@" // error
};
const dir = {
    admin: {
        id: 'user10',
        name: 'admin',
        address: {
            lin1: 'line 1',
            city: 'c'
        }
    },
    user: {
        id: 'user10',
        name: 'admin',
        address: {
            lin1: 'line 1',
            city: 'c'
        }
    },
    editor: {
        id: 'user10',
        name: 'admin',
        address: {
            lin1: 'line 1',
            city: 'c'
        }
    }
};
