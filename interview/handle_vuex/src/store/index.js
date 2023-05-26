// 提供store
import { createStore } from './gvue';

const store = createStore({
    state() {
        return {
            count: 1
        }
    },
    getters: {
        double(state) {
            return state.count * 2;
        }
    },
    mutations: {
        add(state) {
            state.count++;
        }
    },
    actions: {
        // state, 
        asyncAdd({commit}) {
            setTimeout(() => {
                commit('add')
            }, 1000)
        }
    }
})

export default store