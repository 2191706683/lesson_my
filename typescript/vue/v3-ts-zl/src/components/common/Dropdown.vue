<template>
    <div class="dropdown" ref="dropdownRef"> 
        <a 
            href="#" 
            @click.prevent="toggleOpen"
            class="btn btn-outline-light my-2 dropdown-toggle"
        >
            {{ title }}
        </a>
        <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
            <slot />
        </ul>
    </div>
</template>

<script lang="ts">
// setup 类似组件里的方法，composition-api
import { defineComponent } from 'vue';
import { ref } from 'vue';
export default defineComponent({
    name: 'Dropdown',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup() {
        // ref reactive
        const isOpen = ref(false) // 私有状态
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        const dropdownRef = ref<HTMLElement | null>(null)
        return {
            isOpen,
            toggleOpen,
            dropdownRef
        }
    }
})
</script>

<style scoped>

</style>