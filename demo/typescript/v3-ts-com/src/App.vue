<template>
    <div>
        <MyModal ref="modal" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import MyModal from './MyModal.vue'

const modal = ref<InstanceType<typeof MyModal> | null>(null)

onMounted(() => {
    modal.value?.open()
})
</script>

<style scoped>

</style>