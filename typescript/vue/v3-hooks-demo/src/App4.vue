<template>
  <div>
    <button @click="clickedFn">Smash me!</button>
    <note>Delay is set to 1000ms for this demo</note>
    <p>Button clicked：{{ clicked }}</p>
    <p>Event handler called: {{ updated }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useThrottleFn } from '@vueuse/core'

const updated = ref(0)
const clicked = ref(0)
const throttledFn = useThrottleFn(() => {
  updated.value += 1
}, 1000)

function clickedFn() {
  clicked.value += 1
  throttledFn()
}
// const state = reactive({
//   name: '',
//   color: '',
//   size: '',
// })
// const theDefault = {
//   name: 'Banana',
//   color: 'Yellow',
//   size: 'Medium',
//   count: 0
// }
// const state = useStorage('vue-use-local-storage', theDefault)
</script>

<style scoped>

</style>