import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { getProducts, IProduct } from '../service/shop'

// - 大型项目 数据管理 pinia 是新一代的vuex 数据管理 + 界面开发
// - 大型项目 ts
// 函数式编程 消灭this

export const useProductsStore = defineStore('products',() => {
    // let all :IProduct[] = reactive([])
    let state = reactive({
        all: [] as IProduct[]
    })
    const loadAllProducts = async () => {
        const ret = await getProducts() as IProduct[]
        // console.log(ret, '????');
        state.all = ret
    }
    const decrementProduct = (product :IProduct) => {
        const curProduct = state.all.find(item => item.id === product.id)
        if (curProduct) {
            curProduct.inventory--
        }
    }
    return {
        state,
        loadAllProducts,
        decrementProduct
    }
})