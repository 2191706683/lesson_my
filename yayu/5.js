function add(a, b, c) {
    return a + b + c
}
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
        // console.log(key)
        if (key in cache) {
            // console.log('缓存')
            return cache[key] // []
        }
        else {
            // console.log('add...')
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
// memorize 高阶函数
// memorize 内部生成了闭包函数，并且return 给 memorizedAdd
var memorizedAdd = memorize(add)
console.time('use memorize') // 计时开始
for(var i = 0; i < 100000; i++) {
    // memorizedAdd(1, 2, 3)
    add(1, 2, 3)
}
console.timeEnd('use memorize')