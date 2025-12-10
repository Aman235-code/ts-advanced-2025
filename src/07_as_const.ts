
const ROLES = ["Admin", "User", "Operator"] as const

// derive union from the array
type Role = (typeof ROLES)[number]

function setRole(r: Role){
    console.log(r)
}

setRole('Admin')