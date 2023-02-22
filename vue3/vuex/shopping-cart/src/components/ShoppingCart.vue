<template>
    <div>
        ShoppingCart
    </div>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { computed } from 'vue'

    const store = useStore()
    const items = computed(() => store.state.cart.items)
    console.log(items)
</script>
    
<style lang="stylus" scoped>

</style>