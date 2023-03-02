<script setup lang="ts">
import ProductsList from './components/ProductsList.vue'
import Cart from './components/Cart.vue'
</script>

<template>
    <h1>购物车</h1>
    <hr>
    <h1>列表商品</h1>
    <ProductsList />
    <hr>
    <Cart />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
