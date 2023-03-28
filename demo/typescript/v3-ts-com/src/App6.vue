<template>
    <div>
        <input type="text" value="123" ref="el">
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
    el.value?.focus()
})
</script>

<style scoped>

</style>