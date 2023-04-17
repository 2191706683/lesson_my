// // console.log('hello parcel')
// import { h } from './h' // VNODE 的生成
// import render from './render' // 渲染

// const prevNode = h('div', null, '旧的VNode')
// render(prevNode, document.getElementById('app'))

// class MyComponent {
//     render() {
//         return h('div', null, '新的VNode')
//     }
// }
// const nextVNode = h(MyComponent) // 内存？

// setTimeout(() => {
//     render()
// })

// const handler = () => alert('clicked')
// const prevVNode = h('div', {
//     style: {
//         width: '100px',
//         height: '100px',
//         backgroundColor: 'red'
//     },
//     oncllick: handler
// })

// const nextVNode = h('div', {
//     style: {
//         width: '100px',
//         height: '100px',
//         border: '1px solid green'
//     },
// })
