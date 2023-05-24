const _ = require('lodash');

// 算过的不用再算了
function fibonacci(n) {
    if (n <= 1) {
        return n;
    };
    return fibonacci(n - 1) + fibonacci(n - 2);
};
// 高阶函数
// 原函数不用变，套一层函数，实现增量功能
// 原函数作为参数传递进来，返回新的函数

const memorizedFabonacci = _.memoize(fibonacci);
console.time();
console.log(memorizedFabonacci(10));
console.timeEnd();
console.time();
console.log(memorizedFabonacci(7));
console.timeEnd()