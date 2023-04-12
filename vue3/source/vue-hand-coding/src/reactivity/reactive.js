// ?vue 依赖关系是用“对象”来组织的 key对象， map更适合，
// 组件的卸载，WeakMap 自动的删除  弱引用  垃圾回收机制
// 为了依赖函数的查找， 更新的时候，找依赖 vuex 单一状态数 targetMap 依赖图谱
// 时间复杂度为O(1)
// const ret = reactive({num: 0, num1: 2, num2: {a: 2}}) // 深代理
import { mutableHandlers, shallowReactiveHandlers } from './baseHandlers'
export const reactiveMap = new WeakMap()
export const shallowReactiveMap = new WeakMap()

// export const ReactiveFlags = {
//     RAW: "__v_raw", // 原生对象
//     IS_REACTIVE: "__V_isReactive" // obj.num.a 响应式
// }

// 响应式 
export function reactive(target) {
    // return new Proxy(target, {})
    // 修改后，如何处理
    return createReactiveObject(target, reactiveMap, mutableHandlers)
}

// 让用户自己决定浅层的代理 
export function shallowReactive(target) {
    return createReactiveObject(
        target,
        shallowReactiveMap, // 为了作区分， 浅层响应式单独存放
        shallowReactiveHandlers // 
    )
}

function createReactiveObject(target, proxyMap, proxyHandlers) {
    if (typeof target !== 'object') {
        console.warn('reactive ${target} 必须是一个对象')
        return target
    }

    const existingProxy = proxyMap.get(target)
    if (existingProxy) {
        console.log('-----cached', target)
        return existingProxy
    }

    // 通过Proxy 创建代理，不同的map 存储不同类型的reactive依赖关系
    const proxy = new Proxy(target, proxyHandlers)
    proxyMap.set(target, proxy) // 缓存
    return proxy
}
