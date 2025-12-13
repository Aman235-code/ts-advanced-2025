"use strict";
function getUserPropN7(objN7, keyN7) {
    return objN7[keyN7];
}
const userN7 = {
    id: 'u1',
    name: 'Aman'
};
const idValN7 = getUserPropN7(userN7, 'id');
function setUserPropN7(objN7, keyN7, newVal) {
    objN7[keyN7] = newVal;
}
setUserPropN7(userN7, 'name', "john");
setUserPropN7(userN7, 'phone', 567);
