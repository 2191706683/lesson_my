// 手写Map
// thisArr 指定 callbackFn 内部的this 指向
Array.prototype.map = (callbackFn, thisArg) => {
    // this -> [1,2,3]
    // obj
    // Array.prototype.map.call(null || undefined)
    if (this === null || this === undefined) {
        throw new TypeError('cannot read proerty map of null or undefined')
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + 'is not a function')
    }
    // 显示类型转换 this 谁调用它一定是一个对象
    let O = Object(this)
    let T = thisArg

    let len = O.length
    let A = new Array(len) // 就和以前的数组没有影响，全新的内存分配
    for (let k = 0; k < len; k++) {
        // this[k] 遍历的每一项
        // 下标
        // this 第三个参数
        if (k in O) {
            let kValue = O[k] // 每一项
            let mappedValue =  callbackFn.call(T, kValue, k, O)
            A[k] = mappedValue
        }
    }
    return A
}
// 手写map
let nums = [1, 2, 3]
let obj = {val: 5} // map 回调 指定它的this
let newNums = nums.map(function(item, index, array) {
    return item + index + array[index] + this.val
}, obj)
console.log(newNums)

