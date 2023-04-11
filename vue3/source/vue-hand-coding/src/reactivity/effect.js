let activeEffect = null
// 依赖收集器 fn 响应式对象改变后， fn 要重新运行
// options lazy schedular
const targetMap = new WeakMap()
export function effect(fn, options = {}) { 
    const effectFn = () => {
        // 容错
        try {
            activeEffect = effectFn
            return fn()
        } finally {
            activeEffect = null // 打扫战场
        }
    }
    if (!options.lazy) {
        // 同步运行
        effectFn() // 触发 proxy get
    }
    effectFn.scheduler = options.scheduler // watchEffect
    return effectFn
}

export function track(target, type, key) {
    // console.log(`触发 track -> target: ${target} type: ${type} key: ${key}`)
    // obj.nums.a.b  proxy 深度代理 懒代理
    // targetMap -> target -> map -> key -> [effect]
    let depsMap = targetMap.get(target) // 第一层查找 对象key
    if (!depsMap) {
        // 初始化 depsMap的逻辑
        // depsMap = new Map()
        // 新增
        // depsMap = new Map() // HashMap  对象 set get ？
        // targetMap.set(target, depsMap)
        targetMap.set(target, (depsMap = new Map()))
    }
    let deps = depsMap.get(key)
    if (!deps) {
        deps = new Set() // 数组来存
    }
    if (!deps.has(activeEffect) && activeEffect) {
        deps.add(activeEffect)
    }
    depsMap.set(key, deps)
}

export function trigger(target, type, key) {
    // targetMap -> target -> key -> set
    const depsMap =  targetMap.get(target)
    if (!depsMap) {
        return
    }
    const deps = depsMap.get(key)
    if (!deps) {
        return
    }
    deps.forEach((effectFn) => {
        effectFn()
        // if (effectFn.scheduler) {

        // }
    })
}