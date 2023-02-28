<script setup>
import { ref } from 'vue'
import Layout from './layouts/default.vue'
import PiniaLogo from './components/PiniaLogo.vue'
// 共享状态来到组件 hooks 函数 
// import { useStore } from 'vuex'  拿到的是root store
import { useCartStore } from './store/cart.js'
import { useUserStore } from './store/user.js' // user 模块
// const store = useStore() // 
// store.state.user.name
const user = useUserStore() // 
const cart = useCartStore()

// 私有状态
const itemName = ref('')

const addItemToCart = () => {
  if (!itemName.value) return
  cart.addItem(itemName.value)
  itemName.value = ''
}

const buy = () => {

}
</script>

<template>
  <Layout>
    <div style="margin:1rem 0;">
      <PiniaLogo />
    </div>
    <!-- 状态？ 私有状态？ store user模块 name属性 -->
    <h2>Hello {{ user.name }}</h2>
    <form @submit.prevent="addItemToCart">
      <input type="text" v-model="itemName">
      <button type="submit">Add</button>
    </form>
    <form @submit.prevent="buy">
      <ul>
        <li v-for="item in cart.items" :key="item.name">
          {{ item.name }} {{ item.amount }}
          <button
            type="button"
            @click="cart.removeItem(item.name)"
          >
            X
          </button>
        </li>
      </ul>
    </form>
  </Layout>
</template>

<style scoped>

</style>
