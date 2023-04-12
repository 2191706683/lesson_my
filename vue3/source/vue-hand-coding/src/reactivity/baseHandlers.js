import { ReactiveFlags, reactive, reactiveMap, shallowReactiveMap } from './reactive'
import { track, trigger } from './effect'
import { isObject } from '../shared'

const get = createGetter() 
const set = craeteSeter()
const has = () => {}
const deleteProperty = () => {}

const shallowReactiveGet = createGetter(true)

// 性能优化
// shallow 浅   {num: { a: 1}} true  obj.num.a
function createGetter(shallow = false) {
    return function get(target, key, receiver) {
        // 本职 返回普通对象的值
        // targetMap -> object -> key -> [effect() effect2(), ...]
        // es6 提供的映射API
        // target[key]
        // track 
        // const isExistMap = () => key === ReactiveFlags.RAW && 
        // (receiver === shallowReactiveMap.get(target))

        // if (key === ReactiveFlags.IS_REACTIVE) {
        //     return true
        // } else if (isExistMap()) {
        //     return target
        // }

        const res = Reflect.get(target, key, receiver)
        // console.log(target, receiver, res, '?????') // {num: 0} Proxy({num: 0}) 0
        track(target, "get", key)  // 收集依赖
        if (isObject(res)) { // 
            return shallow ? res : reactive(res)
        }
        return res
    }
}

function craeteSeter() {
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

export const shallowReactiveHandlers = {
    get: shallowReactiveGet,
    set,
    has,
    deleteProperty
}