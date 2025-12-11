// fixed length & fixed types

const entry: [string, number] = ['A', 34] // first elel must be string then next is num and must contain no of elems

type ResponseRow = [status: number, message?:string]

const r: ResponseRow = [200]

const corners : readonly [number, number] = [0,0] // readonly tuples
