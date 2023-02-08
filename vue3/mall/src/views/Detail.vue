<template>
    <div class="product-detail">
        <SimpleHeader name="商品详情"></SimpleHeader>
    </div>
</template>

<script setup>
import { onMounted,reactive } from 'vue';
import { useRoute } from 'vue-router'
import { getDetail } from '@/service/detail';
import SimpleHeader from '~/SimpleHeader.vue'
// router 是所有路由的集合
const route = useRoute()
const state = reactive({
    detail: []
})
onMounted(async () => {
    const { id } = route.params
    const { data } = await getDetail(id) // 异步
    state.detail = data

})

</script>

<style lang="stylus" scoped>

</style>