<script>
  let d = [];
  for (let i = 0; i < 100000; i++) {
    d.push({id: 1, value: i});
  }
  export default (await import('vue')).defineComponent({
    data() {
      return {
        data: d
      }
    }
  })
</script>

<template>
  <VirtualList :listData="data"></VirtualList>
</template>

<style scoped>
</style>
