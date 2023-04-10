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

export function track() {

}

export function trigger() {
    
}