function clone(target) {
    let cloneTarget = {}; // 新的内存
    for (const key in target) { // 拷贝
        cloneTarget[key] = target[key];
        // target[key]类型， 简单数据类型， 浅
        // 
    }
    return cloneTarget;
};
let obj = {a:1, b:2, c:3, d:{e:5}}
const o = clone(obj)
o.b = 3
obj.d.e = 6
console.log(obj, o)

