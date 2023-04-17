import { h } from './h.js'; // VNODE 的生成
import render from './render.js' // 渲染

// const handler = () => alert('clicked');
/* const  prevNode = h('div', {
    style: {
        width: '100px',
        height: '100px',
        backgroundColor: 'red'
    },
    onclick: handler
}) */
const prevNode = h(
    'div',
    null,
    h('p', null, '子节点1')
)
const nextVNode = h(
    'div',
    null,
    [
        h('p', null, '子节点1'),
        h('p', null, '子节点2')
    ]
)

/* const nextVNode = h('div', {
    style: {
        width: '100px',
        height: '100px',
        border: '1px solid green'
    }
})
 */
// const prevNode = h('div', null, '旧的VNode')
render(prevNode, document.getElementById('app'))
// class MyComponent {
//     render() {
//         return h('div', null, '新的VNode')
//     }
// }
// const nextVNode = h(MyComponent) // 内存？ 

setTimeout(() => {
    render(nextVNode, document.getElementById('app'))
}, 3000)

