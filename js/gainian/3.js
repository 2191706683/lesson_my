function add(a, b) {
    let args = Array.prototype.concat.apply([], arguments)
    // reduce pre + cur
    // return 
    /* let result = 0
    for (let item of args) {
        result += item
    }
    return result */
    // 数组变成一个值
    return args.reduce((pre, cur) => pre + cur, 0)
}
console.log(add(1,2))