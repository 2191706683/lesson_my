const myObj1 = { a: 1, b: 2}
const myObj2 = { c: 3, d: 4}

const mergedObj = Object.assign({}, myObj1, myObj2)
console.log(mergedObj)