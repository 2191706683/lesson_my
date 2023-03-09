<script setup>
import { ref, onMounted } from 'vue'
import BackTop from './components/BackTop.vue';
import HorizenScrollMenu from './components/HorizenScrollMenu.vue'

const showHeight = ref(0)
onMounted(() => {
  showHeight.value = window.innerHeight
})
</script>

<template>
  <HorizenScrollMenu />
  <BackTop :showHeight="showHeight">
    回到顶部
  </BackTop>
  <div style="height: 3000px;"></div>
</template>

<styles lang="styluss" scoped>

</styles>
