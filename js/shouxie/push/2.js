const arr = [1,2,3]
// 末尾添加一个元素
// 在 末尾添加多个元素
// 返回值是数组的新长度
Array.prototype.push2 = function(arguments) {
    // Array.prototype
    // this 面向对象内部， 方法里this 指向实例后的对象
    // 如何得到所有的参数 [] arguments
    console.log(arguments,'???')
    // 覆盖原有方法
    // console.log('---------')
    // 所有复杂数据类型 typeof object
    // [object Array]
    // console.log(typeof arguments, Object.prototype.toString.call(arguments))
    // console.log(arguments.length)
    for(let i=0; i<arguments.length; i++){
        this[this.length] = arguments[i]
        this.length++
    }
    return this.length
}
arr.push2(4, 5)
console.log(arr)