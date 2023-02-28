<template>
    <div class="cart">
        <h2>Your Cart</h2>
        <p v-show="!produect.length">
            <i>Please add some products to cart.</i>
        </p>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }} - {{ product.price }} x {{ product.quantity }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { computed } from 'vue'

    const store = useStore()
    // const items = computed(() => store.state.cart.items)
    // console.log(items)
    const products = computed(() => store.getters['cart/cartProducts'])
</script>
    
<style lang="stylus" scoped>

</style>