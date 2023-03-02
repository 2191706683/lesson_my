<template>
    <div class="item">
        <div>
            <img :src="goods.pic" alt="">
        </div>
        <div>
            {{ goods.title }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    goods: {
        type: Object,
        default: {}
    }
})
</script>

<style scoped>
img {
    width: 100%;
}
</style>