<template>
  <div class="card mt-1">
    <div class="spinner-border p-2 m-2" role="status" v-if="loading">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="card-body text-start" v-if="!loading">
      <h5 class="card-title">
        <a :href="detail.url">{{ detail.title }}</a>
      </h5>
      <p class="card-text text-end">
        Score: <b>{{ detail.score }}</b>
        <br>
        by: <i>{{ detail.by }}</i>
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref, reactive, defineProps } from 'vue'
let loading = ref(true)
const props = defineProps({
  detail: Object
})
const detail = reactive(props.detail)
onMounted(() => {
  setTimeout(() => {
    loading = !loading
  }, 2000)
})
</script>

<style>

</style>