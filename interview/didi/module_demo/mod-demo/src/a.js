export let title = 'hello hi'
const obj = {
    name: 'tom'
}
export default obj
setTimeout(() => {
    title = 'hello world'
    obj.name = 'tony'
}, 2000)