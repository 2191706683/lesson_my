<template>
  <div>
    ProductList
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()
const { from=''} = route.query
</script>

<style>

</style>