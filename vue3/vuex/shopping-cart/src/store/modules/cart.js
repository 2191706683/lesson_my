const state = {
    items: [],
    checkoutStatus: null
}
const mutations = {
    pushProductToCart(state, { id }) {
        state.items.push({
            id,
            quantity: 1
        })
    },
    incrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id === id)
        cartItem.quantity++
    }
}
const actions = {
    addProductToCart({ commit, state }, product) {
        // 接口请求
        // 提交mutation
        // 不可以直接修改状态
        console.log(product, '/////')
        if (product.inventory > 0) { // 还可以买，
            const cartItem = state.items.find(item => item.id === product.id) // 已购买过？
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id}) // 添加一条新的记录
            } else {
                commit('incrementItemQuantity', cartItem)
            }
            commit('products/decrementProductInventory', { id: product.id }, { root: true })
        }
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}