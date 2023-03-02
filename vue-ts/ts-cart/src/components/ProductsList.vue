<template>
    <ul>
        <li v-for="item in productsStore.state.all">
            {{ item.title }} - {{ item.price }}
            <button
                :disabled="!item.inventory"
                @click="cartStore.addProductToCart(item)"
            >
                添加到购物车
            </button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProductsStore } from '../store/products';
import { useCartStore } from '../store/cart';

const productsStore = useProductsStore()
const cartStore = useCartStore()

onMounted(async () => {
    await productsStore.loadAllProducts()  
})
</script>

<style scoped>

</style>