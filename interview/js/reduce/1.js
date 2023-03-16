Array.prototype.reduce = function (callbackfn, initialValue) {
    // 异常处理，和 map 一样
    // 处理数组类型异常
    if (this === null || this === undefined) {
        throw new TypeError("Cannot read property 'reduce' of null or undefined");
    }
    // 处理回调类型异常
    if (typeof callbackfn != "function") {
        throw new TypeError(callbackfn + ' is not a function')
    }
    let O = Object(this);   // 强制类型转换
    let len = O.length >>> 0; // ARR 长度
    let k = 0;
    let accumulator = initialValue;
    if (accumulator === undefined) {
        for (; k < len; k++) {
            // 查找原型链
            if (k in O) {
                accumulator = O[k];
                k++;
                break;
            }
        }
    }
    // 表示数组全为空
    if (k === len && accumulator === undefined)
        throw new Error('Each element of the array is empty');
    for (; k < len; k++) {
        if (k in O) {
            // 注意，核心！
            accumulator = callbackfn.call(undefined, accumulator, O[k], k, O);
        }
    }
    return accumulator;
}

