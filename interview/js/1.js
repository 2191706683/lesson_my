let ary = [1, [2, [3, [4, 5]]], 6]
let str = JSON.stringify(ary) // 序列化
// let o = {a:1, b:2, c:3}

// 收获是 es10 内置了 flat API, es6 2015
// ary = ary.flat(Infinity) // es10(2019) 提供的flat API 但有兼容性问题
// console.log(ary)
console.log(str)
/*  
 * '/ /'是正则的格式  正则式字符匹配的规则
 * g 是正则的修饰符，表示全局不停下来，一直匹配 
 * | 或者  正则是按字符匹配的，[a-z] 只匹配一个小写字母，如果要匹配多个，[a-z]{3,5}
 * [ 本身是正则的运算符号 如果是本身 \[ 需要转译一下 匹配[字符本身
 * replace 方法，正则匹配到的替换成 空
 */


// ary = str.replace(/(\[|\])/g, '').split(',').map(item => +item)
// console.log(ary)

str = str.replace(/(\[|\])/g, '')
/* str = '[' + str + ']'
ary = JSON.parse(str)
console.log(str) */

// 递归
/* let result = []
let fn = function(ary) {
    for (let i = 0; i < ary.length; i++) {
        let item = ary[i]
        if (Array.isArray(ary[i])) {
            fn(item)
        } else {
            result.push(item)
        }
    }
} */

// reduce
/* function flatten(ary) {
    return ary.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, [])
}
console.log(flatten(ary)) */

// some
while (ary.some(Array.isArray)) {
    ary = [].concat(...ary)
}
console.log(ary)
