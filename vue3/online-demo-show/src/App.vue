<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

router.beforeEach((to, from, next) => {
  console.log(to.path)
  if (to.meta.login) {
    if(!localStorage.getItem('token')){
      next(`/login?redirect_url=${to.path}`)
      return 
    }  
  }
  next()
})
</script>

<template>
  <router-link to="/second">Second</router-link>
  <router-view></router-view>
</template>

<style scoped>
</style>
