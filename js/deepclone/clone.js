module.exports = function clone(target) {
    if (typeof target === 'object') {
        // let cloneTarget = {} // 解决引用式赋值的问题
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}