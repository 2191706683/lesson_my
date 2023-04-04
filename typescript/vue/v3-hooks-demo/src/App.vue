<script setup lang="ts">
import { useToggle } from '@vueuse/core'
const [ value, toggle ] = useToggle()
</script>

<template>
  <div>
    <p>Value：{{ value ? 'ON': 'OFF' }}</p>
    <button @click="toggle()">
      Toggle
    </button>
    <button @click="value = true">
      Set On
    </button>
    <button @click="value = false">
      Set Off
    </button>
  </div>
</template>

<style scoped>
</style>
