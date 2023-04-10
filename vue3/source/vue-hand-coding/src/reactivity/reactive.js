export function reactive(target) {
    return new Proxy(target, {})
}

export function shallowReactive() {

}