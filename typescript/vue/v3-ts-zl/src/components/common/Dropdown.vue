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
import { ref, defineComponent, watch } from 'vue';
import useClickOutside from '../../hooks/useClickOutside'
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
        const dropdownRef = ref<HTMLElement | null>(null) // 联合类型
        // hooks 函数的ref / reactive 和 组件内的响应式 一样的地位
        const { isClickOutside } = useClickOutside(dropdownRef) // 点了外面
        watch(isClickOutside, () => {
            if (isOpen.value && isClickOutside.value) {
                isOpen.value = false
            }
        }) 
        
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