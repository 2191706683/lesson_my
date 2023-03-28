<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
// ts 在 类型推导
// let a: number | string = 1
// a = '2'
interface Book {
    title: string | number
    year?: number
}
const book: Book = reactive({title: 'vue3'})

book.title = 1
</script>

<style scoped>

</style>