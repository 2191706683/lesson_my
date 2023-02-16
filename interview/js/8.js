let obj = {name: 'sy', age: 18, hometown: {
    name: '乐平'
}}
const obj2 = Object.assign({}, obj, {name: 'sss'}) // 浅拷贝
console.log(obj2)
obj2.hometown.name = '景德镇'
console.log(obj)

