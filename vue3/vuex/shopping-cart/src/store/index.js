import { createStore } from 'vuex' // 中央状态仓库，单一状态树
import products from './modules/products.js'
import cart from './modules/cart.js'

export default createStore({
    modules: { // 仓库里的状态比较多的话？模块化的存储
        products,
        cart
    }
})