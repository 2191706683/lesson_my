<template>
    <!-- 不要写的和原来产品一摸一样 -->
    <div>
        <van-swipe 
            :autoplay="3000"
            indicator-color="white"
        >
            <van-swipe-item v-for="item in props.swiperList" :key="item.imgSrc">
                <img v-lazy="item.imgSrc" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
    const props = defineProps(['swiperList'])
</script>

<style lang="stylus" scoped>
    .my-swiper
        img
            width 100%
</style>