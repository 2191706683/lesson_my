<template>
    <div>
        <!-- 一屏半左右 -->
        <!-- 头部组件 -->
        <AppHeader />
        <!-- 频道组件 -->
        <HomeChannel />
        <!-- 轮播图 -->
        <HomeSwipe :swiperList="swiperList" />
        <!-- 视频组件 容器组件 -->
        <HomeVideoList />
    </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import HomeChannel from '@/components/HomeChannel.vue'
import HomeSwipe from '@/components/HomeSwipe.vue'
import HomeVideoList from '@/components/HomeVideoList.vue'
import { onMounted, computed } from 'vue'
// 本地组件以后基本不发送请求
// import { getSwiperList, getVideosList } from '@/service/home.js'
import { useProductsStore } from '@/store/products'
import { useHomeStore } from '@/store/home'

const productsStore = useProductsStore()
const products = computed(() => productsStore.all)

const homeStore = useHomeStore()
const swiperList = computed(() => homeStore.swiperList)
const videosList = computed(() => homeStore.videosList)

onMounted(async () => {
    await productsStore.getAllProducts() // actions 函数就是交给生命周期调用的
    await homeStore.getSwiperList()
    await homeStore.getVideosList()
    // const swiperData = await getSwiperList()
    // const videosData = await getVideosList()
    // console.log(swiperData)
    // console.log(videosData)
    /* fetch('/swiperList')
        .then(data => {
            console.log(data, '////')
        }) */
})
</script>

<style lang="stylus" scoped>

</style>