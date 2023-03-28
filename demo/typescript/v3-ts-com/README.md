# vue3 + typescript + composition api

- js 和 ts 区别
   js 语言？ 弱类型的脚本 不需要提前编译 代码的编译在运行的一刹那
   .ts 静态强类型  提前编译  语法检测和类型检测 专门的编译阶段
   .ts -> .js -> 运行
- 为什么 ts 比 js 更适合大型项目？
   js 缺乏类型检测，很多莫名奇妙的bug，
   ts 可以解决90%以上的这些问题，因为它可以在编译阶段发现

- 为什么要用ts?
   1. 大型项目多人协作的时候, 接口, type 等 可以帮我们约束代码如何被使用
      ts 起到了文档作用 会有代码建议, 同样不容易出错
   2. js 弱类型 容易出现类似input 12 确实字符串
- props
   利用泛型约束 defineProps<{

   }>
   interface Props {
      bar?: number
   }
   defineProps<Props>
   interface 的缺点是 不支持 默认值, 宏函数 withDefaults (defineProps, {})

- defineEmits
// 运行时, const emit = defineEmits(['change', 'update'])
// 基于类型 对触发事件有更好的控制

- ref
   vue 中 有 Ref 类型
   :Ref<number>
   ref<nubmer>()

- reactive
   - 把对象变成响应式
      应该有哪些属性 interface
   const book: Book = reactive({title: 1})

- computed
   是一个计算属性,函数 得到返回值
   const double = computed<number>(() => )

- template 事件
   - Event
   - ts 在编译阶段 event.target.null 没有value
      通过(event.target as HTMLInputElement).value
      给vue所有html标签都创建了类

- ref 标注dom 节点时
  - 由于 el.value 节点对象可能为null
  - 可能是如何dom 对象,
      const el = ref<HTMLInputElement | null>(null)
      el.value?.focus()
      ?. 兼容null
