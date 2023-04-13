class MyComponent {
    render() {
        // render 函数产出 VNode
        return {
            tag:'div'
        }
    }
}

const componentVnode = {
    tag: MyComponent
}

// 把 elementVnode 渲染到 id 为 app 的元素下
render(componentVnode, document.getElementById('app'))

function render(vnode, container) {
    if (typeof vnode.tag === 'string') {
        // html 标签
        mountElement(vnode, container)
    } else {
        // 组件
        console.log(vnode)
        mountComponent(vnode, container)
    }
}

function mountComponent(vnode, container) {
    // 创建组件实例
    const instance = new vnode.tag() // Component 类
    // 渲染  组件的虚拟
    console.log(instance)
    console.log(instance.render())
    instance.$vnode = instance.render()
    // 挂载
    mountElement(instance.$vnode, container)
}

function mountElement(vnode, container) {
    // 创建元素
    const el = document.createElement(vnode.tag)
    // 将元素添加到容器
    container.appendChild(el)
}



// import { template } from 'lodash'
// import { h, init } from 'snabbdom'
// // init 方法用来创建 patch 函数
// const patch = init([])

// // 返回值是 VDOM
// const MyComponent = props => {
//   return h('h1', props.title)
// }

// // 组件的产出是 VNode
// const prevVnode = MyComponent({ title: 'prev' })
// // 将 VNode 渲染成真实 DOM
// patch(document.getElementById('app'), prevVnode)

// const compiler = template('<h1><%= title %></h1>')
// const html = compiler({ title: 'My Component' })

// document.getElementById('app').innerHTML = html
// setTimeout(() => {
//     const html2 = compiler({title: '字节大神'})
//     document.getElementById('app').innerHTML = html2
// }, 2000)

// props 数据参数 子组件
// const MyComponent = props => {
//     // render
//     const compiler = MyComponent.cache || template('<h1><%= title %></h1>')
//     return compiler(props)
// }
// MyComponent.cache = null

// document.getElementById('app').innerHTML = MyComponent({title: 'MyComponent'})