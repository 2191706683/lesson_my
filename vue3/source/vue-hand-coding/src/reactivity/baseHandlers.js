import { ReactiveFlags } from './reactive'
import { track, trigger } from './effect'
const get = createGetter() 
const set = craeteSeeter()
const has = () => {}
const deleteProperty = () => {}

// 性能优化
// shallow 浅   {num: { a: 1}} true  obj.num.a
function createGetter(shallow = false) {
    return function get(target, key, receiver) {
        // 本职 返回普通对象的值
        // targetMap -> object -> key -> [effect() effect2(), ...]
        // es6 提供的映射API
        // target[key]
        // track 
        // const isExistMap = () => key === ReactiveFlags.RAW
        const res = Reflect.get(target, key, receiver)
        // console.log(target, receiver, res, '?????') // {num: 0} Proxy({num: 0}) 0
        track(target, "get", key)  // 收集依赖
        return res
    }
}

function craeteSeeter() {
    return function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver)
        trigger(target, "set", key)
        return result
    }
}

export const mutableHandlers = {
    get,
    set,
    has,
    deleteProperty
}