// module 模块 exports 向外输出 
// 递归 值的类型是否是对象 
// 分离下数组和对象字面量 局限性  
// 手动克隆  for key in 
// module.exports = function clone(target) {
// 循环引用的处理？ 
// export default function clone(target) {
//     if (typeof target === 'object') {
//         let cloneTarget = Array.isArray(target) ? [] : {};
//         for (const key in target) {
//             cloneTarget[key] = clone(target[key]);
//         }
//         return cloneTarget;
//     } else {
//         return target;
//     }
// };
function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}
function getType(target) {
    return Object.prototype.toString.call(target);
}
function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}
function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    // while 比for 更快 
    while (++index < length) {
        iteratee(array[index], index)
    }
    return array;
}
const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const argsTag = '[object Arguments]'

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag]
export default function clone(target, map = new Map()) {
    // 克隆原始类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    const type = getType(target);
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target);
    }

    // 防止循环引用
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);

    // 克隆set
    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value, map));
        });
        return cloneTarget;
    }
    // 克隆map
    if (type === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value, map));
        });
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;
    function cloneFunction(func) {
        const bodyReg = /(?<={)(.|\n)+(?=})/m;
        const paramReg = /(?<=\().+(?=\)\s+{)/;
        const funcString = func.toString();
        if (func.prototype) {
            console.log('普通函数');
            const param = paramReg.exec(funcString);
            const body = bodyReg.exec(funcString);
            if (body) {
                console.log('匹配到函数体：', body[0]);
                if (param) {
                    const paramArr = param[0].split(',');
                    console.log('匹配到参数：', paramArr);
                    return new Function(...paramArr, body[0]);
                } else {
                    return new Function(body[0]);
                }
            } else {
                return null;
            }
        } else {
            return eval(funcString);
        }
    }
}
/* export default function clone(target, map = new Map()) {
    if (typeof target === 'object') {
        const isArray = Array.isArray(target);
        let cloneTarget = isArray ? [] : {};
        if (map.get(target)) { // hashmap 有没有拷贝过target
            return map.get(target);
        }
        map.set(target, cloneTarget);// 
        const keys = isArray ? undefined : Object.keys(target);
        // for (const key in target) { // 慢
        //     cloneTarget[key] = clone(target[key], map) // 引用式赋值
        // }
        forEach(keys || target, (value, key) => {
            if (keys) {
                key = value
            }
            cloneTarget[key] = clone(target[key], map)
        })
        return cloneTarget
    } else {
        return target
    }
} */