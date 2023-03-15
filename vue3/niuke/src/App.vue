<script setup>
import Rate from './components/Rate.vue';
import { reactive, onMounted, ref } from 'vue'
import { showLoadingToast, closeToast } from 'vant'
const state = reactive({
  hotwords: []
})
let score = ref(2)
function update(num) {
  score.value = num
}
// onMounted(async () => {
//   showLoadingToast({
//     message: '加载中...',
//     forbidClick: true,
//     duration: 0
//   })
//   const sleep = (t) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(t)
//       }, t)
//     })
//   }

//   const [a, b, c] = await Promise.all([sleep(4000), sleep(2000), sleep(1000)])
//   console.log(a, b, c)
//   closeToast()
  // await sleep();
  // state.hotwords = [{
  //   id: 1,
  //   text: '百度面试题'
  // }, {
  //   id: 2,
  //   text: '米哈游面试题'
  // }, {
  //   id: 3,
  //   text: '字节面试题'
  // }]
// })
</script>

<template>
<header>
  <div class="search_wrapper">
    <van-swipe class="search-swipe" 
      vertical 
      :autoplay="3000" 
      :show-indicators="false"
      v-if="state.hotwords.length">
      <van-swipe-item v-for="word in state.hotwords" 
      :key="word.id">{{word.text}}</van-swipe-item>
    </van-swipe>
    <Rate :value="score" theme="red" @update-rate="update"></Rate>
  </div>
</header>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-color: gray;
}
header {
  padding: 30px 18px;
}
.search_wrapper {
  width: 20rem;
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
  padding-left: 40px;
  background-color: white;
  display: flex;
  align-items: center;
}
.search-swipe {
  height: 30px;
  line-height: 30px;
  color: #333;
  font-size:14px;
}
</style>
