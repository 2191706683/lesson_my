/**
 * then(() => {
 *    Promise.resolve(2)
 *    return 2
 * })
 * .then((data) => {
 * 
 * })
 * 
 */
function isPromise(obj) {
    console.log(Promise.resolve(obj),'---')
    console.log(obj, '+++')
    return Promise.resolve(obj) === obj
}

console.log(isPromise(new Promise((resolve) => {
    resolve('hello')
}))
)
console.log(isPromise(2))