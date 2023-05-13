<template>
  <div>Home</div>
</template>

<script setup>
const { pending, data, error } = await useIndexDataApi();

console.log(data, "----");
</script>
