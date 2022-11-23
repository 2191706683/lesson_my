// pop
// 被弹出的元素的值
const arr = [1,2,3]
// console.log(arr.pop())
// console.log(arr)
// 变量的类型由值决定
Array.prototype.pop = function() {
    // 拿到最后的元素
    temp = this[this.length-1]
    // 删除
    // this[this.length - 1] = null
    this.length--
    // delete this.[this.length-1]
    // 返回
    return temp
}
console.log(arr.pop())
console.log(arr)