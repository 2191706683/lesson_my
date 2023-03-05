<template>
    <div>
        Recommend
    </div>
</template>

<script setup lang="ts">
import { useRecommendStore } from '@/store/recommend';

const recommendStore = useRecommendStore()

recommendStore.getBannersData()
</script>

<style scoped>

</style>