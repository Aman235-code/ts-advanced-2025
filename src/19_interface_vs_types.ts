

// interface -> object shapes that you expect to extend

// types -> more general -> objects unions intersections functions
// cannot be reopened -> no merging

// supports declaration merging 
interface Box1 {
    width: number
}

interface Box1{
    height: number
}

const boxDemo: Box1 = {
    width: 10,
    height: 10
}

type Bag = {
    size: number
}

// type Bag = { // cant redeclare type alias name
//     color: string
// }