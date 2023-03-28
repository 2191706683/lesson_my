<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'; 

// ref 响应式声明, 类型的推导 Ref<number> 机器
// 静态类型约束
// const year :Ref<string | number | boolean>= ref(2020)
// 泛型约束
const year = ref<string | number>(2020)
year.value = "2222" // 
// year.value = false
</script>

<style scoped>

</style>