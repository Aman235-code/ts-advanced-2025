"use strict";
class UserN5 {
    id;
    name;
    email;
    createdAt = new Date(); // init at declaration
    constructor(id, name, email) {
        // assign all required fields here 
        this.id = id;
        this.name = name;
        if (email)
            this.email = email;
    }
}
const res4 = new UserN5("1", "Aman");
const res5 = new UserN5("2", "Alok", "alok@gmail.com");
// class Bad {
//     a: string 
//     constructor(){}
// }
