<template>
  <div class="navbar">
    <div class="container flex items-center h-[60px]">
      <n-button text class="!text-xl !font-bold" @click="goHome">IT编程</n-button>
    </div>
  </div>
</template>

<script setup>
import { NButton } from "naive-ui";

const goHome = () => {
  navigateTo({
    path: "/",
  });
};
</script>

<style scoped></style>
