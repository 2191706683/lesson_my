// let arr = [1,2,3]
// let newArr = arr 
// 赋值不是拷贝 同一个内存地址引用
// newArr[0] = 100

// console.log(arr)
let arr = [1, 2, {val: 4}]
// 浅拷贝
// let newArr = arr.slice()
// newArr[2].val = 5
// console.log(arr)

// 深拷贝
// 循环引用 内存溢出
// 函数等不支持序列化，直接忽略

const newArray = JSON.parse(JSON.stringify(arr))
newArray[2].val = 10
console.log(arr)
