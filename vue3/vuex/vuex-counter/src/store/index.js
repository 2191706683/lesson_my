import { createStore } from 'vuex'
// 离开组件 设计状态
const state = {
    count: 0 // 共享状态
}
const mutations = {
    // 怎么修改它才科学？
    increment(state) {
        state.count++
    },
    decrement(state) {
        state.count--
    }
}
// count 0 -> 1 commit('increment')
// -> actions -> commit('increment)
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfodd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync({ commit }) {
        return new Promise((resolve, reject) => {
            
        })
    }
}
const getters = { // computed
    evenOrOdd: state => state.count % 2 === 0 ? 'event' : 'odd'
    
}
// 状态仓库涉及好
// 没有搞modules 分模块

// 单一状态树 root
export default createStore({
   state,
   getters,
   actions,
   mutations
})

