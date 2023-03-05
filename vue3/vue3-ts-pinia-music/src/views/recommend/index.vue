<template>
    <div>
        <div class="recommend">
            <Banners v-if="banners.length" :banners="banners" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useRecommendStore } from '@/store/recommend';
import Banners from '@/components/banners/index.vue'

const recommendStore = useRecommendStore()
const banners = computed(() => recommendStore.banners)

onMounted(async () => {
    await recommendStore.getBannersData()
    console.log(banners)
})
</script>

<style scoped>

</style>