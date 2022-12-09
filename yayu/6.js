// var propValue = function(obj) {
//     return obj.value
// }
function add(a, b, c) {
    return a + b + c
}
/* function memorize(f) {
    // 缓存结果 {}  key  
    // 
    // console.log(fn, args);
    var cache = {
        // key 字符串
        // "lu": "抖音"
    };
    
    // 作用域 
    return function(){
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        console.log(key)
        if (key in cache) { // in json 运算符
            return cache[key] // 没有运行  f
        } else {
            return cache[key] = f.apply(this, arguments)
        }
    }
} */

// hasher JSON.stringify
var memorize = function(func, hasher) {
    var memoize = function(key) {
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        console.log(address)
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address];
    };
    // 把cache 挂载在函数对象上
    memoize.cache = {};
    return memoize;
};
var memorizedAdd = memorize(add, function(){
    var args = Array.prototype.slice.call(arguments)
    console.log(arguments,'///')
    console.log(args,'我是hasher')
    return JSON.stringify(args)  
})
console.log(memorizedAdd(1,2,3))
console.log(memorizedAdd(1,4,3))
// propValue({value:1})