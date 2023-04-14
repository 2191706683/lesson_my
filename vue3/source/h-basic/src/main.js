// import { h } from 'snabbdom'
import { Fragment, h } from './h'
const elementVNode = h('div', null, h('span'))
console.log(elementVNode)

const elementWithTextVNode = h('div', null, '我是文本')
console.log(elementWithTextVNode)

const FragmentVNode = h(Fragment, null, [h('h1'), h('h1')])
console.log(FragmentVNode)

// 函数组件
function MyFunctionalComponent() {

}
const functionalComponentVNode = h(MyFunctionalComponent)
console.log(functionalComponentVNode)