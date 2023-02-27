import { createStore} from './gvuex.js'

// - createStore ? 创建单一状态树
const store = createStore({
    state() {
        return {
            count: 1
        }
    },
    mutations: {
        add(state) {
            state.count++
        }
    },
    actions: {
        
    }
})

export default store