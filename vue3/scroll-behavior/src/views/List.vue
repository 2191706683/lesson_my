<template>
    <div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
    </div>
</template>

<script setup>
import { onActivated } from 'vue'
// composition api
import { onBeforeRouteLeave } from 'vue-router'

onActivated(() => {
    if (localStorage.getItem('scroll')) {
        window.scrollTo(0, parseInt(localStorage.getItem('scroll')))
    }
})

onBeforeRouteLeave(() => {
    // console.log(document.documentElement.scrollTop, '////')
    localStorage.setItem('scroll',document.documentElement.scrollTop)
})
</script>

<style scoped>
.item {
    height: 1000px;
}
.item:nth-child(2n) {
    background: green;
}
.item:nth-child(2n+1) {
    background: black;
}
</style>