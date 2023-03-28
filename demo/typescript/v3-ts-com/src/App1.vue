<script setup lang="ts">
// 运行时申明
// 对props 的静态类型约束？
// const props = defineProps({
//   foo: { type: String, require: true, default: '123'},
//   bar: Number
// })
// 宏函数
interface Props {
  foo: string
  bar?: number
}
const props = withDefaults(defineProps<Props>(), {
  foo: 'hello',
  bar: 1
})

// composition api 常用的
/*
 * ref
 * reactive
 * computed
 * watch
 * mounted
 *
 */
</script>

<template></template>

<style scoped></style>
