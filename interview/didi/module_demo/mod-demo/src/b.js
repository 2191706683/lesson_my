import obj, { title } from './a.js'
console.log(title)
console.log(obj.name)
setTimeout(() => {
    console.log(title)
    console.log(obj.name)
}, 4000)