// import { h } from 'snabbdom'
import { Fragment, h } from './h'
import { Component } from './component'
import render from './render'

// const elementVNode = h(
//     'div',
//     {
//         style: {
//             height: '100px',
//             width: '100px',
//             background: 'red'
//         }
//     },
//     h('div', {
//         style: {
//             height: '50px',
//             width: '50px',
//             background: 'green'
//         }
//     })
// )
// // console.log(elementVNode)
// render(elementVNode, document.getElementById('app'))

// const dynamicClass = ['class-b', 'class-c']

// const elementVNode = h('div', { class: ['class-a', ...dynamicClass]})
// render(elementVNode, document.getElementById('app'))


const elementVNode = h('input', {
     class: 'cls-a',
     type: 'checkbox',
     checked: true,
     custom: '1'
})
render(elementVNode, document.getElementById('app'))


// const elementVNode = h('div', null, h('span'))
// console.log(elementVNode)

// const elementWithTextVNode = h('div', null, '我是文本')
// console.log(elementWithTextVNode)

// const FragmentVNode = h(Fragment, null, [h('h1'), h('h1')])
// console.log(FragmentVNode)

// // 函数组件
// function MyFunctionalComponent() {

// }
// const functionalComponentVNode = h(MyFunctionalComponent)
// console.log(functionalComponentVNode)

// class MyStatefulComponent extends Component {

// }
// const statefulComponentVNode = h(MyStatefulComponent, null, h('div')) 
// console.log(JSON.stringify(statefulComponentVNode))
// console.log(statefulComponentVNode)

