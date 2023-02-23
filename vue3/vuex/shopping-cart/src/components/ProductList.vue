<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{ product.price }} - 库存 {{ product.inventory }}
                <br>
                <button
                    @click="addProductToCart(product)"
                    :disabled="!product.inventory"
                >
                    Add to Cart
                </button>
            </li>
        </ul>
    </div>
</template>

<script setup>
// 接口请求 拿到数据 -》 从空的[] -》   数据不归组件管理
// 共享状态，管他什么组件 数据管理独立于组件之外.....
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
import shop from '../api/shop.js'

const store = useStore()
// console.log(store.state.products.all)
const products = computed(() => store.state.products.all)
const addProductToCart = (product) => {
    // console.log('----------')
    // 执行actions -> commit mutation
    store.dispatch('cart/addProductToCart', product)
}
// 生命周期
onMounted(() => {
    // 利用回调解决异步问题
    // shop.getProducts((products) => {
    //     console.log(products)
    // })
    // 访问请求数据的方法 叫做dispatch 一个action
    store.dispatch('products/getAllProducts')
})
</script>

<style lang="stylus" scoped>

</style>