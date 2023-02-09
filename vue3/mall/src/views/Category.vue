<template>
    <div class="category">
        <div>
            <header class="category wrap">
                <i class="nbicon nbfanhui"></i>
                <div class="header-search">
                    <i class="nbicon nbSearch"></i>
                    <router-link class="search-title" to="product-list?from=category">
                        全场50元起步
                    </router-link>
                </div>
                <i class="iconfont icon-More"></i>
            </header>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import NavBar from '~/NavBar.vue'
import { showLoadingToast, closeToast } from 'vant'
import { useRouter } from 'vue-router'

const state = reactive({
    loading: true
})

const router = useRouter()

onMounted(() => {
    showLoadingToast({
        message: '加载中'
    })
    closeToast()
})
</script>

<style lang="stylus" scoped>

</style>