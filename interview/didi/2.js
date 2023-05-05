const obj = {
    [Symbol()]: 1
};
// 简单数据类型 不能new
// symbol label
const a = Symbol('a')
const b = Symbol('b')
// Map
obj[a] = 'hello' // 唯一
obj.a = 'hello'
console.log(obj)