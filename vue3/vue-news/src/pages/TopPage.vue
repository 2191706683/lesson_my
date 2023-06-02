<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { useNewStore } from '../store/news';

const {
    topNewsList,
    fetchAllNews
} = useNewStore()


</script>

<style scoped>

</style>