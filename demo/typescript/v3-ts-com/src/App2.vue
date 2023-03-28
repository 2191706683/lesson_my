<template>
    <div>

    </div>
</template>

<script setup lang="ts">
// const emit = defineEmits(['change', 'update'])
const emit = defineEmits<{
    (e: 'change', id: number): void
    (e: 'update', value: string): void
}>()
emit('change', 12)
emit('update', '12')
</script>

<style scoped>

</style>