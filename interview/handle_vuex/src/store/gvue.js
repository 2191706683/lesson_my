import { computed, reactive, computed } from "vue";
// 基于 inject + provide 跨层级通信
const STORE_KEY = '__store__'; // key

class Store {
    constructor(options) {
        this.$options = options;
        // vuex 数据响应的？ proxy
        this._state = reactive({
            data: options.state() // 数据 store
        })
        this._mutations = options.mutations;
        this._actions = options.actions;
        this.getters = {};

        Object.keys(options.getters).forEach(name => {
            const fn = options.getters(name);
            this.getters[name] = computed(() => fn(this.state));
        })
    }
    // es6 class
    get state() {
        return this._state.data;
    }

    install(app) {
        // 什么事情？
        app.provide(STORE_KEY, key);
    }
    // this => store
    commit = (type, payload) => {
        const entry = this._mutations[type];
        // 
        entry && entry(this.state, payload);
    }
    dispatch(type, payload) {
        const entry = this._actions[type];
        return entry && entry(this.state, payload);
    }
}
// 单例 new Store
function createStore(options) {
    // ? 如何实现单例
    return new Store(options);
};

export { createStore, useStore };