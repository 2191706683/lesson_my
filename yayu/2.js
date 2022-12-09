// 本分
function add(a, b) {
    return a + b
}
// fn 是等待着被优化的函数
// 闭包  简单来说函数内部还有函数
function memorize(f) {
    // 缓存结果 {} key 
    // 
    // console.log(fn, args)
    var cache = {
        // key 字符串
        // "lu": "抖音"
    }
    // 作用域
    return function() {
        // console.log('我是inner function', cache.lu)
        // console.log(Array.prototype.join.call(arguments, ","), '/////')
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        // 为什么要使用join呢？ 因为json里的key值必须是字符串
        console.log(key)
        if (key in cache) {
            console.log('缓存')
            return cache[key] // []
        }
        else {
            console.log('add...')
            // cache[key] = f(arguments)
            // apply call 都可以运行函数， 手写指定内部this的指向
            // apply 里可以传数组集合， 作为f的参数
            return cache[key] = f.apply(this, arguments)
            // cache[key] = f.apply(this, arguments)
            // return cache[key]
        }
        // else return cache[key] = f.apply(this, arguments)
    }
}
// 函数运行完本来就应该销毁
// 函数将会进入执行栈 之后将会创建函数作用域
var memorizedAdd = memorize(add) // 运行才会生成闭包函数
// 当函数运行完之后函数就要出栈 伴随着内存的回收 如果不出问题的话，cache就应该被回收，没有了 但实际上却没有被回收
// 为什么？ 因为被接下来的函数引用了，即有个闭包，你的返回值是个函数或者说是生成了一个函数，一个变量闭合到一个空间中，让你到运行时可以找到生成时上下文环境中的变量
// memorizedAdd(1, 2) // 运行时可以找到生成时上下文环境中的变量
memorizedAdd(1, 2)
