<template>
    <div>
        Add
        {{ profile.loginUserName }} {{ profile.nickName }}
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useUserStore } from '@/store/user.js';
// 如何从中央取 profile 到页面组件
const userStore = useUserStore() // useRouter hooks函数
// console.log(userStore.profile.loginUserName, '-------')

const profile = computed(() => userStore.profile)

</script>

<style lang="stylus" scoped>

</style>