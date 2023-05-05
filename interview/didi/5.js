function getTypeof(value) {
    // 除了null 简单数据类型 和 object array
    var type = typeof value;
    if (type != 'object') {
        return type;
    }
    // null + 复杂数据类型 子类型
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
    // null
    // toString.call
}

function isSet(data) {
    return data instanceof Set || typeof data === 'object' && data !== null && typeof data.size === 'number'
}

function isMap(data) {
    return data instanceof Map || typeof data === 'object' && data !== null && typeof data.size === 'number'
}

// const set = new Set([1, 2, 2]);
// console.log(getTypeof(set))
