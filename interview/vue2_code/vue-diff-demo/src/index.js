import { h } from './h.js'; // VNODE 的生成
import render from './render.js' // 渲染

const prevVNode = h('ul', null, [
    h('li', { key: 'a' }, 1),
    h('li', { key: 'b' }, 2),
    h('li', { key: 'c' }, 3)
  ])
  
  // 新的 VNode
  const nextVNode = h('ul', null, [
    h('li', { key: 'c' }, 3),
    h('li', { key: 'a' }, 1),
    h('li', { key: 'b' }, 2)
  ])




// const prevNode = h(
//     'div',
//     null,
//     [
//         h('p', { key: 'a' }, '子节点1'),
//         h('p', { key: 'b' }, '子节点2'),
//         h('p', { key: 'c' }, '子节点3')
//     ]
// )
// const nextVNode = h(
//     'div',
//     null,
//     [
//         h('p', { key: 'd' }, '子节点1'),
//         h('p', { key: 'a' }, '子节点2'),
//         h('p', { key: 'b' }, '子节点3')
//     ]
// )

/* const nextVNode = h('div', {
    style: {
        width: '100px',
        height: '100px',
        border: '1px solid green'
    }
})
 */
// const prevNode = h('div', null, '旧的VNode')
render(prevVNode, document.getElementById('app'))
// class MyComponent {
//     render() {
//         return h('div', null, '新的VNode')
//     }
// }
// const nextVNode = h(MyComponent) // 内存？ 

setTimeout(() => {
    render(nextVNode, document.getElementById('app'))
}, 3000)

