// 高阶函数
// 自由 fn 传进来 slot 定制性更高 抽象
function memoize(fn) {
    const cache = new Map(); // O(1)
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        };
        // 返回的，被什么方式调用
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
    
}