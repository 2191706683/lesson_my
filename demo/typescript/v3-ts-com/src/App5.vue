<template>
    <div>
        <input type="text" @change="handleChange" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref } from 'vue';

// const count = ref<number>(0)
const count: Ref<number> = ref(1)
// 类型的推导
const double = computed<number>(() => count.value * 2)

const handleChange = (event: Event) => {
    // 有可能为null ?
    // 挂载前 函数是先有的 event.target.null
    // 挂载后 input
    console.log((event.target as HTMLInputElement).value)
}
</script>

<style scoped>

</style>